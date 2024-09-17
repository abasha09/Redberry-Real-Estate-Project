<script setup>
import { ref } from "vue";
import AddAgentModal from "./AddAgentModal.vue";
import { RouterLink } from "vue-router";

const currentOpenFilter = ref(null);

const toggleFilter = (filter) => {
  if (currentOpenFilter.value === filter) {
    currentOpenFilter.value = null;
  } else {
    currentOpenFilter.value = filter;
  }
};

const isOpen = ref(false);

function openModal() {
  isOpen.value = true;
}

function closeModal() {
  isOpen.value = false;
}
</script>

<template>
  <teleport to="body" v-if="isOpen">
    <AddAgentModal :isOpen="isOpen" @close="closeModal" />
  </teleport>
  <main
    class="flex justify-between gap-24 mx-28 p-2 border-solid border-2 rounded-lg"
    id="homepage"
  >
    <!-- Region Filter -->
    <div class="flex gap-6">
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
          <label for="tbilisi"
            ><input type="checkbox" id="tbilisi" /> თბილისი</label
          >

          <button
            class="absolute right-3 bottom-3 bg-primary1 text-white rounded-lg py-1 px-3"
          >
            არჩევა
          </button>
        </form>
      </section>

      <!-- Price Filter -->
      <section class="relative">
        <button
          :class="[
            'p-1 rounded-md',
            currentOpenFilter === 'price' ? 'bg-hoverColor' : 'bg-white',
            'hover:bg-hoverColor',
          ]"
          @click="toggleFilter('price')"
        >
          საფასო კატეგორია
          <span
            v-html="
              currentOpenFilter === 'price'
                ? '<i class=\'pi pi-angle-up\'></i>'
                : '<i class=\'pi pi-angle-down\'></i>'
            "
          ></span>
        </button>
        <form
          class="absolute bg-white py-12 px-2 gap-6 flex flex-wrap w-[420px] border-solid border-2 rounded-lg mt-6"
          v-if="currentOpenFilter === 'price'"
        >
          <p class="font-bold absolute top-2 left-3">ფასის მიხედვით</p>
          <div class="flex gap-6">
            <div class="flex flex-col gap-4">
              <input
                class="border-solid border-2 p-2 rounded-lg border-inputBorderColor"
                type="text"
                placeholder="დან"
              />
              <div>
                <span class="font-bold">მინ. ფასი</span>
                <p>50,000 ₾</p>
                <p>100,000 ₾</p>
                <p>150,000 ₾</p>
                <p>200,000 ₾</p>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <input
                class="border-solid border-2 p-2 rounded-lg border-inputBorderColor"
                type="text"
                placeholder="მდე"
              />
              <div>
                <span class="font-bold">მინ. ფასი</span>
                <p>50,000 ₾</p>
                <p>100,000 ₾</p>
                <p>150,000 ₾</p>
                <p>200,000 ₾</p>
              </div>
            </div>
          </div>
          <button
            class="absolute right-3 bottom-3 bg-primary1 text-white rounded-lg py-1 px-3"
          >
            არჩევა
          </button>
        </form>
      </section>

      <!-- Size Filter -->
      <section class="relative">
        <button
          :class="[
            'p-1 rounded-md',
            currentOpenFilter === 'size' ? 'bg-hoverColor' : 'bg-white',
            'hover:bg-hoverColor',
          ]"
          @click="toggleFilter('size')"
        >
          ფართობი
          <span
            v-html="
              currentOpenFilter === 'size'
                ? '<i class=\'pi pi-angle-up\'></i>'
                : '<i class=\'pi pi-angle-down\'></i>'
            "
          ></span>
        </button>
        <form
          class="absolute bg-white py-12 px-2 gap-6 flex flex-wrap w-[420px] border-solid border-2 rounded-lg mt-6"
          v-if="currentOpenFilter === 'size'"
        >
          <p class="font-bold absolute top-2 left-3">ფართობის მიხედვით</p>
          <div class="flex gap-6">
            <div class="flex flex-col gap-4">
              <input
                class="border-solid border-2 p-2 rounded-lg border-inputBorderColor"
                type="text"
                placeholder="დან"
              />
              <div>
                <span class="font-bold">მინ. მ²</span>
                <p>50,000 მ²</p>
                <p>100,000 მ²</p>
                <p>150,000 მ²</p>
                <p>200,000 მ²</p>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <input
                class="border-solid border-2 p-2 rounded-lg border-inputBorderColor"
                type="text"
                placeholder="მდე"
              />
              <div>
                <span class="font-bold">მინ. მ²</span>
                <p>50,000 მ²</p>
                <p>100,000 მ²</p>
                <p>150,000 მ²</p>
                <p>200,000 მ²</p>
              </div>
            </div>
          </div>
          <button
            class="absolute right-3 bottom-3 bg-primary1 text-white rounded-lg py-1 px-3"
          >
            არჩევა
          </button>
        </form>
      </section>

      <!-- Room Filter -->
      <section class="relative">
        <button
          :class="[
            'p-1 rounded-md',
            currentOpenFilter === 'room' ? 'bg-hoverColor' : 'bg-white',
            'hover:bg-hoverColor',
          ]"
          @click="toggleFilter('room')"
        >
          საძინებლის რაოდენობა
          <span
            v-html="
              currentOpenFilter === 'room'
                ? '<i class=\'pi pi-angle-up\'></i>'
                : '<i class=\'pi pi-angle-down\'></i>'
            "
          ></span>
        </button>
        <form
          class="absolute bg-white py-12 px-2 gap-6 flex flex-wrap w-[260px] h-[200px] border-solid border-2 rounded-lg mt-6"
          v-if="currentOpenFilter === 'room'"
        >
          <p class="font-bold absolute top-4 left-5">საძინებლების რაოდენობა</p>
          <input
            class="w-[40px] h-[40px] p-3 border-solid border-2 rounded-md ml-3 mt-5"
            type="text"
          />
          <button
            class="absolute right-3 bottom-3 bg-primary1 text-white rounded-lg py-1 px-3"
          >
            არჩევა
          </button>
        </form>
      </section>
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
</template>
