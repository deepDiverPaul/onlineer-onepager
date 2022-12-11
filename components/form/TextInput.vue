<template>
  <div class="form-control w-full">
    <label class="label" :for="id">
      <span class="label-text">{{props.label}}</span>
    </label>
    <input :type="type || 'text'"
           ref="textinput"
           class="input input-bordered w-full"
           v-model="value"
           :id="id"
           :required="required"
           :disabled="disabled"/>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  modelValue: string
  label: string
  type?: string
  id: string
  disabled?: boolean
  required?: boolean
}>();
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const textinput = ref<HTMLInputElement | null>(null)
onMounted(() => {
  console.log(textinput.value)
})

const valid = ref(false)

onMounted(() => {
  checkValid()
})

const checkValid = (): void => {
  if(textinput.value === null) {
    valid.value = false
  } else {
    valid.value = textinput.value.validity.valid
  }
}

const value = computed({
  get: () => props.modelValue,
  set: (data: string) => {
    checkValid()
    emits('update:modelValue', data)
  },
});


</script>