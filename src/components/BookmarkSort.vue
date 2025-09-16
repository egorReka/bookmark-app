<script setup lang="ts">
const { option } = defineProps<{ option: string }>()

const SORT_OPTIONS = [
  { option: 'date', name: 'По дате' },
  { option: 'title', name: 'По названию' }
];

const emit = defineEmits<{
  (e: 'sort', option: string): void
}>()
</script>

<template>
  <div class="sort">
    <button class="sort__button" v-for="item in SORT_OPTIONS" :key="item.option"
      :class="option === item.option ? 'active' : ''" @click="() => emit('sort', item.option)">
      {{ item.name }}
    </button>
  </div>
</template>

<style scope>
.sort {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.sort__button {
  display: block;
  padding: 0;
  font-size: 16px;
  line-height: 125%;
  background: none;
  border: none;
  padding: 4px 8px;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: transparent;
  text-decoration-thickness: 2px;
  opacity: 0.4;
  transition: opacity 0.2s, text-decoration-color 0.2s;
  cursor: pointer;
}

.sort__button.active,
.sort__button:hover,
.sort__button:focus {
  font-weight: 700;
  opacity: 1;
  text-decoration-color: var(--color-nero);
}
</style>
