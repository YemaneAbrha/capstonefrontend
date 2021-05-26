<template>
  <!-- <vue-pdf-app pdf="https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf"></vue-pdf-app> -->
  <!-- <vue-pdf-app pdf="contractDocumemt/CapStone_HebretBank_Contract_Draft1_20210223.pdf"></vue-pdf-app> -->
  <vue-pdf-app pdf="contractDocumemt/1.pdf"></vue-pdf-app>

</template>

<script>
import VuePdfApp from "vue-pdf-app";
// import this to use default icons for buttons
import "vue-pdf-app/dist/icons/main.css";

export default {
  components: {
    VuePdfApp
  }
};
</script>