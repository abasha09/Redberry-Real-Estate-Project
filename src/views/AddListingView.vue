<script setup></script>

<template>
  <main class="flex flex-col justify-center items-center gap-10">
    <h1 class="text-3xl font-medium">ლისტინგის დამატება</h1>
    <form class="w-[790px] h-[1211px] font-medium">
      <h3>გარიგების ტიპი</h3>
      <div class="flex gap-10">
        <label><input type="checkbox" id="checkbox1" /> იყიდება</label>
        <label><input type="checkbox" id="checkbox2" /> ქირავდება</label>
      </div>
      <h4 class="mb-4 mt-12 text-lg">მდებარეობა</h4>
      <div class="grid grid-cols-2 gap-5">
        <div class="flex flex-col">
          <label>მისამართი *</label>
          <input type="text" class="border-solid border-2 rounded-md p-2" />
          <p class="text-sm"><i class="pi pi-check" /> მინიმუმ ორი სიმბოლო</p>
        </div>
        <div class="flex flex-col">
          <label>საფოსტო ინდექსი *</label>
          <input type="text" class="border-solid border-2 rounded-md p-2" />
          <p class="text-sm"><i class="pi pi-check" /> მხოლოდ რიცხვები</p>
        </div>
        <div class="flex flex-col">
          <label>რეგიონი *</label>
          <select type="text" class="border-solid border-2 rounded-md p-3">
            <option>კახეთი</option>
          </select>
          <p class="text-sm"><i class="pi pi-check" /> მინიმუმ ორი სიმბოლო</p>
        </div>
        <div class="flex flex-col">
          <label>ქალაქი *</label>
          <select type="text" class="border-solid border-2 rounded-md p-3">
            <option>თელავი</option>
          </select>
          <p class="text-sm"><i class="pi pi-check" /> მინიმუმ ორი სიმბოლო</p>
        </div>
        <h3 class="text-lg mb-4 mt-12">ბინის დეტალები</h3>
      </div>
      <div class="grid grid-cols-2 gap-5">
        <div class="flex flex-col">
          <label>ფასი</label>
          <input type="text" class="border-solid border-2 rounded-md p-2" />
          <p class="text-sm"><i class="pi pi-check" /> მხოლოდ რიცხვები</p>
        </div>
        <div class="flex flex-col">
          <label>ფართობი</label>
          <input type="text" class="border-solid border-2 rounded-md p-2" />
          <p class="text-sm"><i class="pi pi-check" /> მხოლოდ რიცხვები</p>
        </div>
        <div class="flex flex-col">
          <label>საძინებლის რაოდენობა *</label>
          <input type="text" class="border-solid border-2 rounded-md p-2" />

          <p class="text-sm"><i class="pi pi-check" /> მხოლოდ რიცხვები</p>
        </div>
      </div>
      <h3 class="text-lg mb-4 mt-12">აღწერა *</h3>
      <textarea
        class="w-[788px] h-[135px] border-solid border-2 rounded-md"
      ></textarea>
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
      <p class="text-sm"><i class="pi pi-check" /> მინიმუმ ხუთი სიტყვა</p>
      <div class="flex justify-end gap-5">
        <button
          class="text-primary1 px-2 py-2 border-solid border-2 rounded-lg border-primary1"
        >
          გაუქმება
        </button>
        <button
          class="text-white px-2 py-2 border-solid border-2 rounded-lg bg-primary1"
        >
          დაამატე ლისტინგი
        </button>
      </div>
    </form>
  </main>
</template>
