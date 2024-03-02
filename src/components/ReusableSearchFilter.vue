<template>
  <v-container fluid>
    <v-text-field
      :label="label"
      v-model="listFilter"
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
import { ref, computed, toRef } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  tableTitle: {
    type: String,
    required: true,
  },
});

const listFilter = ref('');
const Items = toRef(props, 'modelValue');

const filteredList = computed(() => {
  if (!listFilter.value) {
    return Items.value;
  }
  return Items.value.filter(item => item.includes(listFilter.value));
});
</script>
