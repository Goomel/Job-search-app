<template>
  <router-link :to="'/job/' + id">
    <div
      class="min-h-28 flex my-8 p-3 bg-white shadow rounded-md text-main-blue"
    >
      <div class="w-90 h-90 mr-5 flex items-center">
        <img
          :src="company_logo"
          :alt="company + ' logo'"
          class="w-full h-fit object-contain rounded"
        />
      </div>
      <div class="flex w-full">
        <div class="flex flex-1 flex-col justify-between text-xs">
          <p class="font-bold">
            {{ company }}
          </p>
          <p class="text-lg">
            {{ title }}
          </p>
          <p
            class="w-fit px-2 py-1.5 font-bold border border-solid border-main-blue rounded"
          >
            {{ type }}
          </p>
        </div>
        <div class="flex flex-1 items-end justify-end text-xs text-gray-400">
          <p class="flex">
            <img
              src="../assets/images/world.svg"
              alt="world icon"
              class="px-2 w-8"
            />
            {{ location }}
          </p>
          <p class="flex">
            <img
              src="../assets/images/clock.svg"
              alt="clock icon"
              class="px-2 w-8"
            />
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
