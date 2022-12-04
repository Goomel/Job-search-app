<template>
  <div class="job-offer">
    <div class="job-offer__logo">
      <img :src="props.logo" alt="" />
    </div>
    <div class="job-offer__info">
      <p class="job-offer__company">
        {{ props.company }}
      </p>
      <p class="job-offer__title">
        {{ props.title }}
      </p>
      <p class="job-offer__type">
        {{ props.type }}
      </p>
      <div class="job-offer__details">
        <p class="job-offer__location">
          {{ props.location }}
        </p>
        <p class="job-offer__date">
          {{ props.date }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  logo: String,
  company: String,
  title: String,
  type: String,
  location: String,
  date: String,
});
</script>

<style lang="scss" scoped></style>
