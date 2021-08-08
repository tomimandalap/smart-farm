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

    <v-main>
      <router-view />
    </v-main>

    <v-btn
      v-show="state"
      elevation="0"
      color="#71b22f"
      dark
      fab
      class="floating"
      @click="handlebutton"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    check: false,
    state: false,
  }),
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 600) {
        this.state = true
      } else {
        this.state = false
      }
    },
    handlebutton() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>
<style lang="scss" scoped>
.floating {
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 25px;
  right: 25px;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
}
</style>
