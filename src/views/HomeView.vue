<template>
  <div>
    <SearchBar @change-filter-text="setFilterText" />
    <div class="flex">
      <FiltersComponent
        v-model:jobType="isFullTime"
        v-model:location="location"
      />
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
import SearchBar from "../components/SearchBar.vue";
import FiltersComponent from "../components/FiltersComponent.vue";
import JobsList from "../components/JobsList.vue";
import PaginationBar from "../components/PaginationBar.vue";

import offers from "../data/jobOffers.json";

const filterText = ref("");
const location = ref("");
const isFullTime = ref(false);

const currentPage = ref(1);
const offersPerPage = 10;

const jobOffersToShow = computed(() => {
  return filteredOffers.value.slice(
    offersPerPage * (currentPage.value - 1),
    offersPerPage * currentPage.value
  );
});

const filteredOffers = computed(() => {
  let finalOffers = offers;
  //if search input is empty, return all offers
  if (!filterText.value.length && !location.value && !isFullTime.value)
    return finalOffers;

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
  return [...new Set(filteredByTitle.concat(filteredByCompany))];
});

watch([isFullTime, location], () => {
  currentPage.value = 1;
});

const numberOfPages = computed(() =>
  Math.ceil(filteredOffers.value.length / offersPerPage)
);

function setFilterText(value) {
  filterText.value = value;
}

// change page on pagination button click
function setPage(value) {
  if (value === "nextPage") {
    if (currentPage.value < numberOfPages.value) currentPage.value += 1;
  } else if (value === "prevPage") {
    if (currentPage.value > 1) currentPage.value -= 1;
  } else {
    currentPage.value = parseInt(value);
  }
}
</script>
