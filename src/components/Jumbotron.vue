<template>
  <v-img src="../assets/images/bg-dasboard.jpg" style="height: 100vh">
    <v-container>
      <v-row class="pl-3 pt-0 pb-0 pr-0 mt-n6">
        <v-col lg="4" md="4" sm="5" cols="6">
          <v-card
            color="#71B22F88"
            class="rounded-0 text-center pt-8 pb-8 pl-3 pr-3"
            style="height: 100vh"
          >
            <v-card-text class="white--text" style="font-size: 1.5rem;">
              {{ title }}
            </v-card-text>
            <v-card-text class="white--text text-left f-lg">
              {{ subtitle }}
            </v-card-text>
            <v-card-text
              class="white--text f-lg"
              style="position: absolute; bottom: 60px"
            >
              {{ powerby }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>
<script>
export default {
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    powerby: { type: String, default: '' },
  },
  data() {
    return {}
  },
}
</script>
