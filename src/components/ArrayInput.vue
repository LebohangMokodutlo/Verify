<template>
  <v-text-field
    v-model="Name"
    label="Name"
  />
  <div v-if="eMessage" class="text-error mt-1 mb-1"> {{ eMessage }}</div>
   <v-btn @click="addName">Add Name</v-btn>
   <v-card-title>
        defineModel made it possible
      </v-card-title>
      <v-card-text
        v-for="item in Names"
        :key="item"
      >
        {{ item }}
      </v-card-text>
</template>
  
<script setup>
import { defineModel, ref } from 'vue';
  
const Names = defineModel();
const Name = ref('');
const eMessage = ref('');

const addName = () => {
  if(!Name.value){
    eMessage.value = 'Enter a name before proceeding';
    return;
  }

  if(Names.value.includes(Name.value)) {
    eMessage.value = 'Name already exists';
    return;
  }
  Names.value.push(Name.value);
  Name.value = '';
  eMessage.value = '';
};
</script>
