<template>
  <div class="home">
    <SearchBar />
    <FiltersComponent />
    <JobsList :jobOffers="jobOffersToShow" />
    <PaginationBar />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import SearchBar from "../components/SearchBar.vue";
import FiltersComponent from "../components/FiltersComponent.vue";
import JobsList from "../components/JobsList.vue";
import PaginationBar from "../components/PaginationBar.vue";

import offers from "../data/jobOffers.json";
const offersPerPage = 10;
const currentPage = ref(1);
const jobOffersToShow = computed(() => {
  return offers.slice(
    offersPerPage * (currentPage.value - 1),
    offersPerPage * currentPage.value
  );
});
</script>

<style lang="scss" scoped></style>
