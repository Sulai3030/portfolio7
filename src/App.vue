<template>
  <v-app class="grey" app>
    <Navbar />
    <v-main>
      <v-container fluid><router-view></router-view> </v-container>
    </v-main>

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
    return {};
  },
};
</script>
<style></style>
