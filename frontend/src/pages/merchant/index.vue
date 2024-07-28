<script setup lang="ts">
import { Icon } from '@iconify/vue'

const router = useRouter()

function toJourney() {
  router.push('/merchant/create')
}

const menuItems = [
  { icon: 'mdi:clipboard-list', text: 'Pesanan' },
  { icon: 'mdi:restaurant-menu', text: 'Menu' },
  { icon: 'mdi:bullhorn', text: 'Pemasaran' },
  { icon: 'mdi:finance', text: 'Keuangan' },
  { icon: 'mdi:account-group', text: 'Karyawan' },
  { icon: 'mdi:chart-timeline-variant', text: 'Analisis' },
  { icon: 'mdi:comment-text', text: 'Masukan' },
]

const newPromo = [
  { name: 'Superbank X Grab', img: '/superbank-grab.png' },
  { name: 'Atur Promosi Anda', img: '/atur-promo.png' },
  { name: 'Promo Kios Banget', img: '/promo-kios-banget.jpg' },
  { name: 'Serba Bisa Grab Merchant', img: '/serba-bisa-promo.jpeg' },
]
</script>

<template>
  <div class="p-5 font-sans">
    <div class="flex items-center justify-between">
      <div class="flex flex-col">
        <div class="mt-3 text-2xl font-bold">
          Halo, John Doe
        </div>
        <div class="mt-3 text-lg text-gray-500">
          Ayam Geprek - Grand Indonesia
        </div>
        <div class="mt-3 w-fit flex items-center" style="background-color: #D9FCDE; border-radius: 5px;">
          <span class="ml-2 text-lg" style="color: #06B056; font-weight: bold; ">Rp 10.000.000</span>
          <Icon icon="mdi:chevron-right" style="color: #06B056" class="text-gray-500" />
        </div>
      </div>
    </div>

    <div class="mt-5 flex flex-row flex-justify-between rounded-lg p-4" style="background-color: #009040">
      <Icon icon="mdi:wallet-bifold" class="mt-2 text-2.5rem" style="color: white" />
      <div>
        <div class="text-lg" style="color: #FBFFFF">
          Total penjualan hari ini
        </div>
        <div class="flex flex-row">
          <div class="mr-1 mt-1.5" style="color: #FBFFFF">
            Rp
          </div>
          <div class="text-2xl font-bold" style="color: #FBFFFF">
            2.350.100
          </div>
        </div>
      </div>
      <div>
        <div class="ml-4 mt-2 text-sm" style="color: #FBFFFF">
          Kemarin
        </div>
        <div class="mt-1 text-sm" style="color: #FBFFFF">
          Rp 2.350.100
        </div>
      </div>
    </div>

    <NButton type="primary" class="mt-6 w-full" size="large" @click="toJourney">
      <Icon icon="mdi-camera-outline" class="mr-3 text-xl" /> Start Decorating Store
    </NButton>

    <div class="grid grid-cols-4 mt-7 gap-4">
      <div v-for="item in menuItems" :key="item.text" class="flex flex-col items-center text-center">
        <div class="mb-1 h-14 w-14 flex items-center justify-center rounded-lg bg-gray-100">
          <Icon :icon="item.icon" class="text-2xl" />
        </div>
        <p>{{ item.text }}</p>
      </div>
    </div>

    <div class="mb-4 mt-6">
      <h2 class="mb-2 text-lg font-semibold">
        Yang Baru
      </h2>
      <div class="no-scrollbar flex overflow-x-scroll space-x-4">
        <div v-for="Merchant in newPromo" :key="Merchant.name" class="w-48 flex-shrink-0 text-center">
          <img :src="Merchant.img" alt="Merchant Image" class="mb-2 h-32 w-full rounded-lg object-cover">
          <div class="font-semibold">
            {{ Merchant.name }}
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
