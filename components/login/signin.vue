<template>
  <BaseInput :label="$t('username')" type="text" v-model="user.username" />
  <BaseInput :label="$t('password')" type="password" v-model="user.password" />
  <div class="flex flex-row justify-center text-sm underline">
    <a href="/kaka">{{ $t("forgot-password") }}</a>
  </div>
  <BaseButton @click="onClick">{{ $t("sign-in") }}</BaseButton>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const user = reactive({ username: "", password: "" });
const onClick = () => {
  // alert(`username: ${user.username} \n password: ${user.password}`);
};
</script>
