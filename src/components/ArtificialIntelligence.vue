<template>
  <v-container>
    

    <v-btn
      color="secondary"
      depressed
      elevation="2"
      outlined
      x-large
      min-height="170"
      min-width="130"
      class="rounded-xl ma-1"
      v-b-tooltip.hover title="Click this to run MRA vessel segmentation on this case."
    >
    <img 
    src="@src/components/icons/thumbnail_pokoncna_ozilje_mra.png"
    alt="MRA vessel segmentation"
    width="150" 
    height="105"
    />
    </v-btn>


    <v-btn
      color="secondary"
      depressed
      elevation="2"
      outlined
      x-large
      min-height="170"
      min-width="130"
      class="rounded-xl ma-1"
      v-b-tooltip.hover title="Click this to run CTA vessel segmentation on this case."
    >
    <img 
    src="@src/components/icons/thumbnail_pokoncna_ozilje_cta.png"
    alt="CTA vessel segmentation"
    width="150" 
    height="105"
    />
    </v-btn>
    <v-btn
      color="secondary"
      depressed
      elevation="2"
      outlined
      x-large
      min-height="170"
      min-width="130"
      class="rounded-xl ma-1"
      v-b-tooltip.hover title="Click this to run aneurysm detection on this case."
    >
    <img 
    src="@src/components/icons/thumbnail_pokoncna_anevrizma_det.png"
    alt="Aneurysm Detection"
    width="150" 
    height="105"
    />
    </v-btn>
    <v-btn
      color="secondary"
      depressed
      elevation="2"
      outlined
      x-large
      min-height="170"
      min-width="130"
      class="rounded-xl ma-1"
      v-b-tooltip.hover title="Click this to run aneurysm segmentation on this case."
    >
    <img 
    src="@src/components/icons/thumbnail_pokoncna_anevrizma_seg.png"
    alt="Aneurysm Segmentation"
    width="150" 
    height="105"
    />
    </v-btn>

  </v-container>
</template>

<style-scoped>

</style>