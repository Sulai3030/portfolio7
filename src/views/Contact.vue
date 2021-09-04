<template>
  <div class="contact">
    <v-card max-width="1200" class="mx-auto">
      <v-system-bar color="pink darken-2" dark> </v-system-bar>
      <v-spacer></v-spacer>
      <v-container height="800">
        <v-row>
          <v-col cols="12">
            <v-card color="##F2755E" dark>
              <v-card-title> </v-card-title>
              <v-card-subtitle class="text-h5">
                <p class="white--text">
                  <a href="mailto:sulai3030@gmail.com"
                    >Please Contact Me via email sulai3030 (at) gmail) (dot) com
                  </a>
                </p>
              </v-card-subtitle>
              <v-card-actions> </v-card-actions>
            </v-card>
          </v-col>

          <v-col>
            <v-card color="#7DA628" dark>
              <v-card-title> </v-card-title>
              <v-card-subtitle class="text-h5"></v-card-subtitle>
              <v-card-actions> </v-card-actions>
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
<style scoped></style>
