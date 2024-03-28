<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="container__in">
      <p style="color: black;">Criar conta</p>
    </div>
  </div>
</template>

<style lang="scss">
@use "/src/styles/colors.scss" as colors;

.container {
  min-width: 90rem;
  height: 50rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.4rem rgb(239, 238, 238) solid;
  border-radius: 3rem;
  
  &__in {
    width: 70%;
    height: 100%;
    background-color: white;
    border-radius: inherit ;
    margin-left: auto;
  }
}
</style>
