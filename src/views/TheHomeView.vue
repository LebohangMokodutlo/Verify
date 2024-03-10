<template>
  <v-container>
    <h1 class="text-center text-primary"> The Home View </h1>
    <v-row>
      <v-col justify="center" align="center">
        <router-link :to="{ name: 'Login' }">
          <v-btn
            color="primary"
            style="margin-right: 10px;"
          >
            Login Page
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
    <names-to-filter />
    <occupations-to-filter />
    <define-model-usage />

  </v-container>
  <router-view />
</template>

<script setup>
import OccupationsToFilter from '@/components/OccupationsToFilter.vue';
import NamesToFilter from '@/components/NamesToFilter.vue';
import DefineModelUsage from '@/components/DefineModelUsage.vue';
</script>
