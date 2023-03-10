<template>
  <div
    class="bg-white max-w-sm flex flex-col gap-14 py-14 items-center lg:px-6 rounded-lg"
  >
    <div class="h-auto w-32 relative">
      <NuxtImg class="object-contain w-full h-full" src="/logo.png" />
    </div>
    <div class="flex flex-col md:gap-4 lg:gap-8 w-full items-center">
      <BaseButton
        v-for="nav in NAVIGATION"
        :icon="nav.icon"
        type="default"
        variation="link"
        :isActive="route.path === nav.path"
        :path="nav.path"
        >{{ $t(nav.title) }}</BaseButton
      >
    </div>
  </div>
</template>

<script setup>
import NAVIGATION from "~~/constants/navigation";
const route = useRoute();
const activeNav = reactive([true, false]);
</script>
