import { API_ROUTES, client } from "@/api";
import type { Bookmark } from "@/interfaces/bookmark.interface";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBookmarksStore = defineStore('boomarks', () => {
  const bookmarks = ref<Bookmark[]>([]);
  const activeSort = ref<string>('date');

  async function fetchBookmarks(categoryId: number, sort: string) {
    const { data } = await client().get(API_ROUTES.bookmarks.get(categoryId), {
      params: {
        sort
      }
    });
    bookmarks.value = data;
  }

  async function deleteBookmarks(categoryId: number, bookmarkId: number) {
    await client().delete(API_ROUTES.bookmarks.delete(bookmarkId));
    fetchBookmarks(categoryId, activeSort.value);
  }

  return { bookmarks, fetchBookmarks, deleteBookmarks, activeSort };
})
