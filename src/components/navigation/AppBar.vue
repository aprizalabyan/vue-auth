<template>
  <v-app-bar app elevation="1" color="white">
    <v-toolbar-title>Vue Auth</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      elevation="0"
      dense
      style="text-transform: none; letter-spacing: normal"
      color="transparent"
      to="/menu/dashboard"
    >
      <span class="">Dashboard</span>
    </v-btn>
    <v-btn
      elevation="0"
      dense
      style="text-transform: none; letter-spacing: normal"
      color="transparent"
      to="/menu/statistics"
    >
      <span class="">Statistics</span>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn
      elevation="0"
      dense
      style="text-transform: none; letter-spacing: normal"
      color="transparent"
      @click="logoutMethod"
    >
      <v-icon color="red">mdi-logout</v-icon>
      <span class="red--text">Logout</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      selectedItem: "",
    };
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    logoutMethod() {
      this.logout()
    }
  }
};
</script>

<style>
</style>