<template>
  <div class="bg-neutral-100">
    <div class="w-10/12 mx-auto">
      <PageHeader />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import PageHeader from "./components/PageHeader.vue";
</script>
