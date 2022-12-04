<template>
  <div class="jobs__list" v-for="job in props.jobOffers" :key="job.id">
    <JobItem :job="job" />
  </div>
</template>

<script setup>
import JobItem from "./JobItem.vue";

const props = defineProps({
  jobOffers: { type: Array, required: true },
});
</script>

<style lang="scss" scoped></style>
