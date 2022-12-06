<template>
  <div></div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const id = ref(route.params.id);
console.log(id.value);
</script>
