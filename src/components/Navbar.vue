<template>
  <nav>
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase color=#022770">
        <span>Sulai</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="#022770"></v-btn>
    </v-toolbar>

    <v-navigation-drawer
      app
      v-model="drawer"
      class="#022770"
    ></v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "Home", text: "Home", route: "/" },
        { icon: "Folder", text: "Applications", route: "/applications" },
        { icon: "Person", text: "Clients", route: "/clients" },
        {
          icon: "Person",
          text: "WritingExperience",
          route: "/writingexperience",
        },
        { icon: "Person", text: "Skills", route: "/skills" },
      ],
    };
  },
};
</script>

<style></style>
