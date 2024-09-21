<script setup>
import { ref, watch, onMounted } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import AddAgentModal from "@/components/AddAgentModal.vue";
import PropertyCard from "@/components/PropertyCard.vue";
import RegionFilter from "@/components/RegionFilter.vue";
import PriceFilter from "@/components/PriceFilter.vue";
import AreaFilter from "@/components/AreaFilter.vue";
import RoomFilter from "@/components/RoomFilter.vue";

const currentOpenFilter = ref(null);

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
const selectedOptions = ref([]);
const fetchedProperties = ref([]);
const fetchedRegions = ref([]);
const filteredProperties = ref([]);
const priceRange = ref({ min: null, max: null });
const areaRange = ref({ min: null, max: null });
const bedroomsCount = ref(null);

const filterProperties = () => {
  filteredProperties.value = fetchedProperties.value.filter((item) => {
    const withinRegion =
      !selectedOptions.value.length ||
      selectedOptions.value.includes(item.city.region.name);
    const withinPriceRange =
      (priceRange.value.min === null || item.price >= priceRange.value.min) &&
      (priceRange.value.max === null || item.price <= priceRange.value.max);
    const withinAreaRange =
      (areaRange.value.min === null || item.area >= areaRange.value.min) &&
      (areaRange.value.max === null || item.area <= areaRange.value.max);
    const withinBedrooms =
      bedroomsCount.value === null ||
      item.bedrooms === parseInt(bedroomsCount.value);
    return (
      withinRegion && withinAreaRange && withinPriceRange && withinBedrooms
    );
  });
};

watch(selectedOptions, () => {
  filterProperties();
});

watch(priceRange, () => {
  filterProperties();
});

watch(areaRange, () => {
  filterProperties();
});

watch(bedroomsCount, () => {
  filterProperties();
});
const updatePriceRange = (range) => {
  priceRange.value = range;
  filterProperties();
};

const updateAreaRange = (range) => {
  areaRange.value = range;
  filterProperties();
};

const updateBedroomsCount = (value) => {
  bedroomsCount.value = value;
};

const removeSelected = (regionName) => {
  selectedOptions.value = selectedOptions.value.filter(
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
    fetchedRegions.value = response.data;
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
    fetchedProperties.value = response.data;
  } catch (err) {
    console.log("Something Went Wrong", err);
  } finally {
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
          :regions="fetchedRegions"
          :currentOpenFilter="currentOpenFilter"
          :selectedOptions="selectedOptions"
          @update:currentOpenFilter="currentOpenFilter = $event"
          @update:selectedOptions="selectedOptions = $event"
          :filterProperties="filterProperties"
        />

        <!-- Price Filter -->
        <PriceFilter
          :currentOpenFilter="currentOpenFilter"
          @update:currentOpenFilter="currentOpenFilter = $event"
          @update:priceRange="updatePriceRange"
        />

        <!-- Size Filter -->
        <AreaFilter
          :currentOpenFilter="currentOpenFilter"
          @update:currentOpenFilter="currentOpenFilter = $event"
          @update:areaRange="updateAreaRange"
        />

        <!-- Room Filter -->
        <RoomFilter
          :currentOpenFilter="currentOpenFilter"
          @update:currentOpenFilter="currentOpenFilter = $event"
          @update:bedroomsCount="updateBedroomsCount"
        />
      </div>
      <div class="flex gap-4">
        <RouterLink
          to="/addlisting"
          class="bg-primary1 py-1 px-4 text-white rounded-lg hover:bg-hoverColor2"
        >
          + ლისტინგის დამატება
        </RouterLink>
        <button
          class="bg-white py-1 px-4 text-primary1 rounded-lg border-solid border-2 hover:bg-primary1 hover:text-white"
          @click="isOpen = true"
        >
          + აგენტის დამატება
        </button>
      </div>
    </main>
    <ul class="px-28 py-2">
      <li
        class="px-3 py-1 border-solid border-2 border-borderColor2 rounded-full inline"
        v-for="selected in selectedOptions"
        key="selected"
      >
        {{ selected }}
        <i
          class="pi pi-times text-xs cursor-pointer"
          @click="removeSelected(selected)"
        />
      </li>
    </ul>
    <section class="grid grid-cols-4 gap-5 p-10 px-28">
      <p v-if="!filteredProperties.length" class="w-[504px] text-xl">
        აღნიშნული მონაცემებით განცხადება არ იძებნება
      </p>
      <PropertyCard
        v-for="property in filteredProperties"
        :key="property.id"
        :property="property"
      />
    </section>
  </main>
</template>
