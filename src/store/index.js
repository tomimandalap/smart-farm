import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: process.env.VUE_APP_URL,
    idChannel: process.env.VUE_APP_CHANNEL_ID,
    dataTemp: [],
    dataHumd: [],
    dataSoil: [],
  },
  mutations: {
    setTemp(state, payload) {
      state.dataTemp = payload
    },
    setHumd(state, payload) {
      state.dataHumd = payload
    },
    setSoil(state, payload) {
      state.dataSoil = payload
    },
  },
  actions: {
    getTemperature(context) {
      return axios
        .get(
          `${context.rootState.url}/channels/${context.rootState.idChannel}/fields/1.json?results=10`,
        )
        .then(res => {
          // console.log(res.data)
          context.commit('setTemp', res.data.feeds)
          return true
        })
        .catch(err => {
          console.log(err.response)
          context.commit('setTemp', [])
          return false
        })
    },
    getHumd(context) {
      return axios
        .get(
          `${context.rootState.url}/channels/${context.rootState.idChannel}/fields/2.json?results=10`,
        )
        .then(res => {
          // console.log(res.data)
          context.commit('setHumd', res.data.feeds)
          return true
        })
        .catch(err => {
          console.log(err.response)
          context.commit('setHumd', [])
          return false
        })
    },
    getSoil(context) {
      return axios
        .get(
          `${context.rootState.url}/channels/${context.rootState.idChannel}/fields/3.json?results=10`,
        )
        .then(res => {
          // console.log(res.data)
          context.commit('setSoil', res.data.feeds)
          return true
        })
        .catch(err => {
          console.log(err.response)
          context.commit('setSoil', [])
          return false
        })
    },
  },
  modules: {},
})
