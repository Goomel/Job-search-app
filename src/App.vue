<template>
  <div>
    <div class="w-10/12 mx-auto">
      <PageHeader />
      <RouterView :key="$route.path" />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import PageHeader from "./components/PageHeader.vue";
</script>
