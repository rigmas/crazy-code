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
    <div class="flex items-center justify-between">
      <div class="flex flex-col">
        <p class="text-2xl font-bold">
          Halo, John Doe
        </p>
        <p class="text-lg text-gray-500">
          Resto Geprek - Grand Indonesia
        </p>
        <div class="w-fit flex items-center" style="background-color: #D9FCDE; border-radius: 5px;">
          <span class="ml-2 text-lg" style="color: #06B056; font-weight: bold; ">Rp 10.000.000</span>
          <Icon icon="mdi:chevron-right" class="text-gray-500" />
        </div>
      </div>
    </div>

    <div class="mt-4 flex flex-row flex-justify-between rounded-lg p-4" style="background-color: #009040">
      <Icon icon="mdi:wallet-bifold" class="mt-2 text-2.5rem" style="color: white" />
      <div>
        <p class="text-lg" style="color: #FBFFFF">
          Total penjualan hari ini
        </p>
        <div class="">
          <div class="text-2xl font-bold" style="color: #FBFFFF">
            <span class="mr-1 mt-1.5 text-sm font-light" style="color: #FBFFFF">Rp </span>
            2.350.100
          </div>
        </div>
      </div>
      <div>
        <p class="mt-2 text-sm" style="color: #FBFFFF">
          dari kemarin
        </p>
        <p class="mt-1 text-sm" style="color: #FBFFFF">
          Rp 2.350.100
        </p>
      </div>
    </div>

    <div class="mb-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s" alt="-" class="w-full rounded-lg">
    </div>

    <div class="grid grid-cols-4 mt-4 gap-4">
      <div v-for="item in menuItems" :key="item.text" class="flex flex-col items-center text-center">
        <div class="mb-1 h-14 w-14 flex items-center justify-center rounded-lg bg-gray-100">
          <Icon :icon="item.icon" class="text-2xl" />
        </div>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>
