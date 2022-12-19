<template>
  <div class="">
    <div class="text-4xl text-center font-mono dark:text-white">References</div>
    <uiCards class=" mt-4">
      <uiCardReference v-for="item in references" :key="item" :item="item" />
    </uiCards>
  </div>
</template>

<script setup lang="ts">

const references: Reference[] = [
  {
    title: 'Vue-Caly',
    identifier: 'vue-caly',
    tags: [
      'Vue',
      'Typescript',
      'Plugin'
    ],
    pitch: 'Advanced appointment picker component for Vue',
    url: 'https://github.com/deepDiverPaul/vue-caly',
    wip: true
  },
  {
    title: 'Susanne Spenke',
    identifier: 'susannespenke.de',
    tags: [
      'TYPO3',
      'Website',
      'Newsletter'
    ],
    pitch: 'Nervensystem- und Embodiment Coach & ewig Reisende',
    url: 'https://www.susannespenke.de',
    new: true
  },
  {
    title: 'This Site ☺️',
    identifier: 'onlineer.de',
    tags: [
      'Nuxt',
      'Vue',
      'Tailwind'
    ],
    pitch: 'Frontend-dev for Nuxt and Vue',
    url: 'https://github.com/deepDiverPaul/onlineer-onepager',
  },
  {
    title: 'Löwen-Apotheke Annaberg',
    identifier: 'loewen-apotheke-annaberg.de',
    tags: [
      'Website'
    ],
    pitch: 'Ihre Apotheke in Annaberg-Buchholz',
    url: 'https://www.loewen-apotheke-annaberg.de',
  }
]

</script>