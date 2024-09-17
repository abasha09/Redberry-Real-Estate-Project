<script setup>
defineProps({
  properties: Array,
});
</script>

<template>
  <section
    class="flex flex-col gap-5 border-solid border-2 w-[384px] h-[455px] rounded-xl cursor-pointer"
    v-for="property in properties"
    :key="property.id"
  >
    <img
      class="rounded-t-xl"
      width="384px"
      height="307px"
      :src="`${property.image}`"
    />
    <div class="flex flex-col gap-5 px-4">
      <p class="text-3xl">{{ property.price }}$</p>
      <p class="flex text-base">
        <img src="../assets/icons/location-marker.png" />{{
          property.city.name
        }}, {{ property.address }}
      </p>

      <div class="flex gap-8">
        <span class="flex gap-2">
          <img src="../assets/icons/bed.png" width="16px" height="18px" />{{
            property.bedrooms
          }}</span
        >
        <span class="flex justify-center items-center gap-2">
          <i class="pi pi-window-maximize"></i>{{ property.area }} მ²</span
        >
        <span class="flex justify-center items-center gap-2">
          <i class="pi pi-map-marker"></i>{{ property.zip_code }}</span
        >
      </div>
    </div>
  </section>
</template>
