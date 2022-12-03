<template>
  <div class="filters">
    <div class="full-time__container">
      <input
        type="checkbox"
        class="full-time__checkbox"
        name="full-time"
        id="full-time"
      />
      <label for="full-time__label">Full time</label>
    </div>
    <div class="location__container">
      <div class="location__search">
        <img
          src="../assets/images/world.svg"
          alt="world"
          class="location__search-icon"
        />
        <input
          type="text"
          placeholder="City, state, zip code or country"
          class="location__search-input"
        />
      </div>
      <div class="location__cities-container">
        <input
          type="checkbox"
          name="London"
          id="london"
          class="location__checkbox"
        />
        <label for="london" class="location__input">London</label>
        <input
          type="checkbox"
          name="Amsterdam"
          id="amsterdam"
          class="location__checkbox"
        />
        <label for="amsterdam" class="location__input">Amsterdam</label>
        <input
          type="checkbox"
          name="New york"
          id="new-york"
          class="location__checkbox"
        />
        <label for="new-york" class="location__input">New York</label>
        <input
          type="checkbox"
          name="Berlin"
          id="berlin"
          class="location__checkbox"
        />
        <label for="berlin" class="location__input">Berlin</label>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
