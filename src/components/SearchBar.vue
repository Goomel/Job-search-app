<template>
  <div
    class="bg-search-bg bg-cover h-36 flex items-center justify-center rounded-lg"
  >
    <form
      class="w-5/6 lg:w-4/6 text-sm h-14 p-0.5 bg-white flex rounded-md shadow-md"
    >
      <img
        src="../assets/images/briefcase.svg"
        alt="briefcase"
        class="pl-2 pr-1 w-7 lg:pl-4 lg:pr-1 lg:w-10"
      />
      <input
        class="grow min-w-0 text-sm px-3"
        type="search"
        placeholder="Title, companies, expertise or benefits"
        @input="$emit('changeFilterText', $event.target.value)"
      />
      <SubmitButton title="Search" />
    </form>
  </div>
</template>

<script setup>
import SubmitButton from "../components/SubmitButton.vue";
</script>
