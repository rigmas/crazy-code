<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="absolute left-0 top-0 box-border w-full flex items-center justify-between bg-white px-4 py-3 shadow-sm">
    <NButton
      class="" text size="large" @click="() => {
        router.push('/merchant')
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
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
