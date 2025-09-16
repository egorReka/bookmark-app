<script setup lang="ts">
import IconBasket from '@/icons/IconBasket.vue'
import ButtonIcon from './ButtonIcon.vue'
import IconPencil from '@/icons/IconPencil.vue'
import InputString from './InputString.vue'
import { ref, watch } from 'vue';
import type { Category } from '@/interfaces/category.interface';
import IconOk from '@/icons/IconOk.vue';
import { useCategoriesStore } from '@/stores/categories.store';
import { useRouter } from 'vue-router';

const router = useRouter();
const categoryStore = useCategoriesStore();
const { category } = defineProps<{ category: Category }>()
const categoryName = ref<string>(category.name)

const isEditCategoryTitle = ref<Boolean>(false)

function toggleEditCategoryName() {
  isEditCategoryTitle.value = !isEditCategoryTitle.value
}

function updateCategoryName() {
  categoryStore.updateCategory(category.id, categoryName.value, category.alias);
  toggleEditCategoryName();
}

function deleteCategory() {
  categoryStore.deleteCategory(category.id);
  router.replace({ name: 'main' });
}
</script>

<template>
  <header class="main-header">

    <div class="main-header__wrapper" v-if="isEditCategoryTitle">
      <InputString v-focus v-model="categoryName" placeholder="Введите имя категории" />

      <ButtonIcon @click="updateCategoryName">
        <IconOk />
      </ButtonIcon>
    </div>

    <h2 v-else class="main-header__title">{{ categoryName }}</h2>

    <div class="main-header__buttons">
      <ButtonIcon @click="deleteCategory">
        <IconBasket />
      </ButtonIcon>

      <ButtonIcon @click="toggleEditCategoryName">
        <IconPencil />
      </ButtonIcon>
    </div>
  </header>
</template>

<style scope>
.main-header,
.main-header__buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.main-header {
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}

.main-header__wrapper {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: center;
}

.main-header__buttons {
  gap: 10px;
}

.main-header__title {
  margin: 0;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0.02em;
}
</style>
