<template>
  <div
    class="flex space-x-3 justify-center lg:justify-end mb-20 text-xs text-darker-grey font-semibold"
  >
    <button
      class="border-2 w-9 h-9 border-darker-grey rounded-md flex justify-center items-center cursor-pointer hover:text-link-blue hover:border-link-blue"
      @click="$emit('changePage', 'prevPage')"
    >
      &lt;
    </button>
    <div v-for="index in props.numberOfPages" :key="index">
      <button
        class="border-2 w-9 h-9 border-darker-grey rounded-md flex justify-center items-center cursor-pointer hover:text-link-blue hover:border-link-blue"
        :class="{ active: index === props.currentPage }"
        @click="$emit('changePage', index)"
      >
        {{ index }}
      </button>
    </div>
    <button
      class="border-2 w-9 h-9 border-darker-grey rounded-md flex justify-center items-center cursor-pointer hover:text-link-blue hover:border-link-blue"
      @click="$emit('changePage', 'nextPage')"
    >
      >
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  numberOfPages: Number,
  currentPage: Number,
});
</script>
