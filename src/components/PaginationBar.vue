<template>
  <div class="pagination">
    <div class="pagination__arrow-left">&lt;</div>
    <div
      class="pagination__numbers"
      v-for="index in props.numberOfPages"
      :key="index"
    >
      <div class="pagination__item">{{ index }}</div>
    </div>
    <div class="pagination__arrow-left">></div>
  </div>
</template>

<script setup>
const props = defineProps({
  numberOfPages: Number,
});
</script>

<style lang="scss" scoped></style>
