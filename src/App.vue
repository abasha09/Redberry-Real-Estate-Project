<script setup>
import { RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <RouterView />
</template>
