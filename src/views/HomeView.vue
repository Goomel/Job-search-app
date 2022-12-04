<template>
  <div class="home">
    <SearchBar />
    <FiltersComponent />
    <JobsList />
    <PaginationBar />
  </div>
</template>

<script setup>
import SearchBar from "../components/SearchBar.vue";
import FiltersComponent from "../components/FiltersComponent.vue";
import JobsList from "../components/JobsList.vue";
import PaginationBar from "../components/PaginationBar.vue";
</script>

<style lang="scss" scoped></style>
