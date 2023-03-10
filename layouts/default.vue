<template>
  <div class="bg-neutral-200 grid layout-col gap-5 m-5">
    <Sidebar class="hidden md:flex md:col-start-1" />
    <div
      class="md:col-start-2 col-span-full grid grid-flow-row layout-row gap-5"
    >
      <Topbar class="row-start-1" />
      <div class="overflow-auto bg-white row-start-2 row-span-full rounded-lg">
        <slot />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.layout-col {
  min-height: calc(100vh - 1.25rem * 2);
  @include on_min_md {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
  @include on_min_lg {
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  }
}

.layout-row {
  grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
}
</style>
