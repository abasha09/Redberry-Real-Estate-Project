<script setup>
import { ref, defineEmits, defineProps } from "vue";

const emit = defineEmits(["close"]);
const props = defineProps({
  isOpen: Boolean,
});
const submit = ref(true);
</script>

<template>
  <div
    class="absolute w-full h-full top-0 bg-overlayBg shadow-2xl flex justify-center items-center"
    v-if="isOpen"
  >
    <form
      @submit.prevent="submit"
      class="w-[1009px] h-[784px] bg-white border-solid border-2 rounded-xl p-10"
    >
      <h1 class="text-3xl font-medium text-center mb-10">აგენტის დამატება</h1>
      <div class="grid grid-cols-2 gap-5">
        <div class="flex flex-col">
          <label>სახელი</label>
          <input type="text" class="border-solid border-2 rounded-md p-2" />
          <p class="text-sm"><i class="pi pi-check" /> მინიმუმ ორი სიმბოლო</p>
        </div>
        <div class="flex flex-col">
          <label>გვარი</label>
          <input type="text" class="border-solid border-2 rounded-md p-2" />
          <p class="text-sm"><i class="pi pi-check" /> მინიმუმ ორი სიმბოლო</p>
        </div>
        <div class="flex flex-col">
          <label>ელ-ფოსტა *</label>
          <input type="text" class="border-solid border-2 rounded-md p-2" />

          <p class="text-sm">
            <i class="pi pi-check" /> გამოიყენეთ @redberry.ge ფოსტა
          </p>
        </div>
        <div class="flex flex-col">
          <label>ტელეფონის ნომერი</label>
          <input type="text" class="border-solid border-2 rounded-md p-2" />

          <p class="text-sm"><i class="pi pi-check" /> მხოლოდ რიცხვები</p>
        </div>
      </div>

      <h3 class="text-lg mb-4 mt-12">ატვირთე ფოტო *</h3>
      <div class="border-dashed border-2 rounded-md relative">
        <i
          class="pi pi-plus-circle absolute top-[50%] left-[50%] text-lg text-fileColor"
        />
        <input
          type="file"
          class="w-[788px] h-[135px] cursor-pointer opacity-0"
        />
      </div>

      <div class="flex justify-end gap-5 mt-20">
        <button
          class="text-primary1 px-2 py-2 border-solid border-2 rounded-lg border-primary1"
          @click.prevent="emit('close')"
        >
          გაუქმება
        </button>
        <button
          class="text-white px-2 py-2 border-solid border-2 rounded-lg bg-primary1"
          @click="submit"
        >
          დაამატე ლისტინგი
        </button>
      </div>
    </form>
  </div>
</template>
