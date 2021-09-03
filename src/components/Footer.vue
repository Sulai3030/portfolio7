<template>
  <v-footer color="#022770 " padless>
    <v-row justify="center" no-gutters wrap>
      <v-btn
        v-for="link in links"
        :key="link"
        color="#fff"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center" cols="12" color="fff">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    links: [
      "Home",
      "Applications",
      "Clients",
      "Writing Experience",
      "Skills",
      "Contact Us",
    ],
  }),
};
</script>
