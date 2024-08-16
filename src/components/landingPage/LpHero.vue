<template>
  <section id="hero" class="w-full h-full">
    <div id="hero" class="h-full bg-white rounded-md">
      <div class="h-full w-full">
        <slot name="hero-content" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#hero-def {
  background: url(../images/image.png) no-repeat center center fixed;
  background-size: cover;
}
</style>
