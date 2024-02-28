<template>
  <v-container fluid>
    <h1 class="text-center text-primary"> The Home View </h1>
    <v-row>
      <v-col justify="center" align="center">
        <router-link :to="{ name: 'Login' }">
          <v-btn
            color="primary"
            variant="text"
            style="margin-right: 10px;"
          >
            Login Page
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
  <router-view />
</template>