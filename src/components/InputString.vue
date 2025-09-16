<script setup lang="ts">
const data = defineModel<string>()
</script>

<template>
  <input class="input-string" v-model="data">
</template>

<style scope>
.input-string {
  display: block;
  max-width: 274px;
  font-size: 24px;
  color: var(--color-nero);
  border: none;
  border-bottom: 1px solid var(--color-nero);
}

.input-string::placeholder {
  opacity: 0.4;
}
</style>
