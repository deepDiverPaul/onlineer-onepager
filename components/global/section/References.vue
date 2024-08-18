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
    title: 'Sample of work',
    identifier: 'demo-project',
    tags: [
      'SPA',
      'Vue',
      'VueX',
      'Typescript',
    ],
    pitch: 'SPA as an implementation of a given task. Serves as a sample of work.',
    url: 'https://github.com/deepDiverPaul/demo-project',
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
]

</script>
