<template>
  <button type="submit">
    {{ props.title }}
  </button>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style lang="scss" scoped></style>
