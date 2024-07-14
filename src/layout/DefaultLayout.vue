<template>
  <div class="flex flex-col h-screen max-h-screen">
    <div class="h-12 bg-blue-400">NAVBAR</div>
    <div class="h-full overflow-y-scroll">
      <slot />
    </div>
    <div class="h-12 p-4 bg-blue-400">FOOTER</div>
  </div>
</template>