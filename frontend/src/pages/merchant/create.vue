<script setup lang="ts">
import 'mind-ar'
import 'mind-ar/dist/mindar-image.prod'
import { ref, watchEffect } from 'vue'
import { useDevicesList, useUserMedia } from '@vueuse/core'
import { MindImage, MindMarker } from '~/constants/CreatePageID'
import { blobToBase64 } from '~/utils/blobToBase64'

const router = useRouter()
const currentCamera = ref<string>()
const { videoInputs: cameras } = useDevicesList({
  requestPermissions: true,
  onUpdated() {
    if (!cameras.value.find(i => i.deviceId === currentCamera.value)) {
      const backFacing = cameras.value.find(c => c.label.includes('back'))
      // currentCamera.value = cameras.value[0]?.deviceId
      currentCamera.value = backFacing == null ? cameras.value[0]?.deviceId : cameras.value[0]?.deviceId
    }
  },
  constraints: {
    video: {
      facingMode: {
        exact: 'environment',
      },
    },
  },
})

const backFacing = computed(() => {
  if (cameras.value.length === 0) {
    return
  }
  const found = cameras.value.find(i => i.label.includes('back'))
  return (found ?? cameras.value[0]).deviceId
})

const {
  stream,
  enabled,
} = useUserMedia({
  constraints: { video: { deviceId: backFacing } },
  enabled: false,
  autoSwitch: true,
})

const videoRef = ref<HTMLVideoElement>()
const videoCanvasRef = ref<HTMLCanvasElement>()
const imgRef = ref<HTMLImageElement>()

function setImage(src: string, width: number, height: number) {
  imgRef.value!.src = src
  imgRef.value!.style.display = 'inherit'
  imgRef.value!.style.width = `${width}px`
  imgRef.value!.style.height = `${height}px`
  enabled.value = false
}

const captured = ref(false)
const capturing = ref(false)
const capturingProgress = ref(0)

function retake() {
  imgRef.value!.style.display = 'none'
  captured.value = false
  enabled.value = true
}

let imageBuffer: ArrayBuffer

async function captureImage() {
  const height = stream.value?.getVideoTracks()[0].getSettings().height ?? 1920
  const width = stream.value?.getVideoTracks()[0].getSettings().width ?? 1080

  capturing.value = true
  videoCanvasRef.value?.setAttribute('width', width)
  videoCanvasRef.value?.setAttribute('height', height)
  console.log(videoRef.value?.height)
  console.log(videoRef.value?.width)
  const context = videoCanvasRef.value?.getContext('2d')
  context?.drawImage(videoRef.value!, 0, 0, width, height)
  const data = videoCanvasRef.value!.toDataURL('image/png')
  const img = new Image()
  img.src = data
  setImage(data, width, height)
  img.onload = async () => {
    const compiler = new window.MINDAR.IMAGE.Compiler()
    await compiler.compileImageTargets([img], (p) => {
      capturingProgress.value = p
      console.log(p)
    })
    imageBuffer = await compiler.exportData()
    // const blob = new Blob([buff])
    // const dl = document.createElement('a')
    // dl.download = `targets--${Date.now()}.mind`
    // dl.href = URL.createObjectURL(blob)
    // // dl.click()
    // // URL.revokeObjectURL(dl.href)
    capturing.value = false
    captured.value = true
  }
}

async function continue2AI() {
  const mindText = await blobToBase64(new Blob([imageBuffer]))
  localStorage.setItem(MindMarker, mindText)
  localStorage.setItem(MindImage, imgRef.value!.src)

  await router.push('/merchant/create-ai')
}

watchEffect(() => {
  if (videoRef.value)
    videoRef.value.srcObject = stream.value!
})

onMounted(async () => {
  // console.log(mindAr)

  await until(backFacing).toBeTruthy()
  enabled.value = true
})
</script>

<template>
  <Teleport to="body">
    <TransitionFade>
      <div
        v-if="capturing" class="absolute top-0 z-36 h-full w-full flex items-center justify-center"
        style="background-color: rgba(0,0,0,0.21)"
      >
        <NSpin />
      </div>
    </TransitionFade>
  </Teleport>
  <div class="absolute left-0 top-0 h-full w-full">
    <MerchantHeader>
      Take target picture
    </MerchantHeader>

    <canvas id="video-capturer" ref="videoCanvasRef" class="absolute z-[-5]" style="display: none" />
    <video ref="videoRef" autoplay muted class="h-full w-full" />
    <div class="absolute left-0 top-0 h-full w-full flex items-center justify-center">
      <img ref="imgRef" class="h-[60%]" style="display: none;  background-size: contain;">
    </div>

    <div class="absolute bottom-5 box-border w-full flex items-center justify-center bg-white px-4">
      <div
        v-if="!captured"
        class="h-[100px] w-[100px] bg-[#41835654] hover:cursor-pointer"
        style="border-radius: 50%;"
        @click="() => { captureImage() }"
      >
        <div class="relative left-[10px] top-[10px] h-[80px] w-[80px] bg-[#0aa03b]" style="border-radius: 50%;" />
      </div>
      <div v-else class="w-full flex justify-center">
        <NButton class="mr-4" type="primary" text @click="() => { retake() }">
          Retake
        </NButton>

        <NButton
          class="" type="primary" secondary @click="() => {
            continue2AI()
          }"
        >
          Continue to AI image
        </NButton>
      </div>
    </div>
    <!--      <div class="flex flex-col gap-4 text-center"> -->
    <!--    <div> -->
    <!--      <canvas id="video-capturer" ref="videoCanvasRef" style="visibility: hidden;" /> -->
    <!--      <video ref="videoRef" autoplay controls muted class="h-100 w-auto" /> -->
    <!--    </div> -->
    <!--    <div> -->
    <!--      <img ref="imgRef" class="h-100 w-auto"> -->
    <!--    </div> -->
    <!--  </div> -->
  </div>
</template>
