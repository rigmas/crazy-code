<script setup lang="ts">
import { Icon } from '@iconify/vue'

const router = useRouter()

function toMap() {
  router.push('/map')
}

const recommendedRestaurants = [
  { name: 'Kebab Arabian', img: '../../public/chicken-kebab.jpg', description: 'Delicious Kebab' },
  { name: 'Pizza Kemanggisan', img: '../../public/supreme.jpg', description: 'Spesial Pizza' },
  { name: 'Sate Srengseng', img: '../../public/sate-kambing.jpg', description: 'Kambing Muda' },
  { name: 'Nasi Goreng Slipi', img: '../../public/nasi-goreng-special.jpg', description: 'Nasi Goreng Special' },
  { name: 'Pasta Sarinah', img: '../../public/aglio-olio.jpeg', description: 'Pasta Enak' },
]
</script>

<template>
  <div class="bg-gray-100 min-h-screen p-4">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-2">
        <div>
          <img class="mt-3" src="https://img.icons8.com/ios-glyphs/30/000000/back.png" alt="Back" />
        </div>
        <div class="mt-5">
          <div class="text-xs">DELIVER TO</div>
          <div class="font-semibold">South Quarter</div>
        </div>
        <div>
          <img class="mt-2" src="https://img.icons8.com/material-outlined/24/000000/expand-arrow.png" alt="Expand" />
        </div>
      </div>
      <div class="flex space-x-4">
        <div>
          <Icon icon="mdi-cards-heart-outline" class="text-2xl"></Icon>
        </div>
        <div>
          <Icon icon="mdi-clipboard-text-outline" class="text-2xl"></Icon>
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
    <div class="flex overflow-x-scroll no-scrollbar mb-4 space-x-4 mt-7">
      <div class="flex flex-col items-center">
        <img src="https://img.icons8.com/?size=48&id=65laSYcIZM8m&format=png&color=000000" alt="Snack" />
        <span class="text-sm">Snack</span>
      </div>
      <div class="flex flex-col items-center">
        <img src="https://img.icons8.com/?size=48&id=wqMCXXwVnkX2&format=png&color=000000" alt="Fast Food" />
        <span class="text-sm">Fast Food</span>
      </div>
      <div class="flex flex-col items-center">
        <img src="https://img.icons8.com/?size=48&id=zphNWHGZfV0i&format=png&color=000000" alt="International" />
        <span class="text-sm">International</span>
      </div>
      <div class="flex flex-col items-center">
        <img src="https://img.icons8.com/?size=48&id=yhgg1lDyYI9Z&format=png&color=000000" alt="Chicken" />
        <span class="text-sm">Chicken</span>
      </div>
      <div class="flex flex-col items-center">
        <img src="https://img.icons8.com/?size=48&id=SENAO5gAbChk&format=png&color=000000" alt="Indonesian" />
        <span class="text-sm">Indonesian</span>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4 mt-8">
      <div class="p-4 rounded-lg flex justify-between" style="background-color: #FFD2CB">
        <div>
          <div class=" font-semibold">Near Me</div>
          <div class="text-xs">Get it quick</div>
        </div>
        <Icon icon="mdi-map-marker-radius-outline" class="text-2xl mr-3 mt-1.5"></Icon>
      </div>
      <div class=" p-4 rounded-lg flex justify-between" style="background-color: #B8E5E0;">
        <div>
          <div class="font-semibold">Big Promo</div>
          <div class="text-xs">Save up to 70%</div>
        </div>
        <Icon icon="mdi-sale-outline" class="text-2xl mr-3 mt-1.5"></Icon>
      </div>
      <div class=" p-4 rounded-lg flex justify-between" style="background-color: #FFE3CC;">
        <div>
          <div class="font-semibold">Top Selling!</div>
          <div class="text-xs">Curated for you</div>
        </div>
        <Icon icon="mdi-arrow-up-bold-outline" class="text-2xl mr-3 mt-1.5"></Icon>
      </div>
      <div class=" p-4 rounded-lg flex justify-between" style="background-color: #D9FCDE;">
        <div>
          <div class="font-semibold">Payday Flash</div>
          <div class="text-xs">Disc up to 100%</div>
        </div>
        <Icon icon="mdi-flash-outline" class="text-2xl mr-3 mt-1.5"></Icon>
      </div>
    </div>

    <NButton @click="toMap" type="primary" class="w-full mt-6" size="large">Grab ARcade - Start Journey</NButton>

    <div class="mt-7 mb-4">
      <h2 class="text-lg font-semibold mb-2">Order Again</h2>
      <div class="flex overflow-x-scroll no-scrollbar space-x-4">
        <div class="flex-shrink-0 w-48" v-for="restaurant in recommendedRestaurants" :key="restaurant.name">
          <img :src="restaurant.img" alt="Restaurant Image" class="w-full h-32 object-cover rounded-lg mb-2" />
          <div class="font-semibold">{{ restaurant.name }}</div>
          <div class="text-xs text-gray-500">{{ restaurant.description }}</div>
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
