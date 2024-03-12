<template>
  <array-input
    v-model="parentNames"
  />
</template>

<script setup>
import { ref } from 'vue';
import ArrayInput from '@/components/ArrayInput.vue';

const parentNames = ref([]);
</script>
