<template>
  <div>
    <SearchBar />
    <div class="flex">
      <FiltersComponent />
      <JobsList :job-offers="jobOffersToShow" />
    </div>
    <PaginationBar
      :number-of-pages="numberOfPages"
      :current-page="parseInt(currentPage)"
      @change-page="setPage"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import SearchBar from "../components/SearchBar.vue";
import FiltersComponent from "../components/FiltersComponent.vue";
import JobsList from "../components/JobsList.vue";
import PaginationBar from "../components/PaginationBar.vue";

import offers from "../data/jobOffers.json";

const router = useRouter();
const route = useRoute();
const currentPage = ref(route.params.id);
const offersPerPage = 10;

const jobOffersToShow = computed(() => {
  return offers.slice(
    offersPerPage * (currentPage.value - 1),
    offersPerPage * currentPage.value
  );
});
const numberOfPages = offers.length / offersPerPage;

function setPage(value) {
  console.log(value, typeof value);
  if (value === "nextPage") {
    if (currentPage.value < numberOfPages) currentPage.value += 1;
  } else if (value === "prevPage") {
    if (currentPage.value > 1) currentPage.value -= 1;
  } else {
    currentPage.value = parseInt(value);
  }
}
watch(currentPage, (newPage) => {
  router.push({ name: "offers", params: { id: newPage } });
});
</script>
