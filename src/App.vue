<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar app> <!-- --><Navbar /> </v-app-bar>
 <v-container app>
    <!-- Sizes your content based upon application components -->
    <v-main app>
      <!-- Provides the application the proper gutter -->
     
        <v-row
          ><v-col>
            <v-card elevation="24" outlined shaped>
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
            </v-card>
          </v-col></v-row
        >
        <!-- If using vue-router -->
        <router-view></router-view>
  
    </v-main>
    </v-container>
    <v-footer app> <!-- --><Footer /> </v-footer>
  </v-app>
  <!-- App.vue -->
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
<style></style>
