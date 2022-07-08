<template>
  <v-card>
    <v-card-title>AVA diagnostics</v-card-title>
    <v-card-text>
      AVA diagnostics is a free web application for visualizing and annotating medical images stored in
      DICOM, NRRD, NIFTI, and other file formats and was developed using <a>Kitware</a> open source
      templates on top of the <a>itk.js</a> and <a>vtk.js</a> toolkits.
    </v-card-text>
  </v-card>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'AboutBox',
});
</script>
