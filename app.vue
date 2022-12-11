<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import {useFavicon, useTitle} from "@vueuse/core";

useFavicon('/favicon.png')
const title = useTitle('Onlineer | Paul Spenke')

</script>

<style lang="scss">
@import "assets/scss/site";

</style>
