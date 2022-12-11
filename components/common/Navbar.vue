<template>
  <div class="fixed left-0 right-0 p-4 text-center px-2 z-40">
    <header class="border border-2 rounded-full md:inline-block bg-white/70 dark:bg-slate-800/50 shadow-xl backdrop-blur-md  dark:text-white">
      <div class="navbar" ref="navbar" tabindex="0">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle md:hidden" ref="button">
              <Icon name="line-md:menu-to-close-alt-transition" size="1.5rem" v-if="btnFocus"></Icon>
              <Icon name="line-md:close-to-menu-alt-transition" size="1.5rem" v-else></Icon>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li v-for="link in links" :key="link.path">
                <NuxtLink :to="{ path: '/',hash: `#${link.id}`}" @click="navFocus = true" class="btn btn-ghost rounded-full">{{link.label}}</NuxtLink>
              </li>
            </ul>
          </div>
          <NuxtLink :to="{ path: '/'}" class="btn btn-ghost normal-case text-xl font-mono leading-10 rounded-full">{{firstLink.label}}</NuxtLink>
        </div>
        <div class="navbar-center hidden md:flex">
          <ul class="menu menu-horizontal p-0">
            <li v-for="link in links" :key="link.path">
              <NuxtLink :to="{ path: '/',hash: `#${link.id}`}" class="mx-2 btn btn-ghost rounded-full py-2">{{link.label}}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
                  <NuxtLink class="btn btn-outline btn-circle" :to="{ hash: `#contact`}" title="Contact me"><icon size="1.5rem" name="line-md:email-twotone" class=" dark:text-white" /></NuxtLink>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import {useFocus} from "@vueuse/core";
import {Section} from "~/composables/useSections";

const navbar = ref()
const button = ref()
const { focused: navFocus } = useFocus(navbar)
const { focused: btnFocus } = useFocus(button)

const sections: Section[] = useSections()

const firstLink = sections[0]
const [, ...links] = sections

</script>
