<template>
  <button type="submit" class="bg-blue-500 text-white px-6 lg:px-12 rounded-lg">
    {{ props.title }}
  </button>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style lang="scss" scoped></style>
