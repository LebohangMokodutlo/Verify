<template>
  <h1>to be reusable</h1>
  <v-container>
    <v-text-field 
    v-model="nameFilter"
    />
    <v-card
    v-for="name in nameFilter"
    :key="name"
    >
    {{ name }}
  </v-card>
  </v-container>
</template>

<script setup>
import { computed, ref } from 'vue';


const Names = ref(['Lebohang', 'Lebohang2', 'Lebohang3']);
const filteredName = ref('');
const nameFilter = ()=> computed(()=> {
  return Names.value.filter(name=> name.includes(filteredName.value));
});
</script>

