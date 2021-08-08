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
              <v-card-title
                class="orange--text d-block mx-auto f-xl
                "
              >
                Temperature
              </v-card-title>
              <v-card-text class="orange--text f-card-text my-6">
                {{
                  dataTemp.length != 0
                    ? dataTemp[dataTemp.length - 1].field1
                    : 0
                }}&deg;C
              </v-card-text>
              <v-card-subtitle
                class="orange--text
                "
              >
                Updated
                {{
                  dataTemp.length != 0
                    ? dataTemp[dataTemp.length - 1].created_at
                    : '1 minute ago'
                }}
              </v-card-subtitle>
            </v-card>
          </v-col>

          <v-col lg="4" md="4" sm="12" cols="12">
            <v-card elevation="0" outlined class="mt-10 text-center">
              <v-card-title
                class="green--text d-block mx-auto f-xl
                "
              >
                Humidity
              </v-card-title>
              <v-card-text class="green--text f-card-text my-6">
                {{
                  dataHumd.length != 0
                    ? dataHumd[dataHumd.length - 1].field2
                    : 0
                }}%
              </v-card-text>
              <v-card-subtitle
                class="green--text
                "
              >
                Updated
                {{
                  dataHumd.length != 0
                    ? dataHumd[dataHumd.length - 1].created_at
                    : '1 minute ago'
                }}
              </v-card-subtitle>
            </v-card>
          </v-col>

          <v-col lg="4" md="4" sm="12" cols="12">
            <v-card elevation="0" outlined class="mt-10 text-center">
              <v-card-title
                class="blue--text d-block mx-auto f-xl
                "
              >
                Soil Moisture
              </v-card-title>
              <v-card-text class="blue--text f-card-text my-6">
                {{
                  dataSoil.length != 0
                    ? dataSoil[dataSoil.length - 1].field3
                    : 0
                }}%
              </v-card-text>
              <v-card-subtitle
                class="blue--text
                "
              >
                Updated
                {{
                  dataSoil.length != 0
                    ? dataSoil[dataSoil.length - 1].created_at
                    : '1 minute ago'
                }}
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
          <v-col lg="12" md="12" sm="12" cols="12" class="mb-5">
            <v-card elevation="0">
              <v-card-title
                class="orange--text
                "
              >
                Temperature
                {{
                  dataTemp.length != 0
                    ? dataTemp[dataTemp.length - 1].field1
                    : 0
                }}&deg;C
              </v-card-title>
              <v-card-text v-if="dataTemp.length > 0">
                <v-sheet color="white">
                  <v-sparkline
                    :value="dataTemp.map(e => +e.field1)"
                    color="orange"
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
              <v-card-text v-else>
                <v-sheet color="white">
                  <v-sparkline
                    :value="[5, 1, 2, 4, 3, 0]"
                    color="orange"
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

          <v-col lg="12" md="12" sm="12" cols="12" class="mb-5">
            <v-card elevation="0">
              <v-card-title
                class="green--text
                "
              >
                Humidity
                {{
                  dataHumd.length != 0
                    ? dataHumd[dataHumd.length - 1].field2
                    : 0
                }}%
              </v-card-title>
              <v-card-text v-if="dataHumd.length > 0">
                <v-sheet color="white">
                  <v-sparkline
                    :value="dataHumd.map(e => +e.field2)"
                    color="green"
                    height="100"
                    padding="16"
                    line-width="2"
                    stroke-linecap="round"
                    smooth
                  >
                    <template v-slot:label="item">
                      {{ item.value }}
                    </template>
                  </v-sparkline>
                </v-sheet>
              </v-card-text>
              <v-card-text v-else>
                <v-sheet color="white">
                  <v-sparkline
                    :value="[5, 1, 2, 4, 3, 0]"
                    color="green"
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

          <v-col lg="12" md="12" sm="12" cols="12" class="mb-5">
            <v-card elevation="0">
              <v-card-title
                class="blue--text
                "
              >
                Soil Moisture
                {{
                  dataSoil.length != 0
                    ? dataSoil[dataSoil.length - 1].field3
                    : 0
                }}%
              </v-card-title>
              <v-card-text v-if="dataSoil.length > 0">
                <v-sheet color="white">
                  <v-sparkline
                    :value="dataSoil.map(e => +e.field3)"
                    color="blue"
                    height="100"
                    padding="16"
                    line-width="2"
                    stroke-linecap="round"
                    smooth
                  >
                    <template v-slot:label="item">
                      {{ item.value }}
                    </template>
                  </v-sparkline>
                </v-sheet>
              </v-card-text>
              <v-card-text v-else>
                <v-sheet color="white">
                  <v-sparkline
                    :value="[5, 1, 2, 4, 3, 0]"
                    color="blue"
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
    timerOn: true,
    second: 0,
  }),
  computed: {
    dataTemp() {
      return this.$store.state.dataTemp
    },
    dataHumd() {
      return this.$store.state.dataHumd
    },
    dataSoil() {
      return this.$store.state.dataSoil
    },
  },
  watch: {
    second(val) {
      if (val == 0) {
        this.timerOn = true
        this.load()
      }
    },
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      this.reload(20)
      this.getData()
    },
    async getData() {
      await this.$store.dispatch('getTemperature')
      await this.$store.dispatch('getHumd')
      await this.$store.dispatch('getSoil')
    },
    reload(setPoint) {
      var sec = setPoint % 60
      this.second = sec
      setPoint -= 1
      if (setPoint >= 0 && this.timerOn) {
        setTimeout(() => {
          this.reload(setPoint)
        }, 1000)
        return
      }
      if (!this.timerOn) {
        return
      }
      this.timerOn = false
    },
  },
}
</script>
<style lang="scss" scoped>
.realtime,
.graph {
  background: #fff;
}
</style>
