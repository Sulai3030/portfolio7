<template>
  <v-card class="mx-auto overflow-hidden" height="150" width="2000">
    <v-app-bar color="#022770" dark class="white--text">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Sulai Sivadel : Web Developer</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      temporary
      height="100%"
      color="#4680F2"
      class="white--text"
    >
      <v-list nav class="white--text">
        <v-list-tile
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          ><v-list-item-group
            v-model="group"
            active-class="#022770--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Applications</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text">Clients</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text"
                >Writing Experience</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text">Skills</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text">Contact</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "Home", text: "Home", route: "/" },
        { icon: "folder", text: "Applications", route: "/applications" },
        { icon: "person", text: "Clients", route: "/clients" },
        {
          icon: "person",
          text: "WritingExperience",
          route: "/writingexperience",
        },
        { icon: "person", text: "Skills", route: "/skills" },
      ],
    };
  },
};
</script>

<style></style>
