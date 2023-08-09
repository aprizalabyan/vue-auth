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
        <v-form v-model="valid" @submit.prevent="loginMethods"
          >
          <v-text-field
            v-model="loginForm.username"
            :rules="[(v) => !!v || 'Username required !']"
            label="Username"
            required
            outlined
            dense
            class="rounded-lg"
          ></v-text-field>
          <v-text-field
            v-model="loginForm.password"
            :rules="[(v) => !!v || 'Password required !']"
            label="Password"
            :type="showPass ? 'text' : 'password'"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            required
            outlined
            dense
            class="rounded-lg"
            @click:append="showPass = !showPass"
          ></v-text-field>
          <v-btn
            color="teal accent-4"
            type="submit"
            class="rounded-lg custom-btn"
            :disabled="!valid"
          >
            Login
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import router from '@/router';
import { mapActions } from 'vuex';

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
    ...mapActions("auth", ["login"]),
    async loginMethods() {
      try {
        await this.login(this.loginForm)
        router.push({ path: '/'})
      } catch (error) {

      } finally {

      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep(.v-input__slot) {
  // min-height: 46px !important;
  .v-label {
    top: auto;
    font-size: 14px;
  }
  input {
    font-size: 14px;
  }
  .v-input__append-inner {
    align-self: center;
    margin: auto;
    .v-input__icon {
      .v-icon {
        font-size: 20px;
      }
    }
  }
}
.custom-btn{
  color: #fff;
  width: 100%;
}
</style>