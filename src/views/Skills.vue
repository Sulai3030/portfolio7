<template>
  <v-card max-width="400" class="mx-auto">
    <v-system-bar color="pink darken-2" dark>
      <v-spacer></v-spacer>
    </v-system-bar>

    <v-app-bar dark color="pink">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Technical Skills</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card color="#022770" dark>
            <v-card-title class="text-h5">
              Languages: JavaScript, Python, CSS, HTML5
            </v-card-title>

            <v-card-subtitle
              >Libraries: VueJs, React.js, React Native, Express, Node JS,
              jQuery, AJAX, Bootstrap</v-card-subtitle
            >
            <v-card-subtitle
              >Databases: MongoDB, MySQL, NoSQL, Firebase</v-card-subtitle
            >
            <v-card-subtitle>Templates: Handlebars</v-card-subtitle>
            <v-card-subtitle>Version Control: Git/GitHub </v-card-subtitle>
            <v-card-subtitle
              >Creative Cloud: Photoshop, Illustrator,
              Lightroom</v-card-subtitle
            >
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5"></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                <v-card-actions> </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" tile> </v-avatar>
            </div>
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
<style scoped></style>
