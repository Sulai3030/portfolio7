<template>
  <div class="about">
    <v-card max-width="1200" class="mx-auto">
      <v-app-bar dark color="pink">
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card color="#022770" dark>
              <v-card-title class="text-h5 text--white">
                Ambitious, user-focused Web and Software Developer with
                experience working in teams and independently. Has strong
                project management experience and experience delegating
                responsibilities to a team from time at Maximus where he
                spearheaded a project to create the audio/ADA compliant portion
                of a new healthcare plan for 1.5 million citizens of New York
                State.</v-card-title
              >
              <v-card-subtitle></v-card-subtitle>
              <v-card-actions> </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card color="#F2755E" dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h5 text--white"
                    >A flexible and quick learner committed to constantly
                    learning learning and evolving his skills to stay abreast of
                    ever-evolving technologies and trends in the industry.
                    Communicative, knowledgeable and steadfast with excellent
                    computer engineering skills learned in the Columbia
                    University Coding Bootcamp where he created projects in
                    HTML5, CSS, JavaScript, VueJS, and ReactJS.</v-card-title
                  >
                  <v-card-subtitle></v-card-subtitle>
                  <v-card-actions> </v-card-actions>
                </div>
              </div>
            </v-card>
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
        color: "",
        src: "",
        title: "",
        artist: "",
      },
      {
        color: "",
        src: "",
        title: "",
        artist: "",
      },
    ],
  }),
};
</script>
