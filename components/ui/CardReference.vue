<template>
  <div class="card w-80 bg-base-100 shadow-xl hover:scale-100 scale-95 transition-all duration-500 border border-gray-200">
    <img
        :src="`/assets/references/${item.identifier}.png`"
        :alt="item.title"
        class="rounded-2xl object-cover aspect-[4/3] w-full"
        loading="lazy" />
    <div class="card-body">
      <h2 class="card-title">
        <a :href="item.url" :title="item.title">{{item.title}}&nbsp;<icon name="icon-park-outline:efferent-four" /></a>
        <span class="badge badge-primary" v-if="item.new === true">NEW</span>
        <span class="badge badge-outline" v-if="item.wip === true" title="work in progress">WIP</span>
      </h2>
      <p>
        {{item.pitch}}
      </p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline" v-for="tag in item.tags" :key="tag">{{tag}}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  item: Reference
}>();

</script>
