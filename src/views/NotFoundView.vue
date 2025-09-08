<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToMain() {
  router.push('/main');
}
</script>

<template>
  <div class="not-found">
    <h1 class="not-found__title">404</h1>
    <button class="not-found__button" type="button" @click="redirectToMain">На главную</button>
  </div>

</template>

<style scope>
.not-found {
  display: grid;
  place-content: center;
  height: 100vh;
}

.not-found__title {
  margin: 0 0 52px;
  font-weight: 700;
  font-size: 128px;
  letter-spacing: 0.02em;
  color: var(--color-nero);
}

.not-found__button {
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
