<template>
  <PageHeader />
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import PageHeader from "./components/PageHeader.vue";
</script>
