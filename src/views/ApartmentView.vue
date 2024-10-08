<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import axios from "axios";

const token = "9d0245f7-ecfe-43ae-ba39-0eea3e28d26c";

const route = useRoute();

const router = useRouter();

const showModal = ref(false);

const fetchedApartment = ref(null);

const apartmentId = route.params.id;

const fetchApartment = async () => {
  try {
    const response = await axios.get(
      `https://api.real-estate-manager.redberryinternship.ge/api/real-estates/${apartmentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      }
    );
    fetchedApartment.value = response.data;
    console.log("Fetched Apartment:", fetchedApartment.value);
  } catch (error) {
    console.error("Error fetching apartment data:", error);
  }
};

const deleteProperty = async () => {
  try {
    await axios.delete(
      `https://api.real-estate-manager.redberryinternship.ge/api/real-estates/${apartmentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.log("Error deleting property", error);
  } finally {
    router.push("/");
  }
};

onMounted(() => {
  fetchApartment();
});
</script>

<template>
  <main class="px-28 relative" v-if="fetchedApartment">
    <teleport to="body" v-if="(showmodal = true)">
      <div
        class="absolute w-full h-full top-0 bg-overlayBg shadow-2xl flex justify-center items-center"
        v-if="showModal"
      >
        <div
          class="w-[623px] h-[222px] bg-white border-solid border-2 rounded-xl p-10 flex flex-col justify-center items-center gap-4"
        >
          <p class="text-xl">გსურთ წაშალოთ ლისტინგი?</p>
          <div class="flex gap-5">
            <button
              class="text-primary1 px-2 py-2 border-solid border-2 border-primary1 rounded-lg bg-white"
              @click="showModal = false"
            >
              გაუქმება
            </button>
            <button
              class="text-white px-2 py-2 border-solid border-2 rounded-lg bg-primary1"
              @click="deleteProperty"
            >
              დადასტურება
            </button>
          </div>
        </div>
      </div>
    </teleport>

    <section class="flex items-center gap-10">
      <div class="relative">
        <RouterLink to="/"
          ><i class="pi pi-arrow-left text-2xl mb-5"
        /></RouterLink>
        <span
          class="absolute z-10 top-20 left-12 rounded-3xl px-4 py-2 bg-bgColor text-white"
          >{{ fetchedApartment.is_rental ? "ქირავდება" : "იყიდება" }}</span
        >
        <img :src="fetchedApartment.image" width="839" height="670" />
        <p class="text-right text-primary2 mt-1">
          გამოქვეყნების თარიღი
          {{ new Date(fetchedApartment.created_at).toLocaleDateString() }}
        </p>
      </div>
      <div class="flex flex-col gap-9">
        <div class="flex flex-col gap-4">
          <p class="text-5xl">{{ fetchedApartment.price }}$</p>
          <p class="text-2xl text-primary2">
            <i class="pi pi-map-marker"></i> {{ fetchedApartment.address }}
          </p>
          <p class="text-2xl text-primary2">
            <i class="pi pi-window-maximize"></i> ფართი
            {{ fetchedApartment.area }} მ
          </p>
          <p class="text-2xl text-primary2 flex gap-2">
            <img src="../assets/icons/bed.png" width="24px" height="24px" />
            საძინებელი {{ fetchedApartment.bedrooms }}
          </p>
          <p class="text-2xl text-primary2">
            <i class="pi pi-code" /> საფოსტო ინდექსი
            {{ fetchedApartment.zip_code }}
          </p>
        </div>

        <p class="text-lg w-[503px] h-[78px] text-primary2">
          {{ fetchedApartment.description }}
        </p>
        <div
          class="border-solid border-2 border-borderColor rounded-lg w-[503px] h-[174px]"
        >
          <div class="flex justify-start items-center gap-4 p-2">
            <img :src="fetchApartment.image" width="40px" height="40px" />
            <div class="flex flex-col">
              <p class="text-base">
                {{ fetchedApartment.agent?.name }}
                {{ fetchedApartment.agent?.surname }}
              </p>
              <p class="text-primary2">აგენტი</p>
            </div>
          </div>
          <div class="ml-4">
            <p class="text-primary2 text-lg">
              <i class="pi pi-envelope" />
              {{ fetchedApartment.agent?.email }}
            </p>
            <p class="text-primary2">
              <i class="pi pi-phone" /> {{ fetchedApartment.agent.phone }}
            </p>
          </div>
          <button
            class="border-solid border-2 rounded-lg px-3 py-2 mt-20 text-buttonColor border-buttonColor"
            @click="showModal = true"
          >
            ლისტინგის წაშლა
          </button>
        </div>
      </div>
    </section>
  </main>
</template>
