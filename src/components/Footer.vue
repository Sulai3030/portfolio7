<template>
  <v-container fluid
    ><v-footer color="#022770 " padless width="100%" max-width="100%" fluid>
      <v-layout justify-center wrap>
        <v-row justify="center" no-gutters>
          <v-col justify-center
            ><v-btn
              v-for="link in links"
              :key="link"
              color="#fff"
              text
              rounded
              class="my-2"
            >
              {{ link }}
            </v-btn>

            <v-col
              class="primary lighten-2 py-4 text-center"
              cols="auto"
              color="fff"
            >
              {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-col></v-col
          >
        </v-row>
      </v-layout>
    </v-footer></v-container
  >
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
