<template>
  <div class="marquee">
    <ul
        :class="{'motion-safe:animate-scroll': speed === 'default', 'motion-safe:animate-scroll-slow': speed === 'slow'}"
        class="marquee__content">
      <li v-for="icon in icons" :key="icon" :title="icon.label" :style="{'color': icon.color || '#2b30e3'}">
        <icon :name="icon.icon" size="20vh"></icon>
      </li>
    </ul>
    <ul
        :class="{'motion-safe:animate-scroll': speed === 'default', 'motion-safe:animate-scroll-slow': speed === 'slow'}"
        class="marquee__content"
        aria-hidden="true">
      <li v-for="icon in icons" :key="icon" :title="icon.label" :style="{'--icon-color': icon.color || '#2b30e3'}">
        <icon :name="icon.icon" size="20vh"></icon>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  icons: Icon[],
  speed: 'default' | 'slow'
}>();

</script>

<style scoped lang="scss">
.marquee {
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: 6vh;
  .marquee__content {
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    min-width: 100%;
    gap: 6vh;
  }
  &:hover {
    .marquee__content {
      //animation-play-state: paused;
    }
  }
}

</style>
