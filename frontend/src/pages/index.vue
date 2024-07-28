<script setup lang="ts">
import { Icon } from '@iconify/vue'

const router = useRouter()

function toMap() {
  router.push('/map')
}

const recommendedRestaurants = [
  { name: 'Kebab Arabian', img: '/chicken-kebab.jpg', description: 'Delicious Kebab' },
  { name: 'Pizza Kemanggisan', img: '/supreme.jpg', description: 'Spesial Pizza' },
  { name: 'Sate Srengseng', img: '/sate-kambing.jpg', description: 'Kambing Muda' },
  { name: 'Nasi Goreng Slipi', img: '/nasi-goreng-special.jpg', description: 'Nasi Goreng Special' },
  { name: 'Pasta Sarinah', img: '/aglio-olio.jpeg', description: 'Pasta Enak' },
]
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="mb-4 flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <div>
          <img class="mt-3" src="https://img.icons8.com/ios-glyphs/30/000000/back.png" alt="Back">
        </div>
        <div class="mt-5">
          <div class="text-xs">
            DELIVER TO
          </div>
          <div class="font-semibold">
            South Quarter
          </div>
        </div>
        <div>
          <img class="mt-2" src="https://img.icons8.com/material-outlined/24/000000/expand-arrow.png" alt="Expand">
        </div>
      </div>
      <div class="flex space-x-4">
        <div>
          <Icon icon="mdi-cards-heart-outline" class="text-2xl" />
        </div>
        <div>
          <Icon icon="mdi-clipboard-text-outline" class="text-2xl" />
        </div>
      </div>
    </div>

    <div class="mb-4 mt-5">
      <NInput placeholder="What shall we deliver?" class="w-full" size="large">
        <template #prefix>
          <Icon icon="mdi-search" class="mr-3 text-xl text-gray-500" />
        </template>
      </NInput>
    </div>
    <div class="no-scrollbar mb-4 mt-6 flex overflow-x-scroll space-x-4">
      <div class="flex flex-col items-center">
        <img src="https://img.icons8.com/?size=48&id=65laSYcIZM8m&format=png&color=000000" alt="Snack">
        <span class="text-sm">Snack</span>
      </div>
      <div class="flex flex-col items-center">
        <img src="https://img.icons8.com/?size=48&id=wqMCXXwVnkX2&format=png&color=000000" alt="Fast Food">
        <span class="text-sm">Fast Food</span>
      </div>
      <div class="flex flex-col items-center">
        <img src="https://img.icons8.com/?size=48&id=zphNWHGZfV0i&format=png&color=000000" alt="International">
        <span class="text-sm">International</span>
      </div>
      <div class="flex flex-col items-center">
        <img src="https://img.icons8.com/?size=48&id=yhgg1lDyYI9Z&format=png&color=000000" alt="Chicken">
        <span class="text-sm">Chicken</span>
      </div>
      <div class="flex flex-col items-center">
        <img src="https://img.icons8.com/?size=48&id=SENAO5gAbChk&format=png&color=000000" alt="Indonesian">
        <span class="text-sm">Indonesian</span>
      </div>
    </div>

    <div class="grid grid-cols-2 mb-4 mt-6 gap-4">
      <div class="flex justify-between rounded-lg p-4" style="background-color: #FFD2CB">
        <div>
          <div class="font-semibold">
            Near Me
          </div>
          <div class="text-xs">
            Get it quick
          </div>
        </div>
        <Icon icon="mdi-map-marker-radius-outline" class="mr-3 mt-1.5 text-2xl" />
      </div>
      <div class="flex justify-between rounded-lg p-4" style="background-color: #B8E5E0;">
        <div>
          <div class="font-semibold">
            Big Promo
          </div>
          <div class="text-xs">
            Save up to 70%
          </div>
        </div>
        <Icon icon="mdi-sale-outline" class="mr-3 mt-1.5 text-2xl" />
      </div>
      <div class="flex justify-between rounded-lg p-4" style="background-color: #FFE3CC;">
        <div>
          <div class="font-semibold">
            Top Selling!
          </div>
          <div class="text-xs">
            Curated for you
          </div>
        </div>
        <Icon icon="mdi-arrow-up-bold-outline" class="mr-3 mt-1.5 text-2xl" />
      </div>
      <div class="flex justify-between rounded-lg p-4" style="background-color: #D9FCDE;">
        <div>
          <div class="font-semibold">
            Payday Flash
          </div>
          <div class="text-xs">
            Disc up to 100%
          </div>
        </div>
        <Icon icon="mdi-flash-outline" class="mr-3 mt-1.5 text-2xl" />
      </div>
    </div>

    <NButton type="primary" class="mt-5 w-full" size="large" @click="toMap">
      Grab ARcade - Start Journey
    </NButton>

    <div class="mb-4 mt-7">
      <h2 class="mb-2 text-lg font-semibold">
        Order Again
      </h2>
      <div class="no-scrollbar flex overflow-x-scroll space-x-4">
        <div v-for="restaurant in recommendedRestaurants" :key="restaurant.name" class="w-48 flex-shrink-0">
          <img :src="restaurant.img" alt="Restaurant Image" class="mb-2 h-32 w-full rounded-lg object-cover">
          <div class="font-semibold">
            {{ restaurant.name }}
          </div>
          <div class="text-xs text-gray-500">
            {{ restaurant.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
