<template>
  <div>
    <Jumbotron :title="title" :subtitle="subtitle" :powerby="powerby" />

    <section class="background">
      <v-container fluid>
        <h2 class="font-weight-medium" style="margin-top: 70px">
          Background
        </h2>
        <v-row>
          <v-col lg="6" md="6" sm="12" cols="12">
            <div class="my-5">
              <p class="f-s">
                Lorem ipsum dolor sit amet malesuada ultricies leo porttitor in
                sociosqu vitae fermentum cras metus est nisl scelerisque potenti
                ipsum posuere porttitor aenean urna hendrerit eleifend netus
                curae vulputate dui nostra conubia pellentesque nec aliquet quam
                hac in auctor nisl posuere mollis suspendisse aliquam duis
                suscipit facilisis nullam dictumst porttitor.
              </p>

              <p class="f-s">
                Lorem ipsum dolor sit amet diam id metus curabitur aenean turpis
                habitant interdum senectus gravida fames luctus blandit dolor
                nulla viverra platea vel augue gravida purus eleifend habitasse
                consectetur laoreet tortor vel habitant pharetra fringilla
                sagittis lacinia vel metus donec varius bibendum fermentum
                curabitur feugiat.
              </p>

              <p class="f-s">
                Lorem ipsum dolor sit amet diam id metus curabitur aenean turpis
                habitant interdum senectus gravida fames luctus blandit dolor
                nulla viverra platea vel augue gravida purus eleifend habitasse
                consectetur laoreet tortor vel habitant pharetra fringilla
                sagittis lacinia vel metus donec varius bibendum fermentum
                curabitur feugiat.
              </p>
            </div>
          </v-col>

          <v-col lg="6" md="6" class="d-md-block d-sm-none d-none">
            <v-img
              src="@/assets/images/bg1.png"
              width="385"
              height="389"
              class="d-block mx-auto"
            ></v-img>
          </v-col>

          <v-col lg="6" md="6" class="d-md-block d-sm-none d-none">
            <v-img
              src="@/assets/images/bg2.png"
              class="d-block mx-auto"
            ></v-img>
          </v-col>

          <v-col lg="6" md="6" sm="12" cols="12">
            <div>
              <p class="f-s">
                Lorem ipsum dolor sit amet malesuada ultricies leo porttitor in
                sociosqu vitae fermentum cras metus est nisl scelerisque potenti
                ipsum posuere porttitor aenean urna hendrerit eleifend netus
                curae vulputate dui nostra conubia pellentesque nec aliquet quam
                hac in auctor nisl posuere mollis suspendisse aliquam duis
                suscipit facilisis nullam dictumst porttitor.
              </p>

              <p class="f-s">
                Lorem ipsum dolor sit amet diam id metus curabitur aenean turpis
                habitant interdum senectus gravida fames luctus blandit dolor
                nulla viverra platea vel augue gravida purus eleifend habitasse
                consectetur laoreet tortor vel habitant pharetra fringilla
                sagittis lacinia vel metus donec varius bibendum fermentum
                curabitur feugiat.
              </p>

              <p class="f-s">
                Lorem ipsum dolor sit amet diam id metus curabitur aenean turpis
                habitant interdum senectus gravida fames luctus blandit dolor
                nulla viverra platea vel augue gravida purus eleifend habitasse
                consectetur laoreet tortor vel habitant pharetra fringilla
                sagittis lacinia vel metus donec varius bibendum fermentum
                curabitur feugiat.
              </p>
            </div>
          </v-col>
          <!--  -->
        </v-row>
      </v-container>
    </section>

    <section class="products">
      <v-container fluid>
        <h2 class="font-weight-medium" style="margin: 30px 0">
          Products
        </h2>
        <v-row>
          <v-col v-for="items in 6" :key="items" lg="4" md="4" sm="6" cols="12">
            <v-card elevation="0" color="#E5E5E5" height="350">
              <v-card-text>{{ items }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="teams text-center d-sm-block d-none">
      <v-container fluid>
        <h2 class="font-weight-medium" style="margin: 80px 0">
          Collaboration Team
        </h2>
        <v-row
          justify="space-around"
          align="center"
          style="height: 300px; margin: -30px 0 30px 0"
        >
          <v-btn outlined color="dark" icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <div v-for="(items, i) in teams" :key="i" class="pa-2">
            <v-avatar v-if="i % 2 != 0" width="200" height="200">
              <v-img
                :src="require(`@/assets/images/${items.image}`)"
                :alt="items.name"
              />
            </v-avatar>

            <v-avatar v-else width="150" height="150">
              <v-img
                :src="require(`@/assets/images/${items.image}`)"
                :alt="items.name"
              />
            </v-avatar>
            <h4 class="mt-5">{{ items.name }}</h4>
            <small>{{ items.profesi }}</small>
          </div>

          <v-btn outlined color="dark" icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
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
  name: 'Home',
  components: {
    Jumbotron,
    Footer,
  },
  data: () => ({
    title: 'SMART FARM',
    subtitle:
      'The Use of IoT Technology That Will Shape the Future of Agriculture',
    powerby: 'Power by arduino and PCBWay',
    teams: [
      {
        id: 1,
        name: 'Leon Kennedy',
        profesi: 'Backend Developer',
        image: 'manbe.png',
      },
      {
        id: 2,
        name: 'Claudia Robert',
        profesi: 'Frontend Developer',
        image: 'woman.png',
      },
      {
        id: 3,
        name: 'Robby Salim',
        profesi: 'UI/UX Designer',
        image: 'manui.png',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
.background,
.products,
.teams {
  background: #fff;
}
</style>
