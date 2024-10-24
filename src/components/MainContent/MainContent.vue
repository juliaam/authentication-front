<script setup lang="ts"></script>

<template>
  <div class="container-register">
    <div class="container-register__out">
      <slot name="register-out"></slot>
    </div>
    <div class="container-register__in">
      <slot name="register-in"></slot>
    </div>
  </div>
</template>

<style lang="scss">
@use "/src/styles/colors.scss" as colors;
@use "/src/styles/fonts.scss" as fonts;
@use "/src/styles/breakpoints.scss" as breakpoints;

.container-register {
  display: flex;
  justify-content: center;
  align-items: center;

  &__out {
    display: none;
  }

  &__in {
    height: 100%;
    border-radius: 2rem;
    background-color: white;

    &--content {
      display: flex;
      flex-direction: column;
      color: colors.$lightGray;
      margin: 2rem;
    }
  }
  &__bottom {
    display: flex;
  }
}

@include breakpoints.from360 {
  .container-register {
    &__in {
      &--content {
        display: flex;

        gap: 0.6rem;

        padding: 4rem;
      }
    }
    &__button {
      margin-top: 45%;
    }
  }
}

@include breakpoints.from667 {
  .container-register {
    &__button {
      margin-top: 30%;
    }
  }
}

@include breakpoints.from1024 {
  .container-register {
    min-width: 95rem;
    height: 60rem;
    border: 0.3rem rgb(239, 238, 238) solid;
    border-radius: 3rem;

    &__in {
      height: 100%;
      width: 60%;
    }
  }
}
</style>
