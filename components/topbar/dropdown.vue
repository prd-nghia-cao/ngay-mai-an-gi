<template>
  <div class="relative leading-none">
    <button @click="toggleDropdown">
      <BaseAvatar src="https://i.pravatar.cc/40" />
    </button>
    <div
      v-if="props.isActive"
      class="absolute bg-white right-0 bottom-0 opacity-1 shadow-lg flex flex-col gap-2 transition-all translate-y-full duration-500"
    >
      <NuxtLink
        class="w-full py-4 px-5 whitespace-nowrap text-center hover:text-mariner-500 hover:bg-mariner-100 cursor-pointer transition-colors"
      >
        Sign out
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isActive: boolean;
}>();
const emits = defineEmits<{
  (e: "toggle"): void;
}>();
const toggleDropdown = () => {
  emits("toggle");
};
</script>
