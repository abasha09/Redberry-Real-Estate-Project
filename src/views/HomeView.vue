<script setup>
import Card from "@/components/Card.vue";
import axios from "axios";
import { ref } from "vue";
import AddAgentModal from "../components/AddAgentModal.vue";
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import { reactive } from "vue";
import RegionFilter from "@/components/RegionFilter.vue";
import PriceFilter from "@/components/PriceFilter.vue";
import AreaFilter from "@/components/AreaFilter.vue";
import RoomFilter from "@/components/RoomFilter.vue";
import { watch } from "vue";

const currentOpenFilter = ref(null);

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
const selectedRegions = ref([]);

const state = reactive({ regions: [], properties: [], filteredProperties: [] });

const apiData = ref([]);
const filteredData = ref([]);

const filterProperties = () => {
  filteredData.value = apiData.value.filter((item) => {
    return selectedRegions.value.includes(item.city.region.name);
  });
  console.log(filteredData);
};

watch(selectedRegions, () => {
  filterProperties();
});

console.log(selectedRegions, "selected Regions");
const removeSelected = (regionName) => {
  selectedRegions.value = selectedRegions.value.filter(
    (selected) => selected !== regionName
  );
};

const token = "9d0245f7-ecfe-43ae-ba39-0eea3e28d26c";

const fetchRegions = async () => {
  try {
    const response = await axios.get(
      "https://api.real-estate-manager.redberryinternship.ge/api/regions",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    state.regions = response.data;
  } catch (err) {
    console.log("Something Went Wrong", err);
  }
};

const fetchProperties = async () => {
  try {
    const response = await axios.get(
      "https://api.real-estate-manager.redberryinternship.ge/api/real-estates",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    // state.properties = response.data;
    apiData.value = response.data;
    console.log(state.properties);
  } catch (err) {
    console.log("Something Went Wrong", err);
  } finally {
    console.log("text");
    filterProperties();
  }
};

onMounted(async () => {
  fetchRegions();
  fetchProperties();
});
</script>

<template>
  <main>
    <teleport to="body" v-if="isOpen">
      <AddAgentModal :isOpen="isOpen" @close="closeModal" />
    </teleport>
    <main
      class="flex justify-between gap-24 mx-28 p-2 border-solid border-2 rounded-lg"
    >
      <!-- Region Filter -->
      <div class="flex gap-6">
        <RegionFilter
          :regions="state.regions"
          :currentOpenFilter="currentOpenFilter"
          :selectedRegions="selectedRegions"
          @update:currentOpenFilter="currentOpenFilter = $event"
          @update:selectedRegions="selectedRegions = $event"
          :filterProperties="filterProperties"
        />

        <!-- Price Filter -->
        <PriceFilter
          :currentOpenFilter="currentOpenFilter"
          @update:currentOpenFilter="currentOpenFilter = $event"
        />

        <!-- Size Filter -->
        <AreaFilter
          :currentOpenFilter="currentOpenFilter"
          @update:currentOpenFilter="currentOpenFilter = $event"
        />

        <!-- Room Filter -->
        <RoomFilter
          :currentOpenFilter="currentOpenFilter"
          @update:currentOpenFilter="currentOpenFilter = $event"
        />
      </div>
      <div class="flex gap-4">
        <RouterLink
          to="/addlisting"
          class="bg-primary1 py-1 px-4 text-white rounded-lg"
        >
          + ლისტინგის დამატება
        </RouterLink>
        <button
          class="bg-white py-1 px-4 text-primary1 rounded-lg border-solid border-2"
          @click="isOpen = true"
        >
          + აგენტის დამატება
        </button>
      </div>
    </main>
    <ul class="px-28 py-2">
      <li
        class="px-3 py-1 border-solid border-2 border-borderColor2 rounded-full inline"
        v-for="selected in selectedRegions"
        key="selected"
      >
        {{ selected }}
        <i
          class="pi pi-times text-xs cursor-pointer"
          @click="removeSelected(selected)"
        />
      </li>
    </ul>
    <section class="grid grid-cols-4 gap-5 p-10 px-28 flex-wrap">
      <section
        class="flex flex-col gap-5 border-solid border-2 w-[384px] h-[455px] rounded-xl cursor-pointer"
        v-for="property in filteredData"
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
      <!-- <Card :properties="state.filteredProperties" /> -->
    </section>
  </main>
</template>
