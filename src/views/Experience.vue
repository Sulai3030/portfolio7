<template>
  <v-card class="mx-auto" max-width="1450">
    <v-toolbar color="pink" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-list two-line>
      <v-list-item-group v-model="selected" active-class="pink--text" multiple>
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>

                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.headline"
                ></v-list-item-subtitle>

                <v-list-item-subtitle :href="link.url" target="_blank"
                  >{{ link.text }} v-text="item.subtitle"
                  ></v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text
                  v-text="item.action"
                ></v-list-item-action-text>

                <v-icon v-if="!active" color="grey lighten-1"> </v-icon>

                <v-icon v-else color="yellow darken-3"> </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    selected: [2],
    items: [
      {
        action: "",
        headline: "",
        subtitle: `:href="https://blackhealthmatters.com/lauren-lee-talks-kidney-disease-breakthroughs/"
              target="_blank"
            `,
        title: "Lauren Lee talks kidney disease breakthroughs",
      },
      {
        action: "",
        headline: "",
        subtitle: `:href="https://blackhealthmatters.com/working-with-your-doctor-when-you-have-kidney-disease-empowering-yourself-to-be-an-advocate-for-you//"
              target="_blank"
            `,
        title: `Working with your doctor when you have kidney disease
                empowering yourself to be an advocate for you"`,
      },
      {
        action: "",
        headline: "",
        subtitle: `:href="https://blackhealthmatters.com/is-there-a-light-at-the-end-of-the-dark-tunnel-of-kidney-disease-in-children/"
              target="_blank"
            >"`,
        title: `"Is There a Light at the End of the Dark Tunnel of Kidney
                Disease in Children?" - An Interview with Dr. Gbadegesin"`,
      },
      {
        action: "",
        headline:
          "Regularly manage social media platforms to advertise webcontent",
        subtitle: "Wrote, cooked and tested new recipes for Examiner.com",
        title: "Examiner.com 2009 - 2017",
      },
      {
        action: "",
        headline:
          "Performed Quality Assurance on the company’s web pages to improve readability and page rank in Google searches",
        subtitle:
          "Proofread and wrote (15-20) articles and promotional copy to adhere to SEO best practices which resulted in increased readership",
        title: "The Princeton Review.com 2015",
      },
      {
        action:
          "Performed Quality Assurance on the company’s web pages to improve readability and page rank in Google searches",
        headline:
          "Edited and proofread educational materials to ensure accuracy and consistency of information. Designed and formulated writing exercises and study questions (20+) for each chapter in text and online versions",
        subtitle:
          "Assisted Executive Editor for English Composition and Literature by researching, proofing and writing supplemental materials for an ‘Introduction Level English Textbook",
        title: "Pearson Education 2013 - 2014",
      },
      {
        action: "",
        headline:
          "Wrote multiple daily posts of varying length about upcoming Hollywood movies on deadline",
        subtitle: "https://screenrant.com/author/sulai/",
        title: "ScreenRant.com",
      },
    ],
  }),
};
</script>
