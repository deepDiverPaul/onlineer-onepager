<template>
  <div class="">
    <div class="text-4xl text-center font-mono  dark:text-white">Tech Stack</div>
    <div class=" my-4 text-lg sm:px-10">
      As for all engineers I also do have a stack of languages, tools and so on, that I am most familiar with. Below,
      there is a comprehensive list which also includes the seniority in that particular filed. If there is anything
      missing for your project, do not hesitate to mail me.
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 mx-auto mt-4 gap-6">
      <div v-for="stack in stacks" :key="stack">
        <div class="text-2xl p-4">{{stack.label}}</div>
        <div class="mockup-code">
          <pre data-prefix="$"><code>cat {{stack.label.toLowerCase().replace(/\s/g, '-')}}.md</code></pre>
          <pre data-prefix=">" class="text-warning" v-for="t in stack.options" :key="t"><code>{{seniority(t[0])}} {{t[1]}}</code></pre>
          <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

type Stack = {
  label: string
  options: [number, string][]
}

const seniority = (level: number): string => {
  return "██████████".slice( 0, level) + "░░░░░░░░░░".slice( 0, 5-level)
}

const stacks: Stack[] = [
  {
    label: 'Frameworks',
    options: [
      [5, 'Vue'],
      [5, 'Nuxt'],
      [5, 'Tailwind'],
      [4, 'Angular'],
      [4, 'React'],
      [3, 'Quasar'],
    ]
  },
  {
    label: 'Languages',
    options: [
      [5, 'JavaScript'],
      [5, 'TypeScript'],
      [4, '(S)CSS'],
      [3, 'PHP'],
      [3, 'MySQL'],
      [2, 'Python'],
    ]
  },
  {
    label: 'Tools',
    options: [
      [5, 'Git'],
      [5, 'Web-Components'],
      [4, 'Webpack/Vite'],
      [4, 'Docker'],
      [4, 'Accessibility'],
    ]
  },
  {
    label: 'Platforms',
    options: [
      [5, 'Directus'],
      [5, 'n8n'],
      [5, 'Sendinblue'],
      [4, 'Notion'],
      [4, 'Strapi'],
    ]
  }
]

</script>

<style scoped>
.mockup-code:hover:before {
  box-shadow: 1.4em 0 #ff5f57, 2.8em 0 #febc2e, 4.2em 0 #29c940;
  opacity: 1;
}
</style>
