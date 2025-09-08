<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToMain() {
  router.push(
    { name: 'main' }
  );
}
</script>

<template>
  <div class="auth">
    <h1 class="auth__title">Bookmarkly</h1>
    <button class="auth__button" type="button" @click="redirectToMain">Вход</button>
  </div>

</template>

<style scope>
.auth {
  display: grid;
  place-content: center;
  height: 100vh;
}

.auth__title {
  margin: 0 0 52px;
  font-weight: 700;
  font-size: 52px;
  letter-spacing: 0.02em;
  color: var(--color-nero);
}

.auth__button {
  display: block;
  min-width: 158px;
  padding: 10px;
  margin: 0 auto;
  border-radius: 40px;
  border: none;
  background-color: var(--color-nero);
  color: var(--color-default-white);
  cursor: pointer;
}
</style>
