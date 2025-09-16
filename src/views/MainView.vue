<script setup lang="ts">
import CategoryList from '../components/CategoryList.vue';
import ProfileAvatar from '../components/ProfileAvatar.vue';
</script>

<template>
  <div class="app">
    <aside class="left-panel">

      <ProfileAvatar />

      <nav>
        <CategoryList />
      </nav>

    </aside>

    <main>
      <RouterView />
    </main>

  </div>
</template>

<style scope>
.app {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10%;
  min-height: 100svh;
  max-width: 1440px;
  margin: 0 auto;
  padding: 140px 120px;
}

.left-panel {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
