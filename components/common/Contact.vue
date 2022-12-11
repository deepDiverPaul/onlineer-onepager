<template>
  <div class=" w-full max-w-screen-md mx-auto p-4  dark:text-white">
    <div class="text-4xl text-center font-mono">Contact</div>
    <div class="relative" >
      <div class="w-full p-4 sm:w-96 mx-auto flex flex-col gap-4">
        <form ref="form">
          <formTextInput :disabled="loading" v-model="data.name" label="Name" id="contactName" />
          <formTextInput :disabled="loading" v-model="data.company" label="Company" id="contactCompany" />
          <formTextInput :disabled="loading" v-model="data.email" label="E-Mail" id="contactEmail" />
          <formTextArea :disabled="loading" v-model="data.message" label="Message" id="contactMessage" />
          <formTextInput class="invisible h-0" aria-hidden="true" v-model="data.address" label="Address" id="contactAddress" />
          <div class=" text-center mt-6">
            <div class="badge badge-lg badge-warning" v-if="invalid">please fill out all fields</div>
            <div class="badge badge-lg badge-error" v-if="error">an error occured</div>
            <div class="badge badge-lg badge-success" v-if="success">Thank you</div>
          </div>
          <div class="mt-6" v-if="!success">
            <button type="submit" class="btn btn-outline w-full" @click.prevent="send" v-if="!loading">send</button>
            <button v-else class="btn btn-outline loading w-full">loading</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {_AsyncData} from "#app/composables/asyncData";

const { createItems } = useDirectusItems();

const data = ref({
  name: '',
  email: '',
  message: '',
  company: '',
  address: '',
})

let loading = ref(false)
let error = ref(false)
let success = ref(false)
let invalid = ref(false)
let honeypot = ref(false)

const form = ref(null)


let ip: _AsyncData<unknown, string | null> | null = null

const validate = (): void => {
  let valid = true;
  let reggy = /[^\s]+/
  if(!reggy.test(data.value.name)) valid = false;
  if(!reggy.test(data.value.company)) valid = false;
  if(!reggy.test(data.value.message)) valid = false;
  reggy = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if(!reggy.test(data.value.email)) valid = false;

  if(reggy.test(data.value.address)) honeypot.value = true;

  invalid.value = !valid
}

const send = async () => {
  validate();
  console.log(invalid.value)
  if(invalid.value) return;
  loading.value = true
  // validateForm()
  try {
    ip = await useFetch('https://n8n.onlineer.de/webhook/current-ip')
    const items: ContactFormInterface[] = [
      {
        name: data.value.name,
        company: data.value.company,
        email: data.value.email,
        message: data.value.message,
        ip: `${ip?.data.value}`,
      },
    ];
    if(honeypot.value === false) {
      await createItems<ContactFormInterface>({ collection: "ContactForm", items });
      success.value = true
      reset()
    }
  } catch (e) {
    error.value = true
  } finally {
    loading.value = false
  }
}

// const validateForm = () => {
//   console.log(form.value)
//   const nodes = form.value.querySelectorAll(`:invalid`);
//   console.log(nodes);
//   return true;
// }

const reset = () => {
  data.value.name = ''
  data.value.email = ''
  data.value.message = ''
  data.value.company = ''
}
</script>