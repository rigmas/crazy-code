<script setup lang="ts">
import { until, useGeolocation } from '@vueuse/core'
import type { GeoJSONSource } from 'maplibre-gl'
import type { Feature, Point } from 'geojson'
import { Map as MglMap } from 'maplibre-gl'
import { nearestPoint as findNearestPoint } from '@turf/nearest-point'
import { TransitionSlide } from '@morev/vue-transitions'
import { UserMarkerLayerID, addUserMarker } from './addUserMarker'

const router = useRouter()
let map: MglMap

const {
  coords,
  error,
  resume,
  pause,
  isSupported,
} = useGeolocation({
  enableHighAccuracy: true,
  immediate: true,
})

watchThrottled(coords, () => {
  const source = map.getSource(UserMarkerLayerID) as GeoJSONSource
  if (source == null)
    throw new Error('source not found')

  source.setData({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [coords.value.longitude, coords.value.latitude],
    },
    properties: {
      heading: coords.value?.heading ?? 0,
    },
  })

  findMerchantInsideBuffer()
}, { throttle: 500 })

const BufferRadius = 100
const merchantFeatures: Feature<Point>[] = []
const nearestIndex = ref<number>()
const nearestName = computed(() => {
  if (nearestIndex.value == null) {
    return ''
  }
  return merchantFeatures[nearestIndex.value]?.properties?.name ?? ''
})

function findMerchantInsideBuffer() {
  if (merchantFeatures.length === 0) {
    return
  }
  const nearestPoint = findNearestPoint({
    type: 'Point',
    coordinates: [coords.value.longitude, coords.value.latitude],
  }, {
    type: 'FeatureCollection',
    features: merchantFeatures,
  }, {
    units: 'meters',
  })

  if (nearestPoint.properties.distanceToPoint > BufferRadius) {
    nearestIndex.value = undefined
    return
  }

  nearestIndex.value = nearestPoint.properties.featureIndex
}

onMounted(() => {
  map = new MglMap({
    container: 'map',
    refreshExpiredTiles: false,
    attributionControl: false,
    style: {
      version: 8,
      glyphs: 'https://fontstack-pbf.supermap.id/{fontstack}/{range}.pbf',
      sources: {
        osmLight: {
          type: 'raster',
          tiles: [
            'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
            'https://b.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
          ],
        },
      },
      layers: [
        {
          id: 'osmLight',
          source: 'osmLight',
          type: 'raster',
        },
      ],
    },
    pitch: 45,
  })

  map.on('load', async () => {
    await addUserMarker(map)
    resume()

    await until(coords).toMatch(({
      latitude,
      longitude,
    }) => latitude !== Number.POSITIVE_INFINITY && longitude !== Number.POSITIVE_INFINITY)

    map.setZoom(16)
    map.setCenter([coords.value.longitude, coords.value.latitude])
    map.setPitch(45)
  })
})
</script>

<template>
  <div class="absolute left-0 top-0 h-full w-full">
    <div class="absolute left-0 top-0 z-10 box-border w-full flex items-center justify-between bg-white px-4 py-3 shadow-sm">
      <NButton
        class="" text size="large" @click="() => {
          router.push('/')
        }"
      >
        <template #icon>
          <i class="i-solar:alt-arrow-left-line-duotone" />
        </template>
        <span class="text-sm">
          Back to home
        </span>
      </NButton>

      <div class="text-lg font-bold">
        World Map
      </div>
    </div>

    <div id="map" class="map relative h-full w-full" />
  </div>

  <Teleport to="body">
    <TransitionSlide :offset="[0, '100%']">
      <div v-if="nearestIndex != null" class="absolute bottom-0 box-border w-full rounded-lg rounded-lg bg-white px-4 py-6 shadow-lg">
        <div class="mb-4 w-full text-lg">
          You have arrived at <span class="font-bold">{{ nearestName }}</span>
        </div>

        <button class="w-full btn">
          Go inside
        </button>
      </div>
    </TransitionSlide>
  </Teleport>
</template>

<style>
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
