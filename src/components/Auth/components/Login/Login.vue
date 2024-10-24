<script setup lang="ts">
import MainContent from "../../../MainContent/MainContent.vue";
import keyIcon from "../../img/keyIcon.svg";
import loginIllustration from "../../img/loginIllustration.svg";
import googleIcon from "../../img/googleIcon.svg";
</script>

<template>
  <MainContent>
    <template #register-out>
      <img :src="keyIcon" class="container-register__img-key" alt="key icon" />
      <img
        :src="loginIllustration"
        class="container-register__img-illustration"
        alt="login illustration"
      />
    </template>
    <template #register-in>
      <div class="container-register__in--content">
        <h2 class="container-register__title">Entrar</h2>
        <div class="container-register__card-group">
          <Card
            :style="{ width: '100%' }"
            :src="googleIcon"
            alt="Google Icon"
            text="Entrar com google"
          />
        </div>
        <div class="container-register__input-group">
          <Input
            label="Nome"
            placeholder="Nome"
            style="margin-top: 1rem"
            id="name"
          />
          <Input
            label="Email"
            placeholder="Email"
            style="margin-top: 1rem"
            id="email"
          />

          <Input
            label="Senha"
            placeholder="Senha"
            style="margin-top: 1rem"
            id="password"
            type="password"
          />
        </div>
        <button class="container-register__button">Entrar</button>
        <div class="container-register__bottom">
          <p class="container-register__text">Não possui uma conta?</p>
          <p class="container-register__text--clickable">Criar</p>
        </div>
      </div>
    </template>
  </MainContent>
</template>

<style lang="scss">
@use "/src/styles/colors.scss" as colors;
@use "/src/styles/fonts.scss" as fonts;
@use "/src/styles/breakpoints.scss" as breakpoints;

.container-register {
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
