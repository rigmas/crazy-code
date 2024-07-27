<script setup lang="ts">
</script>

<template>
  <div class="bg-gray-100 min-h-screen p-4">

    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-2">
        <button>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/back.png" alt="Back" />
        </button>
        <div>
          <p class="text-xs">DELIVER TO</p>
          <p class="font-semibold">South Quarter</p>
        </div>
        <button>
          <img src="https://img.icons8.com/material-outlined/24/000000/expand-arrow.png" alt="Expand" />
        </button>
      </div>
      <div class="flex space-x-4">
        <button>
          <img src="https://img.icons8.com/ios-filled/24/000000/like--v1.png" alt="Like" />
        </button>
        <button>
          <img src="https://img.icons8.com/ios-filled/24/000000/note.png" alt="Note" />
        </button>
      </div>
    </div>

    <div class="mb-4">
      <input type="text" class="w-full p-3 rounded-full shadow-sm border border-gray-300 placeholder-gray-500" placeholder="What shall we deliver?">
    </div>
    <div class="flex overflow-x-scroll no-scrollbar mb-4 space-x-4">
      <button class="flex flex-col items-center">
        <img src="https://img.icons8.com/?size=48&id=65laSYcIZM8m&format=png&color=000000" alt="Snack" />
        <span class="text-sm">Snack</span>
      </button>
      <button class="flex flex-col items-center">
        <img src="https://img.icons8.com/?size=48&id=wqMCXXwVnkX2&format=png&color=000000" alt="Fast Food" />
        <span class="text-sm">Fast Food</span>
      </button>
      <button class="flex flex-col items-center">
        <img src="https://img.icons8.com/?size=48&id=zphNWHGZfV0i&format=png&color=000000" alt="International" />
        <span class="text-sm">International</span>
      </button>
      <button class="flex flex-col items-center">
        <img src="https://img.icons8.com/?size=48&id=yhgg1lDyYI9Z&format=png&color=000000" alt="Chicken" />
        <span class="text-sm">Chicken</span>
      </button>
      <button class="flex flex-col items-center">
        <img src="https://img.icons8.com/?size=48&id=SENAO5gAbChk&format=png&color=000000" alt="Indonesian" />
        <span class="text-sm">Indonesian</span>
      </button>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class=" p-4 rounded-lg" style="background-color: #FFD2CB">
        <p class=" font-semibold">Near Me</p>
        <p class="text-xs">Get it quick</p>
      </div>
      <div class=" p-4 rounded-lg" style="background-color: #B8E5E0;">
        <p class="font-semibold">Big Promo</p>
        <p class="text-xs">Save up to 70%</p>
      </div>
      <div class=" p-4 rounded-lg" style="background-color: #FFE3CC;">
        <p class="font-semibold">Top Selling!</p>
        <p class="text-xs">Curated for you</p>
      </div>
      <div class=" p-4 rounded-lg" style="background-color: #D9FCDE;">
        <p class="font-semibold">Payday Flash</p>
        <p class="text-xs">Disc up to 100%, order now</p>
      </div>
    </div>

    <div class="mb-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s" alt="-" class="w-full rounded-lg" />
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
