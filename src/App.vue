<template>
  <v-app>
    <v-app-bar
      v-if="$route.name == 'Home' || $route.name == 'Monitoring'"
      app
      color="#6ABB1A"
      dark
      dense
      flat
    >
      <v-app-bar-title class="text-uppercase">Smart Farm</v-app-bar-title>
      <router-link to="/" class="white--text ml-7">Home</router-link>
      <router-link to="/monitoring" class="white--text ml-4">
        Monitoring
      </router-link>
    </v-app-bar>

    <!-- <v-container fluid> -->
    <v-main>
      <router-view />
    </v-main>
    <!-- </v-container> -->
    <!-- <v-speed-dial bottom right>
      <template #activator>
        <v-btn color="#6ABB1A" dark fab>
          <v-icon>
            mdi-chevron-up
          </v-icon>
        </v-btn>
      </template>
    </v-speed-dial> -->
  </v-app>
</template>

<script>
export default {
  data: () => ({
    check: false,
  }),
  mounted() {},
}
</script>
