<script setup>
import { ref } from "vue";
const props = defineProps({
  currentOpenFilter: String, // Expect currentOpenFilter as a String
});

const emit = defineEmits(["update:currentOpenFilter", "update:priceRange"]);

const minPrice = ref("");
const maxPrice = ref("");

const selectPriceRange = () => {
  emit("update:priceRange", { min: minPrice.value, max: maxPrice.value });
};

const toggleFilter = (filter) => {
  if (props.currentOpenFilter === filter) {
    emit("update:currentOpenFilter", null);
  } else {
    emit("update:currentOpenFilter", filter);
  }
};
</script>

<template>
  <section class="relative">
    <button
      :class="[
        'p-1 rounded-md',
        props.currentOpenFilter === 'price' ? 'bg-hoverColor' : 'bg-white',
        'hover:bg-hoverColor',
      ]"
      @click="toggleFilter('price')"
    >
      საფასო კატეგორია
      <span
        v-html="
          props.currentOpenFilter === 'price'
            ? '<i class=\'pi pi-angle-up\'></i>'
            : '<i class=\'pi pi-angle-down\'></i>'
        "
      ></span>
    </button>
    <form
      class="absolute bg-white py-12 px-2 gap-6 flex flex-wrap w-[420px] border-solid border-2 rounded-lg mt-6"
      v-if="props.currentOpenFilter === 'price'"
    >
      <p class="font-bold absolute top-2 left-3">ფასის მიხედვით</p>
      <div class="flex gap-6">
        <div class="flex flex-col gap-4">
          <input
            class="border-solid border-2 p-2 rounded-lg border-inputBorderColor"
            type="text"
            placeholder="დან"
            v-model="minPrice"
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
            v-model="maxPrice"
          />
          <div>
            <span class="font-bold">მაქს. ფასი</span>
            <p>50,000 ₾</p>
            <p>100,000 ₾</p>
            <p>150,000 ₾</p>
            <p>200,000 ₾</p>
          </div>
        </div>
      </div>
      <button
        class="absolute right-3 bottom-3 bg-primary1 text-white rounded-lg py-1 px-3 hover:bg-hoverColor2"
        type="button"
        @click="selectPriceRange"
      >
        არჩევა
      </button>
    </form>
  </section>
</template>
