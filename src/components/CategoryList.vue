<script setup lang="ts">
import { useCategoriesStore } from '@/stores/categories.store';
import { onMounted } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import IconPlus from '@/icons/iconPlus.vue';

const store = useCategoriesStore();

onMounted(() => {
  store.fetchCategories();
})

</script>

<template>
  <ul class="category__list">
    <li class="category__item" v-for="category in store.categories" :key="category.id">
      <RouterLink class="category__link" :to="`/main/${category.alias}`">{{ category.name }}</RouterLink>
    </li>
    <li class="category__item">
      <ButtonIcon @click="() => store.createCategory({ name: 'Новая категория' })">
        <IconPlus />
      </ButtonIcon>
    </li>
  </ul>
</template>

<style scoped>
.category__list {
  display: flex;
  flex-direction: column;
  gap: 34px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.category__link {
  display: block;
  letter-spacing: 0.02em;
  transform-origin: left;
  transition: transform 0.2s, font-weight 0.2s;
}

.category__link:hover {
  font-weight: 700;
  transform: scale(1.7);
}
</style>
