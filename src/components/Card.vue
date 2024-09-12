<script setup></script>

<template>
  <section
    class="flex flex-col gap-5 border-solid border-2 w-[384px] h-[455px] rounded-xl"
  >
    <img
      class="rounded-t-xl"
      src="../assets/imgs/image.png"
      width="384px"
      height="307px"
    />
    <div class="flex flex-col gap-5 px-4">
      <p class="text-3xl">80 000$</p>
      <p class="flex text-base">
        <img src="../assets/icons/location-marker.png" />Tbilisi, i.chavchavadze
        street
      </p>

      <div class="flex gap-8">
        <span class="flex gap-2">
          <img
            src="../assets/icons/bed.png"
            width="16px"
            height="18px"
          />2</span
        >
        <span class="flex justify-center items-center gap-2">
          <i class="pi pi-window-maximize"></i>55 მ²</span
        >
        <span class="flex justify-center items-center gap-2">
          <i class="pi pi-map-marker"></i>55 მ²</span
        >
      </div>
    </div>
  </section>
</template>
