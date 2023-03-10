<template>
  <div
    class="flex flex-col gap-2 md:gap-6 lg:gap-12 lg:py-12 lg:px-16 justify-center"
  >
    <div class="flex flex-col gap-4">
      <div class="flex flex-col text-black text-2xl gap-1">
        <span>{{
          isSignUp ? $t("sign-up-promt-1") : $t("signin-welcome")
        }}</span>
        <span>{{
          isSignUp ? $t("sign-up-promt-2") : $t("login-to-order")
        }}</span>
      </div>
      <div class="text-sm">
        <span>{{ isSignUp ? $t("already-user") : $t("no-account") }}</span>
        &nbsp;
        <a @click="toggleSignUp" class="underline cursor-pointer">{{
          isSignUp ? $t("sign-in") : $t("register-now")
        }}</a>
      </div>
    </div>
    <div class="flex flex-col gap-2 lg:gap-5 py-2">
      <LoginSignup v-if="isSignUp" />
      <LoginSignin v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "toggleSignup"): void;
}>();
const { locale } = useI18n();
const isSignUp = ref<boolean>(false);

const toggleSignUp = () => {
  emit("toggleSignup");
  setTimeout(() => {
    isSignUp.value = !isSignUp.value;
  }, 200);
};
</script>
