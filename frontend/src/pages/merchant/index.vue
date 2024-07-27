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
  { icon: 'mdi:message', text: 'Masukan' },
]
</script>

<template>
  <div class="p-4 font-sans">
    <div class="flex items-center justify-between">
      <div class="flex flex-col">
        <div class="text-2xl font-bold mt-3">Halo, John Doe</div>
        <div class="text-gray-500 text-lg mt-3">Ayam Geprek - Grand Indonesia</div>
        <div class="flex items-center w-fit mt-3" style="background-color: #D9FCDE; border-radius: 5px;">
          <span class=" text-lg ml-2" style="color: #06B056; font-weight: bold; ">Rp 10.000.000</span>
          <Icon icon="mdi:chevron-right" class="text-gray-500" />
        </div>
      </div>
    </div>

    <div class="mt-5 p-4 rounded-lg flex flex-row flex-justify-between " style="background-color: #009040">
      <Icon icon="mdi:wallet-bifold" class="text-2.5rem mt-2" style="color: white" />
      <div>
        <div class="text-lg" style="color: #FBFFFF">Total penjualan hari ini</div>
        <div class="flex flex-row">
          <div class="mt-1.5 mr-1" style="color: #FBFFFF">Rp </div>
          <div class="text-2xl font-bold" style="color: #FBFFFF"> 2.350.100</div>
        </div>
      </div>
      <div>
        <div class="text-sm mt-2" style="color: #FBFFFF">dari kemarin </div>
        <div class="text-sm mt-1" style="color: #FBFFFF"> Rp 2.350.100</div>
      </div>
    </div>

    <NButton @click="toJourney" type="primary" class="w-full mt-6" size="large">Start Decorating Store</NButton>

    <div class="grid grid-cols-4 gap-4 mt-7">
      <div class="flex flex-col items-center text-center" v-for="item in menuItems" :key="item.text">
        <div class="w-14 h-14 flex justify-center items-center bg-gray-100 rounded-lg mb-1">
          <Icon :icon="item.icon" class="text-2xl" />
        </div>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>
