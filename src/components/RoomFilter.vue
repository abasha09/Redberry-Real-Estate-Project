<script setup>
import { ref } from "vue";
const props = defineProps({
  currentOpenFilter: String,
});

const emit = defineEmits(["update:currentOpenFilter", "update:bedroomsCount"]);

const bedrooms = ref("");

const selectBedroomsCount = () => {
  emit("update:bedroomsCount", bedrooms.value);
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
        props.currentOpenFilter === 'room' ? 'bg-hoverColor' : 'bg-white',
        'hover:bg-hoverColor',
      ]"
      @click="toggleFilter('room')"
    >
      საძინებლის რაოდენობა
      <span
        v-html="
          props.currentOpenFilter === 'room'
            ? '<i class=\'pi pi-angle-up\'></i>'
            : '<i class=\'pi pi-angle-down\'></i>'
        "
      ></span>
    </button>
    <form
      class="absolute bg-white py-12 px-2 gap-6 flex flex-wrap w-[260px] h-[200px] border-solid border-2 rounded-lg mt-6"
      v-if="props.currentOpenFilter === 'room'"
      @submit.prevent="selectBedroomsCount"
    >
      <p class="font-bold absolute top-4 left-5">საძინებლების რაოდენობა</p>
      <input
        class="w-[40px] h-[40px] p-3 border-solid border-2 rounded-md ml-3 mt-5"
        type="text"
        v-model="bedrooms"
      />
      <button
        class="absolute right-3 bottom-3 bg-primary1 text-white rounded-lg py-1 px-3"
        type="submit"
        @click="selectBedroomsCount"
      >
        არჩევა
      </button>
    </form>
  </section>
</template>
