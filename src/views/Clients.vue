<template>
  <div class="clients">
    <v-card max-width="1200" class="mx-auto">
      <v-system-bar color="pink darken-2" dark>
        <v-spacer></v-spacer>
      </v-system-bar>

      <v-app-bar dark color="pink">
        <v-toolbar-title>Clients</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>

      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card color="##4680F2" dark elevation="24" outlined shaped>
              <v-card-title class="text-h5">
                BlackHealthMatters.com
              </v-card-title>

              <v-card-subtitle class="white--text"
                ><a
                  href="https://blackhealthmatters.com/lauren-lee-talks-kidney-disease-breakthroughs/"
                  target="_blank"
                >
                  <span class="md-list-item-text"
                    >Lauren Lee talks kidney disease breakthroughs
                  </span></a
                >
              </v-card-subtitle>
              <v-card-subtitle class="white--text"
                ><a
                  href="https://blackhealthmatters.com/is-there-a-light-at-the-end-of-the-dark-tunnel-of-kidney-disease-in-children/"
                  target="_blank"
                >
                  <span class="md-list-item-text"
                    >Is There a Light at the End of the Dark Tunnel of Kidney
                    Disease in Children?" - An Interview with Dr. Gbadegesin
                  </span></a
                >
              </v-card-subtitle>
              <v-card-subtitle class="white--text"
                ><a
                  href="https://blackhealthmatters.com/working-with-your-doctor-when-you-have-kidney-disease-empowering-yourself-to-be-an-advocate-for-you"
                  target="_blank"
                >
                  <span class="md-list-item-text"
                    >Working with your doctor when you have kidney disease
                    empowering yourself to be an advocate for you/
                  </span></a
                >
              </v-card-subtitle>
              <v-card-subtitle class="white--text"
                ><a
                  href="https://blackhealthmatters.com/working-with-your-doctor-when-you-have-kidney-disease-empowering-yourself-to-be-an-advocate-for-you/"
                  target="_blank"
                >
                  <span class="md-list-item-text"
                    >Working with your doctor when you have kidney disease
                    empowering yourself to be an advocate for you/
                  </span></a
                >
              </v-card-subtitle>
              <v-card-subtitle class="white--text"
                ><a
                  href="https://blackhealthmatters.com/kidney-disease/what-is-fsgs/"
                  target="_blank"
                >
                  <span class="md-list-item-text">What is FSGS? </span></a
                >
              </v-card-subtitle>
              <v-card-subtitle class="white--text"
                ><a
                  href="https://blackhealthmatters.com/kidney-disease/truth-about-chronic-kidney-disease/"
                  target="_blank"
                >
                  <span class="md-list-item-text"
                    >The Truth About Chronic Kidney Disease
                  </span></a
                >
              </v-card-subtitle>
              <v-card-subtitle class="white--text"
                ><a
                  href="https://blackhealthmatters.com/clinical-trials/how-can-i-find-a-clinical-trial/"
                  target="_blank"
                >
                  <span class="md-list-item-text"
                    >How Can I Be In A Clinical Trial?
                  </span></a
                >
              </v-card-subtitle>
              <v-card-title class="text-h5" dark elevation="24" outlined shaped
                >New York Medicaid Choice</v-card-title
              >
              <v-card-subtitle class="white--text"
                ><a href="https://nymedicaidchoice.com/	" target="_blank">
                  <span class="md-list-item-text"
                    >New York Medicaid Choice
                  </span></a
                >
              </v-card-subtitle>
              <v-card-actions> </v-card-actions>
            </v-card>
          </v-col>

          <v-col v-for="(item, i) in items" :key="i" cols="12"> </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
a {
  color: gold;
}
</style>
