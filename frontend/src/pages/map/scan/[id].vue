<script setup lang="ts">
import { TransitionSlide } from '@morev/vue-transitions'
import { fireConfetti } from '~/pages/map/scan/fireConfetti'

const route = useRoute()
const router = useRouter()

const objectFound = ref(false)
const continueExplore = ref(false)

onMounted(() => {
  window.addEventListener('message', (e) => {
    if (e.data !== 'TARGET_FOUND') {
      return
    }

    objectFound.value = true
    fireConfetti()
  })
})
</script>

<template>
  <div class="absolute left-0 top-0 h-full w-full">
    <div class="absolute left-0 top-0 box-border w-full flex items-center justify-between bg-white px-4 py-3 shadow-sm">
      <NButton
        class="" text size="large" @click="() => {
          router.push('/map')
        }"
      >
        <template #icon>
          <i class="i-solar:alt-arrow-left-line-duotone" />
        </template>
        <span class="text-sm">
          Back to world
        </span>
      </NButton>

      <div class="text-lg font-bold">
        Merchant area
      </div>
    </div>

    <Teleport to="body">
      <TransitionSlide :offset="[0, '100%']">
        <div v-if="objectFound && !continueExplore" class="absolute bottom-0 box-border w-full rounded-lg rounded-lg bg-white px-4 py-6 shadow-lg">
          <div class="mb-4 w-full text-center text-lg">
            <div class="font-bold">
              Hooraay!
            </div>
            <div class="text-base">
              Congratulation you have found the treasure
            </div>
          </div>

          <div class="w-full flex justify-center space-x-4">
            <NButton
              type="primary" secondary class="rounded-lg" @click="() => {
                router.push('/map')
              }"
            >
              Back to the world
            </NButton>
            <NButton
              text type="primary" class="" @click="() => {
                continueExplore = true
              }"
            >
              Continue explore
            </NButton>
          </div>
        </div>
      </TransitionSlide>
    </Teleport>

    <iframe class="h-full w-full" :src="`/api/render/${route.params?.id ?? ''}`" />
  </div>
</template>

<style scoped>

</style>
