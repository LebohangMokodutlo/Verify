<template>
  <div>
    <v-text-field
      v-model="Name"
      label="Name"
    />
    <div v-if="eMessage" class="text-error mt-1 mb-1"> {{ eMessage }}</div>
    <v-btn @click="addName">Add Name</v-btn>
    <v-text-field
      v-model="search"
      label="search"
    />
    <v-data-table
      :headers="headers"
      :items="formattedNames"
      :search="search"
    >
      <template v-slot:items="props">
        <td>{{ props.item }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script setup>
import {
  computed,
  ref,
} from 'vue';

const Names = defineModel();
const Name = ref('');
const eMessage = ref('');
const search = ref('');

const headers = [
  { text: 'Name', align: 'start', value: 'name' },
];

const addName = () => {
  if (!Name.value) {
    eMessage.value = 'Enter a name before proceeding';
    return;
  }

  if (Names.value.includes(Name.value)) {
    eMessage.value = 'Name already exists';
    return;
  }

  Names.value.push(Name.value);
  Name.value = '';
  eMessage.value = '';
};

// Compute a formatted array to match the expected structure of v-data-table items
const formattedNames = computed(() => Names.value.map((name) => ({ name })));

</script>
