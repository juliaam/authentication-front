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

.card {
  max-height: 5rem;

  font-size: 1.2rem;
  font-weight: fonts.$bold;
  color: colors.$gray;

  display: flex;

  gap: 12rem;

  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  padding-inline: 1rem;
  align-items: center;

  border: 1px solid colors.$gray;
  border-radius: 0.7rem;

  cursor: pointer;

  &__img {
    max-width: 35px;
    max-height: 35px;
  }
}
</style>
