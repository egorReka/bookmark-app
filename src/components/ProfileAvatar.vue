<script setup lang="ts">
import { defineProps } from 'vue'

const { name } = defineProps<{ name: string }>()
</script>

<template>
  <div class="profile-avatar">
    <img
      class="profile-avatar__img"
      src="../assets/img/avatar.png"
      width="80"
      height="80"
      :alt="`Фото ${name}`"
    />
    <p class="profile-avatar__name">Привет, {{ name }}</p>
  </div>
</template>

<style scoped>
.profile-avatar__img {
  width: 80px;
  height: 80px;
  margin-bottom: 24px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-avatar__name {
  margin: 0;
  font-size: 18px;
  letter-spacing: 0.02em;
}
</style>
