<script setup lang="ts">
import { StyleValue } from "vue";

defineProps<{
  src: string;
  alt: string;
  text: string;
  style: StyleValue;
}>();
</script>

<template>
  <div class="card" :style="style">
    <img class="card__img" :src="src" :alt="alt" />
    <div class="card__text">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@use "/src/styles/colors.scss" as colors;
@use "/src/styles/fonts.scss" as fonts;
@use "/src/styles/breakpoints.scss" as breakpoints;

.card {
  font-size: 1.2rem;
  font-weight: fonts.$bold;
  color: colors.$gray;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  padding: 0.5rem 2rem;

  border: 1px solid colors.$gray;
  border-radius: 0.7rem;

  cursor: pointer;

  &__img {
    max-width: 35px;
    max-height: 35px;
  }

  &__text {
    font-size: 1.2rem;
  }
}

@include breakpoints.from667 {
  .card {
    gap: 3rem;

    &__text {
      font-size: 1.4rem;
    }
  }
}
</style>
