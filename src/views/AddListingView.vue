<script setup>
import { onMounted, ref, computed } from "vue";
import axios from "axios";

const token = "9d0245f7-ecfe-43ae-ba39-0eea3e28d26c";

const fetchedRegions = ref([]);
const fetchedCities = ref([]);
const listingOptions = ref(null);
const listingAddress = ref("");
const listingPostIndex = ref(null);
const selectedRegion = ref("");
const selectedCity = ref("");
const listingPrice = ref(null);
const listingArea = ref(null);
const listingBedrooms = ref(null);
const listingDescription = ref("");
const errorMessage = ref("");

const handleFileChange = (event) => {
  const file = event.target.files[0];

  if (file) {
    if (file.size > 2 * 1024 * 1024) {
      errorMessage.value =
        "File size exceeds 2MB. Please upload a smaller image.";
      event.target.value = "";
    } else {
      console.log("File ready for upload:", file);
      errorMessage.value = "";
    }
  }
};

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

const fetchCities = async () => {
  try {
    const response = await axios.get(
      "https://api.real-estate-manager.redberryinternship.ge/api/cities",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchedCities.value = response.data;
  } catch (err) {
    console.log("Something Went Wrong", err);
  }
};

const filteredCities = computed(() => {
  if (selectedRegion.value) {
    return fetchedCities.value.filter(
      (city) => city.region_id === selectedRegion.value
    );
  }
  return [];
});

const updateCities = () => {
  selectedCity.value = null;
};

const validateForm = () => {
  if (
    !listingAddress.value ||
    !listingPostIndex.value ||
    !selectedRegion.value ||
    !selectedCity.value ||
    !listingPrice.value ||
    !listingArea.value ||
    !listingBedrooms.value ||
    !listingDescription.value
  ) {
    errorMessage.value = "Please fill in all required fields.";
    return false;
  }
  errorMessage.value = "";
  return true;
};

const handleSubmit = (event) => {
  event.preventDefault();
  if (validateForm()) {
    console.log("Form is valid! Submitting...");
  }
};

onMounted(() => {
  fetchRegions();
  fetchCities();
});
</script>

<template>
  <main class="flex flex-col justify-center items-center gap-10">
    <h1 class="text-3xl font-medium">ლისტინგის დამატება</h1>
    <form @submit="handleSubmit" class="w-[790px] h-[1211px] font-medium">
      <h3>გარიგების ტიპი</h3>
      <div class="flex gap-10">
        <label for="forSale">
          <input
            v-model="listingOptions"
            checked
            value="forSale"
            type="radio"
            id="checkbox1"
          />
          იყიდება
        </label>
        <label for="forRent">
          <input
            v-model="listingOptions"
            type="radio"
            value="forRent"
            id="checkbox2"
          />
          ქირავდება
        </label>
      </div>
      <h4 class="mb-4 mt-12 text-lg">მდებარეობა</h4>
      <div class="grid grid-cols-2 gap-5">
        <div class="flex flex-col">
          <label>მისამართი *</label>
          <input
            v-model="listingAddress"
            type="text"
            min="2"
            :class="[
              'border-solid border-2 rounded-md p-2',
              listingAddress.length === 0 || listingAddress.length >= 2
                ? ''
                : 'border-red-500',
            ]"
          />
          <p class="text-sm"><i class="pi pi-check" /> მინიმუმ ორი სიმბოლო</p>
        </div>
        <div class="flex flex-col">
          <label>საფოსტო ინდექსი *</label>
          <input
            v-model="listingPostIndex"
            type="number"
            class="border-solid border-2 rounded-md p-2"
          />
          <p class="text-sm"><i class="pi pi-check" /> მხოლოდ რიცხვები</p>
        </div>
        <div class="flex flex-col">
          <label>რეგიონი *</label>
          <select
            v-model="selectedRegion"
            @change="updateCities"
            class="border-solid border-2 rounded-md p-3"
          >
            <option value="" disabled>აირჩიეთ რეგიონი</option>
            <option
              v-for="option in fetchedRegions"
              :key="option.id"
              :value="option.id"
            >
              {{ option.name }}
            </option>
          </select>
          <p class="text-sm"><i class="pi pi-check" /> მინიმუმ ორი სიმბოლო</p>
        </div>
        <div class="flex flex-col">
          <label>ქალაქი *</label>
          <select
            v-model="selectedCity"
            class="border-solid border-2 rounded-md p-3"
          >
            <option value="" disabled>აირჩიეთ ქალაქი</option>
            <option
              v-for="city in filteredCities"
              :key="city.id"
              :value="city.id"
            >
              {{ city.name }}
            </option>
          </select>
          <p class="text-sm"><i class="pi pi-check" /> მინიმუმ ორი სიმბოლო</p>
        </div>
        <h3 class="text-lg mb-4 mt-12">ბინის დეტალები</h3>
      </div>
      <div class="grid grid-cols-2 gap-5">
        <div class="flex flex-col">
          <label>ფასი</label>
          <input
            type="number"
            v-model="listingPrice"
            class="border-solid border-2 rounded-md p-2"
          />
          <p class="text-sm"><i class="pi pi-check" /> მხოლოდ რიცხვები</p>
        </div>
        <div class="flex flex-col">
          <label>ფართობი</label>
          <input
            v-model="listingArea"
            type="number"
            class="border-solid border-2 rounded-md p-2"
          />
          <p class="text-sm"><i class="pi pi-check" /> მხოლოდ რიცხვები</p>
        </div>
        <div class="flex flex-col">
          <label>საძინებლის რაოდენობა *</label>
          <input
            v-model="listingBedrooms"
            type="number"
            class="border-solid border-2 rounded-md p-2"
          />
          <p class="text-sm"><i class="pi pi-check" /> მხოლოდ რიცხვები</p>
        </div>
      </div>
      <h3 class="text-lg mb-4 mt-12">აღწერა *</h3>
      <textarea
        v-model="listingDescription"
        :class="[
          'w-[788px] h-[135px] border-solid border-2 rounded-md',
          listingDescription.length === 0 || listingDescription.length >= 5
            ? ''
            : 'border-red-500',
        ]"
      ></textarea>
      <p class="text-sm"><i class="pi pi-check" /> მინიმუმ ხუთი სიტყვა</p>
      <h3 class="text-lg mb-4 mt-12">ატვირთე ფოტო *</h3>
      <div class="border-dashed border-2 rounded-md relative">
        <i
          class="pi pi-plus-circle absolute top-[50%] left-[50%] text-lg text-fileColor"
        />
        <input
          type="file"
          @change="handleFileChange"
          accept="image/*"
          class="w-[788px] h-[135px] cursor-pointer opacity-0"
        />
      </div>
      <p class="text-sm" v-if="errorMessage">{{ errorMessage }}</p>
      <div class="flex justify-end gap-5">
        <RouterLink
          to="/"
          class="text-primary1 px-2 py-2 border-solid border-2 rounded-lg border-primary1"
        >
          გაუქმება
        </RouterLink>
        <button
          class="text-white px-2 py-2 border-solid border-2 rounded-lg bg-primary1"
          type="submit"
        >
          დამატე ლისტინგი
        </button>
      </div>
    </form>
  </main>
</template>
