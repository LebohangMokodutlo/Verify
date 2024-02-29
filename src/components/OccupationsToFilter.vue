<template>
  <reusable-search-filter
    v-model="Occupations"
    label="Occupations"
  />
</template>

<script setup>
import ReusableSearchFilter from '@/components/ReusableSearchFilter.vue';
import { ref } from 'vue';

const Occupations = ref(['data analyst', 'developer', 'gis Analyst', 'devops', 'i.t desktop']);
</script>
