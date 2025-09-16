<script setup lang="ts">
import BookmarkCard from '@/components/BookmarkCard.vue';
import BookmarkSort from '@/components/BookmarkSort.vue';
import CategoryHeader from '@/components/CategoryHeader.vue';
import type { Category } from '@/interfaces/category.interface';
import { useBookmarksStore } from '@/stores/bookmarks.store';
import { useCategoriesStore } from '@/stores/categories.store';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryStore = useCategoriesStore();
const bookmarkStore = useBookmarksStore();
const category = ref<Category>();


function sortBookmarks(sort: string) {
  bookmarkStore.activeSort = sort;

  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id, bookmarkStore.activeSort);
  }
}

onMounted(() => {
  category.value = categoryStore.getCategoryByAlias(route.params.alias);

  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id, bookmarkStore.activeSort);
  }
})

watch(() => ({
  alias: route.params.alias,
  categories: categoryStore.categories
}), (data) => {
  category.value = categoryStore.getCategoryByAlias(data.alias);

  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id, bookmarkStore.activeSort);
  }
})
</script>

<template>
  <div class="category">
    <CategoryHeader v-if="category" :category="category" />
    <BookmarkSort :option="bookmarkStore.activeSort" @sort="sortBookmarks" />
    <ul class="category__list">
      <li class="category__item" v-for="card in bookmarkStore.bookmarks" :key="card.id">
        <BookmarkCard v-bind="card" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.category {
  display: grid;
  gap: 40px;
}

.category__list {
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
