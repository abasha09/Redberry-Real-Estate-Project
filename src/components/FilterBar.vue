<script setup>
import { ref } from "vue";

// Define reactive states for the select inputs
const selectedOption = ref("");
const selectedPrice = ref("");
const selectedSize = ref("");
const selectedRoomQuantity = ref("");
</script>

<template>
  <section class="flex justify-between items-center p-10 px-28">
    <div class="flex gap-6 border-solid border-2 p-2 rounded-xl">
      <!-- First select with placeholder -->
      <select v-model="selectedRegion" class="py-2 px-4">
        <option disabled value="">რეგიონი</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>

      <!-- Price select -->
      <select v-model="selectedPrice" id="price">
        <option disabled value="">საფასო კატეგორია</option>
        <option value="10000">10000$</option>
        <option value="15000">15000$</option>
      </select>

      <!-- Size select -->
      <select v-model="selectedSize" id="size">
        <option disabled value="">ფართობი</option>
        <option value="4km2">4km²</option>
        <option value="6km2">6km²</option>
      </select>

      <!-- Room quantity select -->
      <select v-model="selectedRoomQuantity" id="room-quantity">
        <option disabled value="">საძინებლის რაოდენობა</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
    <div class="flex gap-4">
      <button class="px-2 py-4 bg-primary1 rounded-xl text-white">
        + ლისტინგის დამატება
      </button>
      <button
        class="py-4 px-2 bg-white rounded-xl border-solid border-2 border-primary1 text-primary1"
      >
        + ლისტინგის დამატება
      </button>
    </div>
  </section>
</template>
