<template>
  <div class="flex h-full">
    <div class="w-full h-full">
      <section 
        id="section:ImageUploader"
        class="h-full">
        <div class="h-full w-full p-12 bg-gray-200 grid grid-cols-2 rounded-md">
          <slot name="upload" />
          <div class="flex flex-col justify-center items-center text-white h-full w-full bg-gray-800 rounded-md">
            <div class="h-20 w-full px-4 py-2 mt-2">
              <slot name="search" />
            </div>
            <slot name="list" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
