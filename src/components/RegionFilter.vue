<script setup>
import { ref } from "vue";

const props = defineProps({
  regions: Array,
  currentOpenFilter: String,
  selectedOptions: Array,
  filterProperties: Function,
});

const emit = defineEmits([
  "update:currentOpenFilter",
  "update:selectedOptions",
]);

const localSelectedRegions = ref([...props.selectedOptions]);

const toggleFilter = (filter) => {
  if (props.currentOpenFilter === filter) {
    emit("update:currentOpenFilter", null);
  } else {
    emit("update:currentOpenFilter", filter);
  }
};

const handleCheckboxChange = (event, regionName) => {
  if (event.target.checked) {
    localSelectedRegions.value.push(regionName);
  } else {
    localSelectedRegions.value = localSelectedRegions.value.filter(
      (r) => r !== regionName
    );
  }
};

const applyFilter = () => {
  emit("update:selectedOptions", [...localSelectedRegions.value]);
  props.filterProperties();
};
</script>

<template>
  <section class="relative">
    <button
      :class="[
        'p-1 rounded-md',
        props.currentOpenFilter === 'region' ? 'bg-hoverColor' : 'bg-white',
        'hover:bg-hoverColor',
      ]"
      @click="toggleFilter('region')"
    >
      რეგიონი
      <span
        v-html="
          props.currentOpenFilter === 'region'
            ? '<i class=\'pi pi-angle-up\'></i>'
            : '<i class=\'pi pi-angle-down\'></i>'
        "
      ></span>
    </button>

    <form
      class="absolute bg-white py-12 px-2 gap-6 flex flex-wrap w-[600px] border-solid border-2 rounded-lg mt-6"
      v-if="props.currentOpenFilter === 'region'"
    >
      <p class="absolute top-2 left-1">რეგიონის მიხედვით</p>
      <label :for="region.id" v-for="region in props.regions" :key="region.id">
        <input
          type="checkbox"
          :id="region.id"
          :value="region.name"
          :checked="localSelectedRegions.includes(region.name)"
          @change="handleCheckboxChange($event, region.name)"
        />
        {{ region.name }}
      </label>

      <button
        class="absolute right-3 bottom-3 bg-primary1 text-white rounded-lg py-1 px-3"
        type="button"
        @click="applyFilter"
      >
        არჩევა
      </button>
    </form>
  </section>
</template>
