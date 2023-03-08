<template>
  <div
    :class="{
      'bg-slate-100 w-screen min-h-screen flex justify-center items-center py-5': true,
      'is-sign-up': isSignUp,
    }"
  >
    <div
      class="relative grid grid-flow-row auto-rows-fr lg:grid-flow-col lg:auto-cols-fr bg-white h-4/5 2xl:w-7/12 xl:w-9/12 w-11/12 py-6 px-3 md:p-8 gap-8 min-h-500px"
    >
      <LoginBase class="form-container" @toggle-signup="triggerSignUp" />
      <div class="relative w-full h-full image-container">
        <div class="top-0 right-0 left-0 bottom-0 absolute">
          <NuxtImg
            src="/login.jpg"
            alt="Healthy Food every day"
            class="w-full h-full object-cover object-top lg:object-center"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "login",
});
const { locale } = useI18n();
const isSignUp = ref<boolean>(false);
const triggerSignUp = () => {
  isSignUp.value = !isSignUp.value;
};
</script>

<style lang="scss" scoped>
.min-h-500px {
  @media screen and (min-height: 900px) {
    min-height: 850px;
  }
}

.min-w-476px {
  min-width: 476px;
}

.form-container {
  transition: all ease 0.6s;
}

.image-container {
  transition: all ease 0.6s;
}

.is-sign-up {
  .form-container {
    transform: translateY(calc(100% + 2rem));
    @include on_min_lg {
      transform: translateX(calc(100% + 2rem));
    }
  }

  .image-container {
    transform: translateY(calc(-100% - 2rem));
    @include on_min_lg {
      transform: translateX(calc(-100% - 2rem));
    }
  }
}
</style>
