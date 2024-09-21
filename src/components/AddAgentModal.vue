<script setup>
import { ref } from "vue";
import axios from "axios";

const token = "9d0245f7-ecfe-43ae-ba39-0eea3e28d26c";

const emit = defineEmits(["close"]);
const props = defineProps({
  isOpen: Boolean,
});
const submit = ref(true);

const agentName = ref("");
const agentSurname = ref("");
const agentPhone = ref("");
const agentEmail = ref("");
const agentImage = ref(null);
const errorMessage = ref("");

const generateRandomId = () => {
  return Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
};

const validateForm = () => {
  if (
    !agentName.value ||
    !agentSurname.value ||
    !agentPhone.value ||
    !validateEmail() ||
    !agentImage.value
  ) {
    errorMessage.value = "გთხოვთ შეავსოთ ყველა საჭირო ველი";
    return false;
  }
  errorMessage.value = "";
  return true;
};

const handleFileChange = (event) => {
  const file = event.target.files[0];

  if (file) {
    if (file.size > 2 * 1024 * 1024) {
      errorMessage.value =
        "File size exceeds 2MB. Please upload a smaller image.";
      event.target.value = "";
    } else {
      console.log("File ready for upload:", file);
      agentImage.value = file;
      errorMessage.value = "";
    }
  }
};

const validateEmail = () => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@redberry\.ge$/;
  if (!emailPattern.test(agentEmail.value)) {
    errorMessage.value = "Please use an @redberry.ge email.";
    return false;
  }
  errorMessage.value = "";
  return true;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  const formData = new FormData();
  formData.append("id", generateRandomId());
  formData.append("name", agentName.value);
  formData.append("surname", agentSurname.value);
  formData.append("email", agentEmail.value);
  formData.append("phone", agentPhone.value);

  if (agentImage.value) {
    formData.append("avatar", agentImage.value);
  } else {
    console.error("Image file is missing");
    return;
  }

  try {
    const response = await axios.post(
      "https://api.real-estate-manager.redberryinternship.ge/api/agents",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
          accept: "application/json",
        },
      }
    );
    console.log("Property added successfully:", response.data);
  } catch (err) {
    console.error("Error response:", err.response ? err.response.data : err);
  }
};
</script>

<template>
  <div
    class="absolute w-full h-full top-0 bg-overlayBg shadow-2xl flex justify-center items-center"
    v-if="isOpen"
  >
    <form
      @submit.prevent="handleSubmit"
      class="w-[1009px] h-[784px] bg-white border-solid border-2 rounded-xl p-10"
    >
      <h1 class="text-3xl font-medium text-center mb-10">აგენტის დამატება</h1>
      <div class="grid grid-cols-2 gap-5">
        <div class="flex flex-col">
          <label>სახელი</label>
          <input
            v-model="agentName"
            @input="validateName"
            type="text"
            class="border-solid border-2 rounded-md p-2"
          />
          <p class="text-sm"><i class="pi pi-check" /> მინიმუმ ორი სიმბოლო</p>
        </div>
        <div class="flex flex-col">
          <label>გვარი</label>
          <input
            v-model="agentSurname"
            type="text"
            class="border-solid border-2 rounded-md p-2"
          />
          <p class="text-sm"><i class="pi pi-check" /> მინიმუმ ორი სიმბოლო</p>
        </div>
        <div class="flex flex-col">
          <label>ელ-ფოსტა *</label>
          <input
            v-model="agentEmail"
            @input="validateEmail"
            type="email"
            class="border-solid border-2 rounded-md p-2"
          />
          <p v-if="!validateEmail" class="text-red-500">
            გთხოვთ გამოიყენოთ @redberry.ge მეილი
          </p>

          <p class="text-sm">
            <i class="pi pi-check" /> გამოიყენეთ @redberry.ge ფოსტა
          </p>
        </div>
        <div class="flex flex-col">
          <label>ტელეფონის ნომერი</label>
          <input
            v-model="agentPhone"
            type="tel"
            class="border-solid border-2 rounded-md p-2"
          />

          <p class="text-sm"><i class="pi pi-check" /> მხოლოდ რიცხვები</p>
        </div>
      </div>

      <h3 class="text-lg mb-4 mt-12">ატვირთე ფოტო *</h3>
      <div class="border-dashed border-2 rounded-md relative">
        <i
          class="pi pi-plus-circle absolute top-[50%] left-[50%] text-lg text-fileColor"
        />
        <input
          @change="handleFileChange"
          accept="image/*"
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
          @click="handleSubmit"
          :disabled="!validateForm()"
        >
          დაამატე ლისტინგი
        </button>
        <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
      </div>
    </form>
  </div>
</template>
