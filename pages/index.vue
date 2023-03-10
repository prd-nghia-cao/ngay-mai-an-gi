<template>
  <div class="flex flex-col gap-5 w-fit">
    <BaseButton class="w-fit" variation="default" type="default"
      >Test Primary</BaseButton
    >
    <BaseButton class="w-fit" variation="ghost" type="default"
      >Test Primary Ghost</BaseButton
    >
    <BaseButton class="w-fit" variation="link" type="default"
      >Test Primary Link</BaseButton
    >
    <BaseButton
      class="w-fit"
      variation="default"
      type="default"
      :icon="IconHome"
      >Test Primary Icon</BaseButton
    >

    <BaseButton
      class="w-fit"
      variation="ghost"
      type="icon"
      :icon="IconHome"
    ></BaseButton>
    <BaseButton class="w-fit" variation="default" type="icon" :icon="IconHome"
      >Test Primary With Icon
    </BaseButton>
  </div>
</template>
<script setup lang="ts">
import IconHome from "~icons/carbon/home";
import IconSetting from "~icons/carbon/settings";
</script>
