<template>
  <div
    class="d-flex flex-column justify-center align-center"
    style="height: 100%"
  >
    <v-card class="mx-auto pa-6" width="352">
      <v-card-title class="justify-center mb-4">
        <h4>Login Page</h4>
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid" @submit.prevent="loginMethods">
          <v-col cols="12" md="4" class="pa-0">
            <v-text-field
              v-model="loginForm.username"
              :rules="[(v) => !!v || 'Username required !']"
              label="Username"
              required
              outlined
              class="rounded-lg"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" class="pa-0">
            <v-text-field
              v-model="loginForm.password"
              :rules="[(v) => !!v || 'Password required !']"
              label="Password"
              :type="showPass ? 'text' : 'password'"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              required
              outlined
              class="rounded-lg"
              @click:append="showPass = !showPass"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" class="pa-0">
            <v-btn 
              dark
              color="teal accent-4"
              type="submit" 
              style="width: 100%;"  
              class="rounded-lg"
            >
              Login
            </v-btn>
          </v-col>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      valid: false,
      loginForm: {
        username: "",
        password: "",
      },
      showPass: false,
    };
  },
  computed: {},
  methods: {
    loginMethods() {
      console.log("login");
    },
  },
};
</script>

<style lang="scss" scoped>

::v-deep(.v-input__slot){
  min-height: 46px !important;
  .v-label{
    top: auto;
    font-size: 14px;
  }
  input{
    font-size: 14px;
  }
  .v-input__append-inner{
    align-self: center;
    margin: auto;
  }
}
</style>