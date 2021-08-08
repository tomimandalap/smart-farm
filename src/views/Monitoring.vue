<template>
  <div>
    <Jumbotron :title="title" :powerby="powerby" />

    <section class="realtime">
      <v-container fluid>
        <h2 class="font-weight-medium" style="margin-top: 70px">
          Realtime Data
        </h2>
        <v-row>
          <v-col
            v-for="(items, i) in sensor"
            :key="i"
            lg="4"
            md="4"
            sm="12"
            cols="12"
          >
            <v-card elevation="0" outlined class="mt-10 text-center">
              <v-card-title
                :class="
                  i == 0
                    ? 'orange--text d-block mx-auto f-xl'
                    : i == 1
                    ? 'blue--text d-block mx-auto f-xl'
                    : 'green--text d-block mx-auto f-xl'
                "
              >
                {{ items.label }}
              </v-card-title>
              <v-card-text
                :class="
                  i == 0
                    ? 'orange--text f-card-text my-6'
                    : i == 1
                    ? 'blue--text f-card-text my-6'
                    : 'green--text f-card-text my-6'
                "
              >
                {{ items.value[items.value.length - 1]
                }}{{ i == 0 ? '&deg;C' : '%' }}
              </v-card-text>
              <v-card-subtitle
                :class="
                  i == 0
                    ? 'orange--text'
                    : i == 1
                    ? 'blue--text'
                    : 'green--text'
                "
              >
                Updated 1 minutes ago
              </v-card-subtitle>
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
            v-for="(items, i) in sensor"
            :key="i"
            lg="12"
            md="12"
            sm="12"
            cols="12"
            class="mb-5"
          >
            <v-card elevation="0">
              <v-card-title
                :class="
                  i == 0
                    ? 'orange--text'
                    : i == 1
                    ? 'blue--text'
                    : 'green--text'
                "
              >
                {{ items.label }}
                {{ items.value[items.value.length - 1]
                }}{{ i == 0 ? '&deg;C' : '%' }}
              </v-card-title>
              <v-card-text>
                <v-sheet color="white">
                  <v-sparkline
                    :value="items.value"
                    :color="i == 0 ? 'orange' : i == 1 ? 'blue' : 'green'"
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
    sensor: [
      {
        id: 1,
        label: 'Tempertaute',
        value: [30.1, 29.2, 30.5, 28.6, 30.0, 29.8],
      },
      {
        id: 2,
        label: 'Humidity',
        value: [70.1, 69.2, 70.5, 68.6, 77.0, 75.8],
      },
      {
        id: 3,
        label: 'Soil Moisture',
        value: [60.1, 58.2, 30.5, 60.6, 70.0, 65.8],
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
.realtime,
.graph {
  background: #fff;
}
</style>
