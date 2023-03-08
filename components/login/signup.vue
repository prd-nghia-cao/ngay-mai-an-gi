<template>
  <BaseInput :label="$t('username')" type="text" v-model="user.username" />
  <BaseInput :label="$t('password')" type="password" v-model="user.password" />
  <BaseInput :label="$t('email')" type="password" v-model="user.email" />
  <BaseButton @click="onClick">{{ $t("sign-up") }}</BaseButton>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const user = reactive({ username: "", password: "", email: "" });
const onClick = () => {
  alert("hello");
};
</script>
