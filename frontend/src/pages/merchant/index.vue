<script setup lang="ts">
import { Icon } from '@iconify/vue'

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
    <div class="flex justify-between items-center">
      <div class="flex flex-col">
        <p class="text-2xl font-bold">Halo, John Doe</p>
        <p class="text-gray-500 text-lg">Resto Geprek - Grand Indonesia</p>
        <div class="flex items-center w-fit" style="background-color: #D9FCDE; border-radius: 5px;">
          <span class=" text-lg ml-2" style="color: #06B056; font-weight: bold; ">Rp 10.000.000</span>
          <Icon icon="mdi:chevron-right" class="text-gray-500" />
        </div>
      </div>
    </div>

    <div class="mt-4 p-4 rounded-lg flex flex-row flex-justify-between" style="background-color: #009040">
      <Icon icon="mdi:wallet-bifold" class="text-2.5rem mt-2" style="color: white" />
      <div>
        <p class="text-lg" style="color: #FBFFFF">Total penjualan hari ini</p>
        <div class="flex flex-row">
          <p class="mt-1.5 mr-1" style="color: #FBFFFF">Rp </p>
          <p class="text-2xl font-bold" style="color: #FBFFFF"> 2.350.100</p>
        </div>
      </div>
      <div>
        <p class="text-sm mt-2" style="color: #FBFFFF">dari kemarin </p>
        <p class="text-sm mt-1" style="color: #FBFFFF"> Rp 2.350.100</p>
      </div>
    </div>

    <div class="mb-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s" alt="-" class="w-full rounded-lg" />
    </div>

    <div class="grid grid-cols-4 gap-4 mt-4">
      <div class="flex flex-col items-center text-center" v-for="item in menuItems" :key="item.text">
        <div class="w-14 h-14 flex justify-center items-center bg-gray-100 rounded-lg mb-1">
          <Icon :icon="item.icon" class="text-2xl" />
        </div>
        <p>{{ item.text }}</p>
      </div>
    </div>

  </div>
</template>
