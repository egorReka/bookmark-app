<script setup lang="ts">
import IconBasket from '@/icons/IconBasket.vue';
import ButtonIconBig from './ButtonIconBig.vue';
import IconBigLink from '@/icons/IconBigLink.vue';
import type { Bookmark } from '@/interfaces/bookmark.interface';
import { useBookmarksStore } from '@/stores/bookmarks.store';

const { id, category_id, image, title, url } = defineProps<Bookmark>();
const bookmarkStore = useBookmarksStore();
</script>

<template>
  <div class="bookmark-card">
    <img class="bookmark-card__img" :src="image" width="274" height="162" :alt="title">

    <h3 class="bookmark-card__title">{{ title }}</h3>

    <div class="bookmark-card__buttons">
      <ButtonIconBig @click="() => bookmarkStore.deleteBookmarks(category_id, id)">
        <IconBasket />
      </ButtonIconBig>

      <a class="bookmark-card__link" :href="url" target="_blank">
        <IconBigLink />
      </a>
    </div>
  </div>
</template>

<style scope>
.bookmark-card {
  display: grid;
  row-gap: 24px;
  max-width: 314px;
  padding: 20px;
  border-radius: 30px;
  background-color: var(--color-nero);
  color: var(--color-default-white);
}

.bookmark-card__img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.bookmark-card__title {
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.01em;
}

.bookmark-card__buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.bookmark-card__link {
  display: grid;
  place-content: center;
  width: 48px;
  height: 48px;
  background-color: var(--color-nero);
  border-radius: 50%;
  border: 3px solid var(--color-default-white);
  cursor: pointer;
  transition: opacity 0.2s;
}

.bookmark-card__link:hover {
  opacity: 0.7;
}
</style>
