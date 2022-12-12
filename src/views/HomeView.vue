<template>
  <div>
    <SearchBar @change-filter-text="setFilterText" />
    <div class="flex">
      <FiltersComponent />
      <JobsList :job-offers="filteredOffers" />
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

const filterText = ref("");

const currentPage = ref(route.params.id);
const offersPerPage = 10;

const jobOffersToShow = computed(() => {
  return offers.slice(
    offersPerPage * (currentPage.value - 1),
    offersPerPage * currentPage.value
  );
});

const filteredOffers = computed(() => {
  //if search input is empty, return all offers
  if (!filterText.value.length) return jobOffersToShow.value;
  //filtering by title and company
  let filteredByTitle = offers.filter((offer) =>
    offer.title.toLowerCase().includes(filterText.value.toLowerCase())
  );
  let filteredByCompany = offers.filter((offer) =>
    offer.company.toLowerCase().includes(filterText.value.toLowerCase())
  );

  //offers filtered by title and filtered by company added to Set, to avoid duplicate
  let currentOffers = [...new Set(filteredByTitle.concat(filteredByCompany))];
  return currentOffers.slice(
    offersPerPage * (currentPage.value - 1),
    offersPerPage * currentPage.value
  );
});
const numberOfPages = offers.length / offersPerPage;

function setFilterText(value) {
  filterText.value = value;
}

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
