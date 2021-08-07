<template>
  <section class="text-center ">
    <h1 class="f-title color-primary" style="margin-top: 70px">
      No connection internet
    </h1>
    <p class="f-m mt-2 d-block mx-auto" style="width: 310px">
      Your internet connection is currently not available please check or try
      again.
    </p>
    <div
      class="d-block mx-auto"
      style="width: 100px; height: 100px; margin-top: 100px"
    >
      <v-img src="@/assets/images/timeout.png"></v-img>
    </div>
    <v-btn
      outlined
      color="#71b22f"
      class="text-capitalize mt-6"
      @click="reloadPage"
    >
      Try again
    </v-btn>
  </section>
</template>
<script>
export default {
  name: 'Timeout',
  methods: {
    reloadPage() {
      window.location.reload()
    },
  },
}
</script>
