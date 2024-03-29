<script setup lang="ts">
import { ref } from "vue";
import facebook from "./img/facebookIcon.svg";
import google from "./img/googleIcon.svg";
import loginIllustration from "./img/loginIllustration.svg";
import icon from "./img/keyIcon.svg";

const $nameLabel = ref(null);
const $emailLabel = ref(null);
const $passwordLabel = ref(null);

const formRegister = ref({
  name: { value: "", isFocusing: false },
  email: { value: "", isFocusing: false },
  password: { value: "", isFocusing: false },
});

const activeLabel = (
  elementRef: any,
  value: { value: string; isFocusing: boolean }
) => {
  elementRef.classList.add("label--active");
  value.isFocusing = true;
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
          <label class="container-register__label" for="name" ref="$nameLabel"
            >Nome Completo
          </label>
          <input
            @focus="activeLabel($nameLabel, formRegister.name)"
            v-model="formRegister.name.value"
            class="container-register__input"
            :placeholder="formRegister.name.isFocusing ? '' : 'Nome completo'"
          />
          <label class="container-register__label" for="email" ref="$emailLabel"
            >E-mail</label
          >
          <input
            @focus="activeLabel($emailLabel, formRegister.email)"
            v-model="formRegister.email.value"
            name="email"
            class="container-register__input"
            :placeholder="formRegister.email.isFocusing ? '' : 'E-mail'"
          />
          <label
            class="container-register__label"
            for="password"
            ref="$passwordLabel"
            >Senha</label
          >
          <input
            @focus="activeLabel($passwordLabel, formRegister.password)"
            v-model="formRegister.password.value"
            name="password"
            class="container-register__input"
            :placeholder="formRegister.password.isFocusing ? '' : 'Senha'"
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
    margin-bottom: 5rem;
    justify-content: space-between;
  }

  &__card {
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    border: 1px solid colors.$lightGray;
    border-radius: 0.7rem;
    width: 48%;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: fonts.$bold;
    color: colors.$gray;
  }

  &__button {
    min-width: 100%;
    height: 4rem;
    background-color: rgba(74, 18, 161, 255);
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

  &__img {
    width: 35px;
    height: 35px;
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

  &__input {
    min-width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 0.05rem solid colors.$lightGray;
    box-sizing: border-box;
    margin-bottom: 1.4rem;

    font-weight: fonts.$normal;
    font-family: fonts.$mainFont;
    font-size: 1.7rem;
    color: colors.$gray;
  }
  &__input:focus {
    outline: none;
  }

  &__bottom {
    display: flex;
  }
  &__text {
    color: colors.$gray;
    &--clickable {
      color: rgba(74, 18, 161, 255);
      margin-left: 0.7rem;
      font-weight: fonts.$thin;
      cursor: pointer;
    }
  }
}

@include breakpoints.from360 {
  .container-register {
    &__in {
      &--content {
        margin: 4rem 5rem auto 5rem;
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
    }
    &__button {
      margin-top: 3rem;
    }
  }
}
</style>
