<script lang="ts">
import MainContent from "../MainContent/MainContent.vue";
</script>

<template>
  <MainContent>
    <template #register-out>
      <img :src="icon" class="container-register__img-key" alt="key icon" />
      <img
        :src="loginIllustration"
        class="container-register__img-illustration"
        alt="login illustration"
      />
    </template>
    <template #register-in>
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
            id="name"
          />
          <Input
            label="Email"
            v-model="form.email"
            placeholder="Email"
            style="margin-top: 1rem"
            id="email"
          />

          <Input
            label="Senha"
            v-model="form.password"
            placeholder="Senha"
            style="margin-top: 1rem"
            id="password"
            type="password"
          />
        </div>
        <button class="container-register__button" @click="createAccount(form)">
          Logar
        </button>
        <div class="container-register__bottom">
          <p class="container-register__text">Já tem uma conta?</p>
          <p class="container-register__text--clickable">Acessar</p>
        </div>
      </div>
    </template>
  </MainContent>
</template>

<style lang="scss"></style>
