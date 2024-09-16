<script setup></script>

<template>
  <main class="px-28">
    <section class="flex items-center gap-10">
      <div class="relative">
        <RouterLink to="/"
          ><i class="pi pi-arrow-left text-2xl mb-5"
        /></RouterLink>
        <span
          class="absolute z-10 top-20 left-12 rounded-3xl px-4 py-2 bg-bgColor text-white"
          >იყიდება</span
        >
        <img src="../assets/imgs/image.png" width="839px" height="670px" />
        <p class="text-right text-primary2 mt-1">
          გამოქვეყნების თარიღი 08/08/24
        </p>
      </div>
      <div class="flex flex-col gap-9">
        <div class="flex flex-col gap-4">
          <p class="text-5xl">80,459$</p>
          <p class="text-2xl text-primary2">თბილისი, ი. ჭავჭავაძის 53</p>
          <p class="text-2xl text-primary2">ფართი 55 მ</p>
          <p class="text-2xl text-primary2">საძინებელი 2</p>
          <p class="text-2xl text-primary2">საფოსტო ინდექსი 2525</p>
        </div>

        <p class="text-lg w-[503px] h-[78px] text-primary2">
          იყიდება ბინა ჭავჭავაძის ქუჩაზე, ვაკეში. ბინა არის ახალი რემონტით, ორი
          საძინებლითა და დიდი აივნებით. მოწყობილია ავეჯითა და ტექნიკით.
        </p>
        <div
          class="border-solid border-2 border-borderColor rounded-lg w-[503px] h-[174px]"
        >
          <div class="flex justify-start items-center gap-4 p-2">
            <i
              class="pi pi-user text-6xl border-solid border-2 p-4 rounded-full"
            />
            <div class="flex flex-col">
              <p class="text-base">სოფიო გელოვანი</p>
              <p class="text-primary2">აგენტი</p>
            </div>
          </div>
          <div class="ml-4">
            <p class="text-primary2 text-lg">
              <i class="pi pi-envelope" />
              sophio.gelovani@redberry.ge
            </p>
            <p class="text-primary2"><i class="pi pi-phone" /> 577 777 777</p>
          </div>
          <button
            class="border-solid border-2 rounded-lg px-3 py-2 mt-6 text-buttonColor border-buttonColor"
          >
            ლისტინგის წაშლა
          </button>
        </div>
      </div>
    </section>
  </main>
</template>
