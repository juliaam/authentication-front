<script setup lang="ts">
import { watch, ref } from "vue";
import facebook from "./img/facebookIcon.svg";
import google from "./img/googleIcon.svg";

const $nameInput = ref(null);
const $emailInput = ref(null);
const $passwordInput = ref(null);

const formRegister = ref({
  name: { value: "", ref: "$nameInput" },
  email: { value: "", ref: "$emailInput" },
  password: { value: "", ref: "$passwordInput" }
});

watch(
  () => [$nameInput, $emailInput, $passwordInput],
  () => {
    console.log(formRegister.value.name);
  },
  { deep: true }
);
</script>

<template>
  <div class="container-register">
    <div class="container-register__in">
      <div class="container-register__in--content">
        <h2 class="container-register__title">Criar conta</h2>
        <div class="container-register__card-group">
          <div class="container-register__card">
            <img
              class="container-register__img"
              :src="google"
              alt="google icon"
            />
            <p class="container-register__card--text">Acessar com google</p>
          </div>
          <div class="container-register__card">
            <img
              class="container-register__img"
              :src="facebook"
              alt="facebook icon"
            />
            <p class="container-register__card--text">Acessar com Facebook</p>
          </div>
        </div>
        <div class="container-register__input-group">
          <label class="container-register__label" for="name"
            >Nome Completo</label
          >
          <input
            ref="$nameInput"
            v-model="formRegister.email.value"
            class="container-register__input"
            placeholder="Nome Completo"
          />
          <label class="container-register__label" for="email">E-mail</label>
          <input
            ref="$emailInput"
            v-model="formRegister.email.value"
            name="email"
            class="container-register__input"
            placeholder="E-mail"
          />
          <label class="container-register__label" for="password">Senha</label>
          <input
            ref="$passwordInput"
            v-model="formRegister.password.value"
            name="password"
            class="container-register__input"
            placeholder="Senha"
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

.container-register {
  min-width: 95rem;
  height: 60rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.3rem rgb(239, 238, 238) solid;
  border-radius: 3rem;

  &__in {
    width: 60%;
    height: 100%;
    border-radius: 2rem;
    background-color: white;
    margin-left: auto;

    &--content {
      display: flex;
      flex-direction: column;
      color: colors.$gray;
      margin: 8rem 10rem auto 10rem;
    }
  }
  &__title {
    color: black;
  }

  &__card-group {
    display: flex;
    margin-bottom: 5rem;
    justify-content: space-between;
  }

  &__card {
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    border: 1px solid colors.$gray;
    border-radius: 0.7rem;
    width: 48%;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
  
    cursor: pointer;

    font-size: 1.2rem;

    &--text {
      margin-left: 0.5rem;
    }
  }

  &__button {
    min-width: 100%;
    height: 4rem;
    margin-top: 1rem;
    background-color: rgba(74, 18, 161, 255);
    color: whitesmoke;
    border: none;
    border-radius: 0.5rem;

    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: fonts.$semiBold;
    font-family: fonts.$mainFont;

    cursor: pointer;
  }

  &__img {
    width: 35px;
    height: 35px;
  }

  &__input {
    min-width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 0.05rem solid colors.$gray;
    box-sizing: border-box;
    margin-bottom: 1rem;

    font-family: fonts.$mainFont;
    font-size: 1.7rem;
    color: rgb(56, 55, 55);
  }
  &__input:focus {
    outline: none;
    color: rgb(59, 59, 59);
  }

  &__bottom {
    display: flex;
  }
  &__text {
    &--clickable {
      color: rgba(74, 18, 161, 255);
      margin-left: 0.7rem;
      font-weight: fonts.$thin;
      cursor: pointer;
    }
  }
  &__label {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &__label {
    &--active {
      opacity: 1;
    }
  }
}
</style>
