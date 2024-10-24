<script setup lang="ts">
import { ref, computed, Ref } from "vue";

import Register from "./components/Auth/components/Register/Register.vue";
import Login from "./components/Auth/components/Login/Login.vue";
import NotFound from "./components/NotFound/NotFound.vue";

type RoutePaths = "/" | "/register" | "/login";

const routes: Record<RoutePaths, any> = {
  "/": Login,
  "/register": Register,
  "/login": Login,
};

const currentPath: Ref<string> = ref(window.location.pathname);

const currentView = computed(() => {
  return routes[currentPath.value as RoutePaths] || NotFound;
});
</script>

<template>
  <component :is="currentView" />
</template>

<style scoped></style>
