<template>
  <section class="footer-custom">
    <v-container fluid>
      <v-row>
        <v-col lg="8" md="9" sm="12" cols="12">
          <h3
            class="white--text font-weight-medium"
            style="margin: 25px 0 30px 0"
          >
            SMART FARM
          </h3>
          <p class="f-s white--text font-weight-light">
            Lorem ipsum dolor sit amet aptent proin in donec molestie vel aenean
            vestibulum velit sem nisi et ut inceptos tristique neque auctor id
            curabitur non erat nec purus taciti semper.
          </p>
          <p class="f-s white--text font-weight-light">
            Lorem ipsum dolor sit amet turpis turpis accumsan lectus vestibulum
            suscipit vel fermentum nisi ligula dictum sapien curae curae
            eleifend posuere risus malesuada pellentesque ad sit lacus aliquam
            nisi egestas malesuada venenatis aliquet porta dui ligula erat
            aliquet nisi tempus auctor litora consequat ac diam fermentum id ut
            consectetur aliquet.
          </p>
        </v-col>
        <v-col lg="4" md="3" sm="12" cols="12">
          <v-row>
            <v-col cols="12">
              <h3
                class="white--text font-weight-medium"
                style="margin: 25px 0 30px 0"
              >
                Social Media
              </h3>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                class="v-btn v-btn--icon mt-n7 mr-3"
              >
                <v-icon color="white" size="25">mdi-instagram</v-icon>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                class="v-btn v-btn--icon mt-n7 mr-3"
              >
                <v-icon color="white" size="25">mdi-facebook</v-icon>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                class="v-btn v-btn--icon mt-n7"
              >
                <v-icon color="white" size="25">mdi-twitter</v-icon>
              </a>
            </v-col>
            <v-col cols="12" class="mb-15">
              <h3
                class="white--text font-weight-medium"
                style="margin: 10px 0 10px 0"
              >
                Power by:
              </h3>
              <ul>
                <li class="ml-n5">
                  <a
                    href="https://arduino.cc"
                    target="_blank"
                    class="white--text f-s"
                  >
                    arduino.cc
                  </a>
                </li>
                <li class="mt-2 ml-n5">
                  <a
                    href="https://pcbway.com"
                    target="_blank"
                    class="white--text f-s"
                  >
                    pcbway.com
                  </a>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-footer color="#215841" class="mini-footer">
      <span class="white--text d-block mx-auto">&copy; 2021 - Smart Farm</span>
    </v-footer>
  </section>
</template>
<style lang="scss" scoped>
.footer-custom {
  min-height: 325px;
  margin: 90px 0 0 0;
  background: #2b6e50;
}
.mini-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>
