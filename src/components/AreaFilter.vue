<script setup>
import { ref } from "vue";
const props = defineProps({
  currentOpenFilter: String,
});

const emit = defineEmits(["update:currentOpenFilter", "update:areaRange"]);

const minArea = ref("");
const maxArea = ref("");

const selectAreaRange = () => {
  emit("update:areaRange", { min: minArea.value, max: maxArea.value });
};

const toggleFilter = (filter) => {
  if (props.currentOpenFilter === filter) {
    emit("update:currentOpenFilter", null);
  } else {
    emit("update:currentOpenFilter", filter);
  }
  console.log("Current Open Filter:", props.currentOpenFilter);
};
</script>

<template>
  <section class="relative">
    <button
      :class="[
        'p-1 rounded-md',
        props.currentOpenFilter === 'size' ? 'bg-hoverColor' : 'bg-white',
        'hover:bg-hoverColor',
      ]"
      @click="toggleFilter('size')"
    >
      ფართობი
      <span
        v-html="
          props.currentOpenFilter === 'size'
            ? '<i class=\'pi pi-angle-up\'></i>'
            : '<i class=\'pi pi-angle-down\'></i>'
        "
      ></span>
    </button>
    <form
      class="absolute bg-white py-12 px-2 gap-6 flex flex-wrap w-[420px] border-solid border-2 rounded-lg mt-6"
      v-if="props.currentOpenFilter === 'size'"
      @submit.prevent="selectAreaRange"
    >
      <p class="font-bold absolute top-2 left-3">ფართობის მიხედვით</p>
      <div class="flex gap-6">
        <div class="flex flex-col gap-4">
          <input
            class="border-solid border-2 p-2 rounded-lg border-inputBorderColor"
            type="number"
            v-model="minArea"
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
            type="number"
            placeholder="მდე"
            v-model="maxArea"
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
        class="absolute right-3 bottom-3 bg-primary1 text-white rounded-lg py-1 px-3 hover:bg-hoverColor2"
        @click="selectAreaRange"
      >
        არჩევა
      </button>
    </form>
  </section>
</template>
