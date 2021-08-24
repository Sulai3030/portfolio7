<template>
  <div class="applications">
    <v-card max-width="1450" class="mx-auto">
      <v-system-bar color="pink darken-2" dark>
        <v-spacer></v-spacer>

        <v-icon></v-icon>

        <v-icon></v-icon>

        <v-icon></v-icon>
      </v-system-bar>

      <v-app-bar dark color="pink">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Applications</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn> </v-btn>
      </v-app-bar>

      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card color="#4680F2 class=white--text">
              <v-card-title class="text-h5"> Project 1. </v-card-title>

              <v-card-subtitle
                ><a href="https://partydash.com/" target="_blank"
                  >https://partydash.com/</a
                ></v-card-subtitle
              >

              <v-card-subtitle>
                We built Party Dash with a simple goal in mind: to help party
                hosts plan parties more easily.
              </v-card-subtitle>
              <v-card-subtitle> Responsibilities: </v-card-subtitle>
              <v-card-subtitle>
                We built Party Dash with a simple goal in mind: to help party
                hosts plan parties more easily.
              </v-card-subtitle>
              <v-card-subtitle> Responsobilities </v-card-subtitle>
              <v-card-subtitle
                >Follow design specs handed down from site owner. Used CSS and
                HTML to create inviting website
              </v-card-subtitle>
              <v-card-subtitle
                >Technologies used: HTML, CSS, Bootstrap</v-card-subtitle
              >
            </v-card>
            <v-card-subtitle
              ><a
                href="https://partydash.com/pages/about-us"
                target="_blank"
              ></a
            ></v-card-subtitle>
          </v-col>

          <v-col v-for="(item, i) in items" :key="i" cols="12">
            <v-card :color="item.color" dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="text-h5"
                    v-text="item.title"
                  ></v-card-title>

                  <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      v-if="item.artist === 'Ellie Goulding'"
                      class="ml-2 mt-3"
                      fab
                      icon
                      height="40px"
                      right
                      width="40px"
                    >
                      <v-icon>mdi-play</v-icon>
                    </v-btn>

                    <v-btn v-else class="ml-2 mt-5" outlined rounded small>
                      START RADIO
                    </v-btn>
                  </v-card-actions>
                </div>

                <v-avatar class="ma-3" size="125" tile>
                  <v-img :src="item.src"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
  }),
};
</script>
