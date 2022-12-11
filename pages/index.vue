<template>
  <div class="pt-24 relative">
    <designWaves position="top" />
    <component
        :is="section.component"
        class="w-full mx-auto mb-8 z-10"
        :class="{'max-w-screen-md py-4 md:py-6 px-8 md:px-10': index > 0}"
        v-for="(section, index) in sections"
        :id="section.id"
        :key="section.id" />
  </div>
</template>

<script setup lang="ts">
import {Section} from "~/composables/useSections";

import { onKeyStroke } from '@vueuse/core'

const router = useRouter();

onKeyStroke('M', (e) => {
  e.preventDefault()
  router.push({ path: "/" , hash: '#contact'});
})

const sections: Section[] = useSections()


</script>