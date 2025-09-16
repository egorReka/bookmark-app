import type { Profile } from "@/interfaces/profile.interface";
import { defineStore } from "pinia";
import { ref } from "vue";
import { API_ROUTES, client } from "@/api";

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>();

  async function fetchProfile() {
    const {data} = await client().get<Profile>(API_ROUTES.auth.profile)
    profile.value = data;
  }

  return { profile, fetchProfile };
})
