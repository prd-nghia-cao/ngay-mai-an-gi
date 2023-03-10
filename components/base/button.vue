<template>
  <NuxtLink
    :class="{
      'py-3 px-3 transition-colors duration-300 cursor-pointer flex flex-row w-fit gap-4 items-center relative group': true,
      'rounded-lg': props.type === 'default',
      'text-white bg-mariner-500 hover:bg-mariner-700':
        props.variation === 'default',
      'text-mariner-500 border border-mariner-500 hover:text-white hover:bg-mariner-700 hover:border-mariner-700':
        props.variation === 'ghost',
      'rounded-full': props.type === 'icon',
      'text-mariner-500 hover:text-mariner-700 opacity-50 hover:opacity-100 transition-opacity ':
        props.variation === 'link' && props.isActive === false,
      'text-mariner-700 hover:text-mariner-900':
        props.variation === 'link' && props.isActive === true,
    }"
    :to="props.path"
  >
    <div v-if="props.icon !== undefined">
      <component :is="props.icon"></component>
    </div>
    <slot v-if="props.type !== 'icon' && props.icon !== null" />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { IBaseButtonProps } from "~~/@types/components/base/button";
const props = defineProps<IBaseButtonProps>();
</script>
