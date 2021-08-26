<template>
  <v-card max-width="400" class="mx-auto">
    <v-system-bar color="pink darken-2" dark>
      <v-spacer></v-spacer>
    </v-system-bar>

    <v-app-bar dark color="pink">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Skills</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card color="##4680F2" dark>
            <v-card-title class="text-h5"> Skills </v-card-title>
            <v-card-subtitle
              >Languages: JavaScript, Python, CSS, HTML5</v-card-subtitle
            >
            <v-card-actions>
              <v-btn text> </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "",
        title: "",
        artist: "",
      },
      {
        color: "#952175",
        src: "",
        title: "",
        artist: "",
      },
    ],
  }),
};
</script>
