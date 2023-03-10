<template>
  <button class="w-10 h-10 relative">
    <NuxtImg :src="props.src" class="rounded-full" />
    <div
      class="absolute w-4 h-4 rounded-full bg-white z-10 bottom-0 -right-1 border-solid border-black border flex items-center justify-center"
    >
      <CarbonChevronDown class="text-xs" />
    </div>
  </button>
</template>

<script setup lang="ts">
import type { IAvatarProps } from "~~/@types/components/base/avatar";
import CarbonChevronDown from "~icons/carbon/chevron-down";
const props = defineProps<IAvatarProps>();
</script>
