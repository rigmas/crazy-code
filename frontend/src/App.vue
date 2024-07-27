<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#0aa03b',
  },
}
</script>

<template>
  <NConfigProvider
    :theme-overrides="themeOverrides"
  >
    <NNotificationProvider>
      <NDialogProvider>
        <RouterView />
      </NDialogProvider>
    </NNotificationProvider>
  </NConfigProvider>
</template>
