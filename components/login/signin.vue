<template>
  <div class="flex flex-col gap-12 py-12 px-16 justify-center flex-shrink-0">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col text-black text-2xl gap-1">
        <span>{{ $t("welcome") }}</span>
        <span>{{ $t("login-to-order") }}</span>
      </div>
      <div class="text-sm">
        <span>{{ $t("no-account") }}</span>
        &nbsp;
        <span class="underline">{{ $t("register-now") }}</span>
      </div>
    </div>
    <div class="flex flex-col gap-5 py-2">
      <BaseInput :label="$t('username')" type="text" v-model="props.username" />
      <BaseInput
        :label="$t('password')"
        type="password"
        v-model="props.password"
      />
      <div class="flex flex-row justify-center text-sm underline">
        <a href="/kaka">{{ $t("forgot-password") }}</a>
      </div>
    </div>
    <div class="flex flex-col gap-5">
      <BaseButton @click="onClick">{{ $t("sign-in") }}</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ username: string; password: string }>();
const { locale } = useI18n();
const onClick = () => {
  alert("hello");
};
</script>
