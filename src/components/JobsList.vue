<template>
  <div class="jobs__list" v-for="job in props.jobOffers" :key="job.id">
    <JobItem
      :logo="job.company_logo"
      :company="job.company"
      :title="job.title"
      :type="job.type"
      :location="job.location"
      :date="job.created_at"
    />
  </div>
</template>

<script setup>
import JobItem from "./JobItem.vue";

const props = defineProps({
  jobOffers: { type: Array, required: true },
});
</script>

<style lang="scss" scoped></style>
