<template>
  <NuxtLoadingIndicator color="repeating-linear-gradient(to right, #22c55e 0%, #7dd3fc 100%)" :height="4" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>
