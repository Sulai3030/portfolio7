<template>
  <v-app app dark>
    <v-card
      ><Navbar />
      <v-btn
        v-for="link in links"
        :key="`${link.label}-footer-link`"
        text
        rounded
        class="my-2"
        :to="link.url"
        color="#4680F2"
        elevation="24"
        outlined
        raised
        width="200"
        tile
        >{{ link.label }}</v-btn
      >
      <router-view></router-view
    ></v-card>
    <Footer />
  </v-app>
</template>
<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: { Navbar, Footer },
  data() {
    return {
      links: [
        {
          label: "Home",
          url: "/",
        },
        {
          label: "Applications",
          url: "/Applications",
        },
        {
          label: "Clients",
          url: "/Clients",
        },
        {
          label: "WritingExperience",
          url: "/WritingExperience",
        },
        {
          label: "Skills",
          url: "/Skills",
        },
        {
          label: "Contact",
          url: "/Contact",
        },
      ],
    };
  },
};
</script>
<style>
.v-application--wrap {
  height: 100vh !important;
}
</style>
