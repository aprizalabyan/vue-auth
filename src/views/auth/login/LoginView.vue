<template>
  <div
    class="d-flex flex-column justify-center align-center"
    style="height: 100%"
  >
    <v-card class="mx-auto pa-6" width="352">
      <v-card-title class="justify-center mb-2">
        <h4>Login Page</h4>
      </v-card-title>
      <v-card-text>
        <div class="d-flex justify-end mb-4">
          <v-col cols="6" class="d-flex flex-column pa-0">
            <span class="text-small font-italic">test user >> kminchelle</span>
            <span class="text-small font-italic">test pass >> 0lelplR</span>
          </v-col>
        </div>
        <v-form v-model="valid" @submit.prevent="loginMethod"
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
            :disabled="!valid || loading"
            :loading="loading"
          >
            Login
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    <div class="d-flex justify-center mt-6 px-4" style="width: 352px;">
      <span class="text-small text-center">
        Basic login authentication, made with vue & vuetify as framework. Using
        <a href="https://dummyjson.com/" target="_blank" class="font-italic">dummyjson.com</a>
        for auth and user management API. Copyright ©
        <a href="https://github.com/aprizalabyan" target="_blank" style="text-decoration: none; color: black;" class="font-italic">github.com/aprizalabyan.</a>
      </span>
    </div>
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
      loading: false,
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
    async loginMethod() {
      try {
        this.loading = true
        await this.login(this.loginForm)
        setTimeout(() => {
          router.push({ path: '/'})
          this.loading = false
        }, 1000);
      } catch (error) {
        alert('Wrong username or password !')
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
.text-small{
  font-size: 11px;
  line-height: 1.2;
}
</style>