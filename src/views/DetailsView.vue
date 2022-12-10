<template>
  <div class="flex text-main-blue mb-36">
    <div class="w-1/4 shrink-0 font-semibold">
      <div
        class="flex items-center text-link-blue cursor-pointer"
        @click="$router.go(-1)"
      >
        <img
          src="../assets/images/arrow-left.svg"
          alt="arrow"
          class="w-10 p-2"
        />
        <p>Back to search</p>
      </div>
      <p class="uppercase mt-9 mb-4 text-gray-400 font-bold tracking-wide">
        How to apply
      </p>
      <div class="how-to-apply break-words" v-html="how_to_apply"></div>
    </div>
    <div class="grow pl-20">
      <div class="flex">
        <h1 class="font-bold text-2xl mr-4 mb-2.5">{{ title }}</h1>
        <p
          class="w-fit h-fit px-2 py-1.5 font-bold border border-solid border-main-blue rounded text-xs"
        >
          {{ type }}
        </p>
      </div>
      <div class="flex">
        <img
          src="../assets/images/clock.svg"
          alt="clock icon"
          class="px-2 w-8"
        />
        <p class="text-gray-400">
          {{ created_at }}
        </p>
      </div>
      <div class="flex my-8">
        <div
          class="w-11 h-11 mr-5 flex items-center bg-white rounded shadow-md"
        >
          <img
            :src="company_logo"
            :alt="company + ' logo'"
            class="w-full h-fit object-contain rounded"
          />
        </div>
        <div>
          <p class="font-bold">
            {{ company }}
          </p>
          <p class="text-gray-400">{{ location }}</p>
        </div>
      </div>
      <div class="description flex flex-col gap-y-2" v-html="description"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import offers from "../data/jobOffers.json";

const route = useRoute();
const id = ref(route.params.id);
const singleOffer = offers.find((offer) => offer.id === id.value);
const {
  title,
  how_to_apply,
  type,
  description,
  created_at,
  company,
  company_logo,
  location,
} = singleOffer;
</script>
