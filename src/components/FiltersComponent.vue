<template>
  <div class="lg:w-1/3 lg:p-8 pl-0 text-main-blue text-sm font-semibold">
    <div class="my-7 lg:ml-2 lg:mt-0 lg:mb-7 flex items-center">
      <input
        type="checkbox"
        class="w-4 h-4"
        name="full-time"
        id="full-time"
        @change="$emit('update:jobType', $event.target.checked)"
      />
      <label for="full-time__label" class="ml-2.5">Full time</label>
    </div>
    <p class="uppercase my-3 text-gray-400 font-bold tracking-wide">location</p>
    <div class="flex no-wrap p-1 bg-white rounded shadow-md">
      <img
        src="../assets/images/world.svg"
        alt="world-icon"
        class="px-3 w-10"
      />
      <input
        type="text"
        placeholder="City, state, zip code or country"
        class="min-w-0 grow px-1 py-3 font-normal"
        v-model="location"
        @input="$emit('update:location', location)"
      />
    </div>
    <div class="flex flex-col mt-5">
      <div class="p-2.5 flex items-center">
        <input
          type="radio"
          name="London"
          id="london"
          class="w-4 h-4"
          value="London"
          v-model="location"
          @change="$emit('update:location', location)"
        />
        <label for="london" class="ml-2.5">London</label>
      </div>
      <div class="p-2.5 flex items-center">
        <input
          type="radio"
          name="Amsterdam"
          id="amsterdam"
          class="w-4 h-4"
          value="Amsterdam"
          v-model="location"
          @change="$emit('update:location', location)"
        />
        <label for="amsterdam" class="ml-2.5">Amsterdam</label>
      </div>
      <div class="p-2.5 flex items-center">
        <input
          type="radio"
          name="New york"
          id="new-york"
          class="w-4 h-4"
          value="New york"
          v-model="location"
          @change="$emit('update:location', location)"
        />
        <label for="new-york" class="ml-2.5">New York</label>
      </div>
      <div class="p-2.5 flex items-center">
        <input
          type="radio"
          name="Berlin"
          id="berlin"
          class="w-4 h-4"
          value="Berlin"
          v-model="location"
          @change="$emit('update:location', location)"
        />
        <label for="berlin" class="ml-2.5">Berlin</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const location = ref("");
</script>
