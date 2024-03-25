<template>
  <v-container fluid>
    <v-text-field
      v-model="listFilter"
      label="Filter"
    />
    <v-card>
      <v-card-title>
        {{ tableTitle }}
      </v-card-title>
      <v-card-text
        v-for="item in filteredList"
        :key="item"
      >
        {{ item }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { defineModel, ref, computed } from 'vue';

const Items = defineModel();
const listFilter = ref('');

const filteredList = computed(() => {
  if (!listFilter.value) {
    return Items.value;
  }
  return Items.value.filter((item) => item.includes(listFilter.value));
});
</script>
