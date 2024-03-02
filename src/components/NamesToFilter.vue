<template>
<v-container>
<reusable-search-filter
  v-model="Names"
  label="Names"
  tableTitle="Names"
/>
Name List (parent): {{ Names }}
</v-container>
</template>

<script setup>
import { ref } from 'vue';
import ReusableSearchFilter from '@/components/ReusableSearchFilter.vue';

const Names = ref(['lebohang', 'lucas', 'kamo', 'kabelo', 'thapelo']);
</script>
