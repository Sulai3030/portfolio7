<template>
  <v-app>
    <v-app-bar app color="#022770">
      <v-toolbar-title> Sulai Sivadel : Web Developer </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn rounded v-for="link in links" :key="link"> {{ link }}</v-btn>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: [
        "Home",
        "About",
        "Applications",
        "Clients",
        "WritingExperience",
        "Skills",
      ],
    };
  },
};
</script>

<style></style>
