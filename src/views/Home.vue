<template>
  <div>
    <Jumbotron :title="title" :subtitle="subtitle" :powerby="powerby" />
    <section style="height: 100vh"></section>
  </div>
</template>
<script>
import Jumbotron from '@/components/Jumbotron'
export default {
  name: 'Home',
  components: {
    Jumbotron,
  },
  data: () => ({
    title: 'SMART FARM',
    subtitle:
      'The Use of IoT Technology That Will Shape the Future of Agriculture',
    powerby: 'Power by arduino and PCBWay',
  }),
}
</script>
