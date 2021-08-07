<template>
  <div>
    <Jumbotron :title="title" :powerby="powerby" />
  </div>
</template>
<script>
import Jumbotron from '@/components/Jumbotron'
export default {
  name: 'Monitoring',
  components: { Jumbotron },
  data: () => ({
    title: 'Monitoring',
    powerby: 'Power by arduino and PCBWay',
  }),
}
</script>
