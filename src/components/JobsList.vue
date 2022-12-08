<template>
  <div class="grow">
    <JobItem v-for="job in props.jobOffers" :key="job.id" :job="job" />
  </div>
</template>

<script setup>
import JobItem from "./JobItem.vue";

const props = defineProps({
  jobOffers: { type: Array, required: true },
});
</script>
