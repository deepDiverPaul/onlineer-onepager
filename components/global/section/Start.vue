<template>
  <div class=" relative">
    <div class="absolute -top-24 left-0 right-0 h-screen flex flex-col justify-evenly opacity-10">
      <uiIconMarquee :icons="iconsLang" speed="default" />
      <uiIconMarquee :icons="iconsTool" speed="slow" />
    </div>
    <div class="start-contents w-full items-center flex mx-auto text-2xl special-text max-w-screen-sm px-8 md:px-10">
      <div class=" py-4 md:py-6 dark:text-white">
        <div class="text-6xl mb-4">Hello World!</div>
        <div class="mb-3">
          <span>My name is Paul.</span>
        </div>
        <div class="mb-3">
          <span>I support you with your projects as a refined and enthusiastic frontend&nbsp;engineer.</span>
        </div>
        <div class="mb-3">
          <span>My favourite tools are shown behind this message.</span>
        </div>
        <div class="mb-6">
          <span>You can learn more about me below.</span>
        </div>
        <div>
          <span class="text-3xl">Press <kbd class="kbd kbd-md -translate-y-1" @click="goToContact">Shift</kbd> <kbd class="kbd kbd-md -translate-y-1" @click="goToContact">M</kbd> to text me.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {onKeyStroke} from "@vueuse/core";

const icons: Icon[] = [
  {
    icon: 'logos:vue',
    label: 'Vue.js',
    color: 'rgb(62 178 127)',
    type: 'lang'
  },
  {
    icon: 'logos:nuxt-icon',
    label: 'Nuxt',
    color: 'rgb(60 123 110)',
    type: 'lang'
  },
  {
    icon: 'logos:javascript',
    label: 'JavaScript',
    color: 'rgb(247 223 28)',
    type: 'lang'
  },
  {
    icon: 'logos:typescript-icon',
    label: 'TypeScript',
    color: 'rgb(47 116 192)',
    type: 'lang'
  },
  {
    icon: 'logos:nodejs-icon',
    label: 'Node.js',
    color: 'rgb(139 191 61)',
    type: 'lang'
  },
  {
    icon: 'logos:yarn',
    label: 'Yarn',
    color: 'rgb(44 142 187)',
    type: 'lang'
  },
  {
    icon: 'logos:git-icon',
    label: 'Git',
    color: 'rgb(232 78 50)',
    type: 'tool'
  },
  {
    icon: 'logos:github-icon',
    label: 'Github',
    color: 'rgb(33 33 33)',
    type: 'tool'
  },
  {
    icon: 'logos:gitlab',
    label: 'Gitlab',
    color: 'rgb(219 65 39)',
    type: 'tool'
  },
  {
    icon: 'logos:phpstorm',
    label: 'PhpStorm',
    color: 'rgb(38,14,56)',
    type: 'tool'
  },
  {
    icon: 'logos:tailwindcss-icon',
    label: 'Tailwind CSS',
    color: 'rgb(54 183 240)',
    type: 'lang'
  },
  {
    icon: 'logos:bulma',
    label: 'Bulma',
    color: 'rgb(4 203 172)',
    type: 'lang'
  },
  {
    icon: 'logos:bootstrap',
    label: 'Bootstrap',
    color: 'rgb(118 16 241)',
    type: 'lang'
  },
  {
    icon: 'simple-icons:quasar',
    label: 'Quasar',
    color: 'rgb(0 174 247)',
    type: 'tool'
  },
  {
    icon: 'logos:drone-icon',
    label: 'Drone',
    color: 'rgb(30 53 87)',
    type: 'tool'
  },
  {
    icon: 'logos:css-3',
    label: 'CSS3',
    color: 'rgb(0 174 247)',
    type: 'lang'
  },
  {
    icon: 'logos:html-5',
    label: 'HTML5',
    color: 'rgb(219 77 37)',
    type: 'lang'
  },
  {
    icon: 'logos:sass',
    label: 'Sass',
    color: 'rgb(199 100 149)',
    type: 'lang'
  },
  {
    icon: 'logos:webpack',
    label: 'Webpack',
    color: 'rgb(26 116 185)',
    type: 'tool'
  },
  {
    icon: 'logos:vitejs',
    label: 'Vite',
    color: 'rgb(115 137 246)',
    type: 'tool'
  },
  {
    icon: 'logos:docker-icon',
    label: 'Docker',
    color: 'rgb(37 146 229)',
    type: 'tool'
  },
  {
    icon: 'simple-icons:directus',
    label: 'Directus',
    color: 'rgb(129 82 240)',
    type: 'tool'
  },
  {
    icon: 'simple-icons:notion',
    label: 'Notion',
    color: 'rgb(0 0 0)',
    type: 'tool'
  },
  {
    icon: 'logos:strapi-icon',
    label: 'Strapi',
    color: 'rgb(46 45 135)',
    type: 'tool'
  },
]

const iconsLang = computed(()=> icons.filter((i)=>i.type === 'lang'))
const iconsTool = computed(()=> icons.filter((i)=>i.type === 'tool'))

const router = useRouter();

const goToContact = (): void => {
  router.push({ path: "/" , hash: '#contact'});
}

</script>

<style scoped lang="scss">
.special-text span{
  background-color: rgba(180, 185, 194, 0.47);
  box-shadow: 0.5em 0 0 rgba(180, 185, 194, 0.47),-0.5em 0 0 rgba(180, 185, 194, 0.47);
  padding: 0.2rem;
  line-height: 1.5;
  &.text-3xl {
    line-height: 1.48;
  }
}
.start-contents {
  min-height: calc(100vh - 6rem);
}

</style>
