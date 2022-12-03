<template>
  <div class="search">
    <form class="search__form">
      <img
        src="../assets/images/briefcase.svg"
        alt="briefcase"
        class="search__icon"
      />
      <input
        class="search__input"
        type="search"
        placeholder="Title, companies, expertise or benefits"
      />
      <SubmitButton title="Search" />
    </form>
  </div>
</template>

<script setup>
import SubmitButton from "../components/SubmitButton.vue";
</script>

<style lang="scss" scoped></style>
