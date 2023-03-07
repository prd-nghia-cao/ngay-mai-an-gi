<template>
  <div class="bg-slate-100 w-screen h-screen flex justify-center items-center">
    <div
      class="relative flex flex-row min-h-500px min-w-476px bg-white h-3/5 2xl:w-1/2 xl:w-2/3 w-11/12 p-8 gap-8"
    >
      <LoginSignin v-bind="user" class="flex-grow" />
      <div class="relative w-full h-full md:block hidden">
        <div class="top-0 right-0 left-0 bottom-0 absolute">
          <NuxtImg
            src="/login-image.jpg"
            alt="Healthy Food every day"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const user = reactive({ username: "", password: "" });
</script>

<style>
.min-h-500px {
  min-height: 500px;
}

.min-w-476px {
  min-width: 476px;
}
</style>
