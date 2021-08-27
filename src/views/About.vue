<template>
  <div class="about">
    <div class="about">
      <v-card class="mx-auto">
        <v-system-bar color="pink darken-2" dark> </v-system-bar>
        <v-spacer></v-spacer>
        <v-container height="1450">
          <v-row>
            <v-col cols="12">
              <v-card color="#4680F2" dark max-height="1000">
                <v-card-title class="text-h5">
                  Ambitious, user-focused Web and Software Developer with
                  experience working in teams and independently. Has strong
                  project management experience and experience delegating
                  responsibilities to a team from time at Maximus where he
                  spearheaded a project to create the audio/ADA compliant
                  portion of a new healthcare plan for 1.5 million citizens of
                  New York State.</v-card-title
                >

                <v-card-subtitle></v-card-subtitle>

                <v-card-actions> </v-card-actions>
              </v-card>
            </v-col>

            <v-col>
              <v-card color="#7DA628" dark>
                <v-card-title class="text-h5"> </v-card-title>

                <v-card-subtitle
                  >A flexible and quick learner committed to constantly learning
                  learning and evolving his skills to stay abreast of
                  ever-evolving technologies and trends in the industry.
                  Communicative, knowledgeable and steadfast with excellent
                  computer engineering skills learned in the Columbia University
                  Coding Bootcamp where he created projects in HTML5, CSS,
                  JavaScript, VueJS, and ReactJS.</v-card-subtitle
                >
                <v-card-actions> </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
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
