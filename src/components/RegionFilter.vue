<script setup>
import { ref } from "vue";

const currentOpenFilter = ref(null);

const toggleFilter = (filter) => {
  if (currentOpenFilter.value === filter) {
    currentOpenFilter.value = null;
  } else {
    currentOpenFilter.value = filter;
  }
};

defineProps({ regions: Array });
</script>

<template>
  <section class="relative">
    <button
      :class="[
        'p-1 rounded-md',
        currentOpenFilter === 'region' ? 'bg-hoverColor' : 'bg-white',
        'hover:bg-hoverColor',
      ]"
      @click="toggleFilter('region')"
    >
      რეგიონი
      <span
        v-html="
          currentOpenFilter === 'region'
            ? '<i class=\'pi pi-angle-up\'></i>'
            : '<i class=\'pi pi-angle-down\'></i>'
        "
      ></span>
    </button>
    <form
      class="absolute bg-white py-12 px-2 gap-6 flex flex-wrap w-[600px] border-solid border-2 rounded-lg mt-6"
      v-if="currentOpenFilter === 'region'"
    >
      <p class="absolute top-2 left-1">რეგიონის მიხედვით</p>
      <label :for="region.id" v-for="region in regions" :key="region.id"
        ><input
          type="checkbox"
          :id="region.id"
          :value="region.name"
          v-model="selectedRegions"
        />
        {{ region.name }}</label
      >

      <button
        class="absolute right-3 bottom-3 bg-primary1 text-white rounded-lg py-1 px-3"
      >
        არჩევა
      </button>
    </form>
  </section>
</template>
