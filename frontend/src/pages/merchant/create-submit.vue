<script setup lang="ts">
import ky from 'ky'
import { nanoid } from 'nanoid'
import { useGeolocation } from '@vueuse/core'
import { GeneratedAIURL, MindImage } from '~/constants/CreatePageID'

const name = ref<string>()
const imgMarkerRef = ref<HTMLImageElement>()
const imgAIRef = ref<HTMLImageElement>()

const {
  coords,
} = useGeolocation({
  enableHighAccuracy: true,
  immediate: true,
})

const loading = ref(false)

async function submit() {
  loading.value = true
  const photoBLob = await ky.get(`https://cors-anywhere.supermap.id/${localStorage.getItem(GeneratedAIURL)!}`).blob()
  const fileReader = new FileReader()
  fileReader.readAsDataURL(photoBLob)
  fileReader.onloadend = async () => {
    await ky.post(`${import.meta.env.VITE_BACKEND_URL}/merchant`, {
      json: {
        id: nanoid(),
        name: name.value ?? '',
        long: coords.value.longitude,
        lat: coords.value.latitude,
        mindfile: localStorage.getItem(MindImage)!.replace('data:image/png;base64', ''),
        photo: (fileReader.result as string).replace('data:image/png;base64', ''),
      },
    })
    loading.value = false
  }
}

onMounted(() => {
  imgAIRef.value!.src = localStorage.getItem(GeneratedAIURL) ?? ''
  imgMarkerRef.value!.src = localStorage.getItem(MindImage) ?? ''
})
</script>

<template>
  <div class="absolute left-0 top-0 h-full w-full">
    <canvas id="myCanvas" style="display: none" />
    <img ref="imgMarkerRef" class="mb-2 h-100 w-full bg-gray">
    <img id="imgAIRef" ref="imgAIRef" class="mb-4 h-100 w-full bg-gray">

    <NFormItem label="Name">
      <NInput v-model:value="name" />
    </NFormItem>

    <NButton
      @click="() => {
        submit()
      }"
    >
      Submit
    </NButton>
  </div>
</template>

<style scoped>

</style>
