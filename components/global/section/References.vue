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
    title: 'Löwen-Apotheke Annaberg',
    identifier: 'loewen-apotheke-annaberg.de',
    tags: [
      'Website'
    ],
    pitch: 'Ihre Apotheke in Annaberg-Buchholz',
    url: 'https://www.loewen-apotheke-annaberg.de',
    new: false
  }
]

</script>