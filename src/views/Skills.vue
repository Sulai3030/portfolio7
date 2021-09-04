<template>
  <div class="skills">
    <v-card max-width="1200" class="mx-auto">
      <v-system-bar color="pink darken-2" dark>
        <v-spacer></v-spacer>
      </v-system-bar>
      <v-app-bar dark color="pink">
        <v-toolbar-title>Skills</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card color="#4680F2" dark>
              <v-card-title class="text-h5"></v-card-title>
              <v-card-subtitle
                >Languages: JavaScript, Python, CSS, HTML5</v-card-subtitle
              >

              <v-card-subtitle
                >Libraries: VueJs, React.js, React Native, Express, Node JS,
                jQuery, AJAX, Bootstrap</v-card-subtitle
              >
              <v-card-subtitle
                >Databases: MongoDB, MySQL, NoSQL, Firebase</v-card-subtitle
              >
              <v-card-subtitle>Templates: Handlebars</v-card-subtitle>
              <v-card-subtitle>Version Control: Git/GitHub</v-card-subtitle>
              <v-card-subtitle>Testing: Jest/Enzyme</v-card-subtitle>
              <v-card-subtitle>Platforms: Drupal, WordPress</v-card-subtitle>
              <v-card-subtitle
                >Collaboration Software: Slack, Salesforce</v-card-subtitle
              >
              <v-card-subtitle
                >Creative Cloud: Photoshop, Illustrator,
                Lightroom</v-card-subtitle
              >
              <v-card-subtitle>Image Editors: GIMP, Photoshop</v-card-subtitle>
              <v-card-subtitle
                >Amazon Web Services (AWS)</v-card-subtitle
              ></v-card
            >
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
<style scoped>
a {
  color: gold;
}
</style>
