<template>
  <NuxtLink
    :class="{
      'flex flex-row w-fit rounded-lg gap-2 items-center relative sidebar-button ': true,
      'bg-mariner-200': props.isActive,
    }"
    :to="props.path"
  >
    <div
      :class="{
        'md:py-2 md:px-3 lg:py-3 lg:px-4 rounded-lg': true,
        'bg-mariner-300': props.isActive,
      }"
    >
      <component :is="props.icon"></component>
    </div>
    <div class="md:pl-2 md:pr-8 lg:pl-3 lg:pr-10">
      <slot />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ISideBarButtonProps } from "~~/@types/components/sidebar/button";
const props = defineProps<ISideBarButtonProps>();
</script>
