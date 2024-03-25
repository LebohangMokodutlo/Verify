<template>
  <h1>login form to be here</h1>
  <v-btn @click="logIn">
    log in
  </v-btn>

</template>

<script setup>
const logIn = () => {
  this.$router.push('/Dashboard');
};
</script>
