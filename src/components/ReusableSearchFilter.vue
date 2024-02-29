<template>
  <v-container fluid>
    <v-text-field
      :label="label"
      v-model="listFilter"
    />
    <v-card>
      <v-card-title>
        Filtered List
      </v-card-title>
      <v-card-text
      :key="`list-${list}`"
      v-for="(list) in filteredList"
      >
        {{ list }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
/* eslint-disable */
import { ref, toRef } from 'vue';
import { computed, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
});

const emits = defineEmits(['update:modelValue']);

const listFilter = ref('');
const List = toRef(() => props.modelValue);

const filteredList = computed(() => {
  return List.value.filter((item) => item.includes(listFilter.value));
});

watch(() => {
  emits('update:modelValue', filteredList.value);
});
</script>
