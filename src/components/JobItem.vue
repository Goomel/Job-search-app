<template>
  <router-link :to="'/job/' + id">
    <div class="job-offer">
      <div class="job-offer__logo">
        <img :src="company_logo" :alt="company + ' logo'" />
      </div>
      <div class="job-offer__info">
        <p class="job-offer__company">
          {{ company }}
        </p>
        <p class="job-offer__title">
          {{ title }}
        </p>
        <p class="job-offer__type">
          {{ type }}
        </p>
        <div class="job-offer__details">
          <p class="job-offer__location">
            {{ location }}
          </p>
          <p class="job-offer__date">
            {{ created_at }}
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  job: Object,
});
const { company, company_logo, title, location, type, created_at, id } =
  props.job;
</script>

<style lang="scss" scoped></style>
