<template>
  <v-container>
    <h1 class="text-center text-primary"> The Home View </h1>
    <v-row>
      <v-col
        align="right"
      >
        <router-link :to="{ name: 'Login' }">
          <v-btn
            color="primary"
          >
            Login
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
    <Map />
    <names-to-filter v-if="isShowing" />
    <occupations-to-filter v-if="isShowing" />
    <define-model-usage v-if="isShowing" />
  </v-container>
  <router-view />
</template>

<script setup>
import { ref } from 'vue';

import OccupationsToFilter from '@/components/OccupationsToFilter.vue';
import NamesToFilter from '@/components/NamesToFilter.vue';
import DefineModelUsage from '@/components/DefineModelUsage.vue';
import Map from '@/components/TheLeafletStoresMap.vue';

const isShowing = ref(false);
</script>
