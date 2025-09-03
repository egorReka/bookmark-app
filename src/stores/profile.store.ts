import type { Profile } from "@/interfaces/profile.interface";
import { defineStore } from "pinia";
import { ref } from "vue";
import { API_ROUTES, http } from "@/api";

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>();

  async function fetchProfile() {
    const {data} = await http.get<Profile>(API_ROUTES.profile)
    profile.value = data;
  }

  return { profile, fetchProfile };
})
