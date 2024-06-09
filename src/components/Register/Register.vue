<script setup lang="ts">
import google from "./img/googleIcon.svg";
import loginIllustration from "./img/loginIllustration.svg";
import icon from "./img/keyIcon.svg";
import Card from "./Card.vue";
import Input from "../Input.vue";

const form = {
  name: "",
  email: "",
  password: "",
};
</script>

<template>
  <div class="container-register">
    <div class="container-register__out">
      <img :src="icon" class="container-register__img-key" alt="key icon" />
      <img
        :src="loginIllustration"
        class="container-register__img-illustration"
        alt="login illustration"
      />
    </div>
    <div class="container-register__in">
      <div class="container-register__in--content">
        <h2 class="container-register__title">Criar conta</h2>
        <div class="container-register__card-group">
          <Card
            :style="{ width: '100%' }"
            :src="google"
            alt="Google Icon"
            text="Registrar com google"
          />
        </div>
        <div class="container-register__input-group">
          <Input
            label="Nome"
            v-model="form.name"
            placeholder="Nome"
            style="margin-top: 1rem"
          />
          <Input
            label="Email"
            v-model="form.email"
            placeholder="Email"
            style="margin-top: 1rem"
          />

          <Input
            label="Senha"
            v-model="form.password"
            placeholder="Senha"
            style="margin-top: 1rem"
          />
        </div>
        <button class="container-register__button">Criar conta</button>
        <div class="container-register__bottom">
          <p class="container-register__text">Já tem uma conta?</p>
          <p class="container-register__text--clickable">Acessar</p>
        </div>
      </div>
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
  height: 100vh;

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

  &__img-key {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    width: 36px;
    height: 36px;
  }

  &__title {
    color: black;
  }

  &__card-group {
    display: flex;

    justify-content: end;
  }

  &__button {
    min-width: 100%;
    height: 4rem;
    background-color: colors.$primary;
    color: whitesmoke;
    border: none;
    border-radius: 0.5rem;
    margin-top: 80%;

    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: fonts.$semiBold;
    font-family: fonts.$mainFont;
    cursor: pointer;
  }

  &__label {
    margin-bottom: 0.5rem;
    display: inline-block;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s ease, transform 0.5s;

    color: rgb(104, 101, 101);
    font-weight: fonts.$normal;
  }

  .label--active {
    opacity: 1;
    transform: translateY(0);
  }

  &__bottom {
    display: flex;
  }
  &__text {
    color: colors.$gray;

    display: flex;
    justify-content: center;

    &--clickable {
      color: colors.$black;
      font-weight: fonts.$semiBold;

      margin-left: 0.7rem;

      cursor: pointer;
    }
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

    &__out {
      min-width: 40%;
      height: 100%;

      display: block !important;
    }

    &--content {
      display: flex;
      flex-direction: column;
      color: colors.$lightGray;
      margin: 8rem 10rem auto 10rem;
    }

    &__in {
      height: 100%;
      width: 60%;
    }

    &__button {
      margin-top: 1rem;
    }
  }
}
</style>
