<template>
  <label class="flex flex-col gap-2">
    <span class="text-xs">{{ props.label }}</span>
    <input
      class="bg-neutral-100 py-2 px-4 rounded-sm"
      :type="props.type"
      :value="props.modelValue"
      @change="updateValue"
      :placeholder="props.placeholder"
    />
  </label>
</template>

<script setup lang="ts">
import { IInputProps } from "~~/@types/components/base/input";
const props = defineProps<IInputProps>();
const emits = defineEmits(["update:modelValue"]);

const updateValue = (e: Event) => {
  emits("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
