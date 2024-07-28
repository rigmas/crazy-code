<script setup lang="ts">
import { generateImage } from '~/services/generateImage'
import { GeneratedAIURL } from '~/constants/CreatePageID'

const router = useRouter()
const imageRef = ref<HTMLImageElement>()

const text = ref<string>()
const loading = ref(false)
const imageURL = ref<string>()

async function generate() {
  loading.value = true
  try {
    const res = await generateImage(text.value!)
    imageRef.value!.src = res.data.data[0].url
    imageURL.value = res.data.data[0].url
  }
  catch (e) {
    console.error(e)
  }
  finally {
    loading.value = false
  }
}

function continueToSubmit() {
  localStorage.setItem(GeneratedAIURL, imageURL.value!)
  router.push('/merchant/create-submit')
}

function retake() {
  imageURL.value = undefined
  imageRef.value!.src = ''
  generate()
}
</script>

<template>
  <div class="absolute left-0 top-0 h-full w-full">
    <MerchantHeader>
      Generate with AI
    </MerchantHeader>

    <img ref="imageRef" class="mb-5 h-[60%] w-full bg-gray">

    <NInput v-model:value="text" class="mb-3" type="textarea" />
    <div class="absolute bottom-5 w-full flex justify-between">
      <NButton
        text class="w-[150px] grow-0" :disabled="loading" @click="() => {
          router.push('/merchant')
        }"
      >
        Back
      </NButton>

      <NButton
        v-if="imageURL == null"
        :loading="loading"
        :disabled="loading || text == null"
        type="primary" secondary class="grow-1" @click="() => {
          generate()
        }"
      >
        Create
      </NButton>

      <NButton
        v-else
        type="primary" text class="grow-1" @click="() => {
          retake()
        }"
      >
        Revise
      </NButton>

      <NButton
        v-if="imageURL != null"
        type="primary" text class="grow-1" @click="() => {
          continueToSubmit()
        }"
      >
        Continue
      </NButton>
    </div>
  </div>
</template>

<style scoped>

</style>
