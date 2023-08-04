<template>
  <v-app>
    <AppBar />
    <v-main>
      <div class="px-12 py-6">
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/navigation/AppBar.vue';
export default {
  components: {
    AppBar,
  },
}
</script>

<style>

</style>