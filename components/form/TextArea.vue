<template>
  <div class="form-control w-full">
    <label class="label" :for="id">
      <span class="label-text">{{props.label}}</span>
    </label>
    <textarea :disabled="disabled" class="textarea textarea-bordered h-24" v-model="value" :id="id"></textarea>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  id: string
  label: string
  disabled?: boolean
}>();
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const value = computed({
  get: () => props.modelValue,
  set: (data: string) => {
    console.log(data)
    emits('update:modelValue', data)
  },
});


</script>