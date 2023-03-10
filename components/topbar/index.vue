<template>
  <div
    class="bg-white h-full w-full flex flex-row items-center justify-between px-5 rounded-lg"
  >
    <div>{{ $t("welcome") }} Nghia Cao!</div>
    <OnClickOutside @trigger="closeDropdown">
      <TopbarDropdown :is-active="activeDropdown" @toggle="toggleDropdown" />
    </OnClickOutside>
  </div>
</template>
<script setup lang="ts">
import { OnClickOutside } from "@vueuse/components";
const activeDropdown = ref<boolean>(false);
const closeDropdown = () => {
  activeDropdown.value = false;
};
const toggleDropdown = () => {
  activeDropdown.value = !activeDropdown.value;
};
</script>
