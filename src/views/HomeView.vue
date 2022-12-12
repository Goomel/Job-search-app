<template>
  <div>
    <SearchBar @change-filter-text="setFilterText" />
    <div class="flex">
      <FiltersComponent
        v-model:jobType="isFullTime"
        v-model:location="location"
      />
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
const location = ref("");
const isFullTime = ref(false);

const currentPage = ref(route.params.id);
const offersPerPage = 10;
const numberOfPages = offers.length / offersPerPage;

const jobOffersToShow = computed(() => {
  return offers.slice(
    offersPerPage * (currentPage.value - 1),
    offersPerPage * currentPage.value
  );
});

const filteredOffers = computed(() => {
  //if search input is empty, return all offers
  if (!filterText.value.length && !location.value && !isFullTime.value)
    return jobOffersToShow.value;

  let finalOffers = offers;

  //filtering by type of job and location
  if (isFullTime.value) {
    finalOffers = offers.filter((offer) => offer.type === "Full Time");
  }
  if (location.value) {
    finalOffers = finalOffers.filter((offer) =>
      offer.location.toLowerCase().includes(location.value.toLowerCase())
    );
  }

  //filtering by title and company
  let filteredByTitle = finalOffers.filter((offer) =>
    offer.title.toLowerCase().includes(filterText.value.toLowerCase())
  );
  let filteredByCompany = finalOffers.filter((offer) =>
    offer.company.toLowerCase().includes(filterText.value.toLowerCase())
  );

  //offers filtered by title and filtered by company added to Set, to avoid duplicate
  let currentOffers = [...new Set(filteredByTitle.concat(filteredByCompany))];
  return currentOffers.slice(
    offersPerPage * (currentPage.value - 1),
    offersPerPage * currentPage.value
  );
});

function setFilterText(value) {
  filterText.value = value;
}

function setPage(value) {
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
