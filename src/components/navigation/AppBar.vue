<template>
  <v-app-bar app elevation="1" color="white">
    <v-toolbar-title>Vue Auth</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="(item, i) in navMenu" :key="i"
      elevation="0"
      dense
      text
      active-class="btn-nav-active"
      :ripple="false"
      class="btn-nav"
      :to="item.to"
    >
      <span>{{ item.text }}</span>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn
      elevation="0"
      dense
      text
      class="btn-nav"
      :ripple="false"
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
      navMenu: [
        {
          text: "Dashboard",
          to: "/menu/dashboard",
        },
        {
          text: "Statistics",
          to: "/menu/statistics",
        },
      ]
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

<style lang="scss" scoped>
.btn-nav{
  text-transform: none;
  letter-spacing: normal;
  margin: 0px 8px;
  padding: 0px !important;
  height: 20px !important;
}
.btn-nav-active{
  color: #00bfa5;
}
.v-btn--active::before, .v-btn:hover::before{
  opacity: 0 !important; 
}
</style>