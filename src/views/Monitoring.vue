<template>
  <div>
    <Jumbotron :title="title" :powerby="powerby" />

    <section class="realtime">
      <v-container fluid>
        <h2 class="font-weight-medium" style="margin-top: 70px">
          Realtime Data
        </h2>
        <v-row>
          <v-col lg="4" md="4" sm="12" cols="12">
            <v-card elevation="0" outlined class="mt-10 text-center">
              <v-card-title class="d-block mx-auto f-xl">
                Temperature
              </v-card-title>
              <v-card-text class="f-card-text my-6 black--text">
                30.00&deg;C
              </v-card-text>
              <v-card-subtitle>Updated 1 minutes ago</v-card-subtitle>
            </v-card>
          </v-col>

          <v-col lg="4" md="4" sm="12" cols="12">
            <v-card elevation="0" outlined class="mt-10 text-center">
              <v-card-title class="d-block mx-auto f-xl">
                Humidity
              </v-card-title>
              <v-card-text class="f-card-text my-6 black--text">
                60.50%
              </v-card-text>
              <v-card-subtitle>Updated 1 minutes ago</v-card-subtitle>
            </v-card>
          </v-col>

          <v-col lg="4" md="4" sm="12" cols="12">
            <v-card elevation="0" outlined class="mt-10 text-center">
              <v-card-title class="d-block mx-auto f-xl">
                Soil Moisture
              </v-card-title>
              <v-card-text class="f-card-text my-6 black--text">
                80.25%
              </v-card-text>
              <v-card-subtitle>Updated 1 minutes ago</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="graph">
      <v-container fluid>
        <h2 class="font-weight-medium" style="margin: 60px 0 50px 0">
          Realtime Data Graph
        </h2>
        <v-row>
          <v-col
            v-for="item in 3"
            :key="item"
            lg="12"
            md="12"
            sm="12"
            cols="12"
            class="mb-5"
          >
            <v-card elevation="0" outlined>
              <v-card-title>Temperature 30.00&deg;C</v-card-title>
              <v-card-text>
                <v-sheet color="white">
                  <v-sparkline
                    :value="value"
                    color="black"
                    height="100"
                    padding="16"
                    line-width="2"
                    stroke-linecap="round"
                    smooth
                  >
                    <template v-slot:label="item">{{ item.value }}</template>
                  </v-sparkline>
                </v-sheet>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <Footer />
  </div>
</template>
<script>
import Jumbotron from '@/components/Jumbotron'
import Footer from '@/components/Footer'
export default {
  name: 'Monitoring',
  components: { Jumbotron, Footer },
  data: () => ({
    title: 'Monitoring',
    powerby: 'Power by arduino and PCBWay',
    value: [30.1, 29.2, 30.5, 28.6, 30.0, 29.8],
  }),
}
</script>
<style lang="scss" scoped>
.realtime,
.graph {
  background: #fff;
}
</style>
