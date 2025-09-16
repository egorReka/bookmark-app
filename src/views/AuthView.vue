<script setup lang="ts">
import InputString from '@/components/InputString.vue';
import { useAuthStore } from '@/stores/auth.store';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const form = ref<{ email?: string; password?: string }>({})
const authStore = useAuthStore();
const router = useRouter();

watch(
  () => authStore.getToken,
  () => {
    if (authStore.getToken) {
      router.push({ name: 'main' })
    }
  }
)

function onSubmit(event: Event) {
  event.preventDefault();
  if (!form.value.email || !form.value.password) {
    return;
  }

  authStore.login(form.value.email, form.value.password);
  form.value = {};
}
</script>

<template>
  <div class="auth">
    <h1 class="auth__title">Bookmarkly</h1>
    <form class="auth__form" action="" @submit="onSubmit">
      <InputString v-model="form.email" placeholder="Email" />
      <InputString v-model="form.password" type="password" placeholder="Пароль" />
      <button class="auth__button" type="submit">Вход</button>

    </form>
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

.auth__form {
  display: grid;
  row-gap: 45px;
}

.auth__button {
  display: block;
  min-width: 158px;
  padding: 15px;
  margin: 0 auto;
  border-radius: 40px;
  border: none;
  background-color: var(--color-nero);
  color: var(--color-default-white);
  cursor: pointer;
}
</style>
