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
  
const Names = defineModel({
    required: true,
});
const Name = ref('');
const eMessage = ref('');

const addName = () => {
  if(!Name.value){
    eMessage.value = 'enter a value before proceeding';
    return
  }
  Names.value.push(Name.value);
  Name.value = '';
};
</script>
