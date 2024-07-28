<script setup lang="ts">
import ky from 'ky'
import { nanoid } from 'nanoid'
import { useGeolocation } from '@vueuse/core'
import { useDialog } from 'naive-ui'
import { GeneratedAIURL, MindImage, MindMarker } from '~/constants/CreatePageID'
import { blobToBase64 } from '~/utils/blobToBase64'

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
const dialog = useDialog()
const router = useRouter()

async function submit() {
  loading.value = true
  const photoBLob = await ky.get(`https://cors-anywhere.supermap.id/${localStorage.getItem(GeneratedAIURL)!}`).blob()
  const photoBase64 = await blobToBase64(photoBLob)
  await ky.post(`${import.meta.env.VITE_BACKEND_URL}/merchant`, {
    json: {
      id: nanoid(),
      name: name.value ?? '',
      long: coords.value.longitude,
      lat: coords.value.latitude,
      mindfile: localStorage.getItem(MindMarker)!.replace('data:application/octet-stream;base64,', ''),
      photo: photoBase64.replace('data:image/png;base64,', ''),
    },
  })

  dialog.success({
    title: 'Photo submitted successfully.',
    closeOnEsc: false,
    closable: false,
    onPositiveClick(e) {
      router.push('/merchant')
    },
    negativeText: undefined,
    positiveText: 'Back to home',
  })

  loading.value = false
}

onMounted(() => {
  imgAIRef.value!.src = localStorage.getItem(GeneratedAIURL) ?? ''
  imgMarkerRef.value!.src = localStorage.getItem(MindImage) ?? ''
})
</script>

<template>
  <div class="absolute left-0 top-0 h-full w-full">
    <MerchantHeader>
      Submit
    </MerchantHeader>

    <canvas id="myCanvas" style="display: none" />
    <img ref="imgMarkerRef" class="mb-2 h-[40%] w-full bg-gray">
    <img id="imgAIRef" ref="imgAIRef" class="mb-4 h-[40%] w-full bg-gray">

    <div class="box-border w-full px-3">
      <NFormItem label="Name">
        <NInput v-model:value="name" />
      </NFormItem>

      <NButton
        type="primary"
        class="mb-5 w-full"
        :disabled="loading || name == null"
        :loading="loading"
        @click="() => {
          submit()
        }"
      >
        Submit
      </NButton>
    </div>
  </div>
</template>

<style scoped>

</style>
