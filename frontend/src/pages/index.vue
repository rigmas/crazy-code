<script setup lang="ts">
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
          <img src="https://img.icons8.com/ios-filled/24/000000/like--v1.png" alt="Like" />
        </div>
        <div>
          <img src="https://img.icons8.com/ios-filled/24/000000/note.png" alt="Note" />
        </div>
      </div>
    </div>

    <div class="mb-4 mt-5">
      <input type="text" class="w-full p-3 rounded-full shadow-sm border border-gray-300 placeholder-gray-500" placeholder="What shall we deliver?">
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
      <div class=" p-4 rounded-lg" style="background-color: #FFD2CB">
        <div class=" font-semibold">Near Me</div>
        <div class="text-xs">Get it quick</div>
      </div>
      <div class=" p-4 rounded-lg" style="background-color: #B8E5E0;">
        <div class="font-semibold">Big Promo</div>
        <div class="text-xs">Save up to 70%</div>
      </div>
      <div class=" p-4 rounded-lg" style="background-color: #FFE3CC;">
        <div class="font-semibold">Top Selling!</div>
        <div class="text-xs">Curated for you</div>
      </div>
      <div class=" p-4 rounded-lg" style="background-color: #D9FCDE;">
        <div class="font-semibold">Payday Flash</div>
        <div class="text-xs">Disc up to 100%, order now</div>
      </div>
    </div>

    <NButton type="primary" class="w-full mt-6" size="large">Grab ARcade - Start Journey</NButton>
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
