<script setup lang="ts">
const { size = 32 } = defineProps<{ size?: number }>();
</script>

<template>
  <button class="button-icon" type="button" :style="{ width: `${size}px`, height: `${size}px` }">
    <slot></slot>
  </button>
</template>

<style scope>
.button-icon {
  display: grid;
  place-content: center;
  background-color: var(--color-nero);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

.button-icon:hover {
  opacity: 0.7;
}
</style>
