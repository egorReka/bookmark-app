<script setup lang="ts">
import type { Category } from '@/interfaces/category.interface';
import { useBookmarksStore } from '@/stores/bookmarks.store';
import { useCategoriesStore } from '@/stores/categories.store';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryStore = useCategoriesStore();
const bookmarkStore = useBookmarksStore();
const category = ref<Category>()

onMounted(() => {
  category.value = categoryStore.getCategoryByAlias(route.params.alias);

  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id)
  }
})

watch(() => ({
  alias: route.params.alias,
  categories: categoryStore.categories
}), (data) => {
  category.value = categoryStore.getCategoryByAlias(data.alias);

  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id)
  }
})
</script>

<template>
  Category
  {{ category?.name }}
  {{ bookmarkStore.bookmarks.length }}
</template>
