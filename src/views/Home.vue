<template>
  <div class="home">
    <v-sheet
      color="#gray"
      elevation="24"
      height="1200"
      outlined
      rounded
      shaped
      width="1400"
    >
      <div class="headline">
        <v-card max-width="1000" class="mx-auto">
          <v-system-bar color="pink darken-2" dark> </v-system-bar>
          <v-spacer></v-spacer>
          <v-container height="800">
            <v-row>
              <v-col cols="12">
                <v-card color="#4680F2" dark>
                  <v-card-title> </v-card-title>
                  <v-card-subtitle class="text-h4"
                    >Ambitious, user-focused Web and Software Developer with
                    experience working in teams and independently. Has strong
                    project management experience and experience delegating
                    responsibilities to a team from time at Maximus where he
                    spearheaded a project to create the audio/ADA compliant
                    portion of a new healthcare plan for 1.5 million citizens of
                    New York State.</v-card-subtitle
                  >
                  <v-card-actions> </v-card-actions>
                </v-card>
              </v-col>

              <v-col>
                <v-card color="#7DA628" dark>
                  <v-card-title> </v-card-title>
                  <v-card-subtitle class="text-h4"
                    >A flexible and quick learner committed to constantly
                    learning learning and evolving his skills to stay abreast of
                    ever-evolving technologies and trends in the industry.
                    Communicative, knowledgeable and steadfast with excellent
                    computer engineering skills learned in the Columbia
                    University Coding Bootcamp where he created projects in
                    HTML5, CSS, JavaScript, VueJS, and ReactJS.</v-card-subtitle
                  >
                  <v-card-actions> </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
  }),
};
</script>
