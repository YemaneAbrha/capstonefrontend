<template>
  <v-stepper-content step="2">
    <v-text-field
      v-model="data.propertyName"
      :rules="[rules.required]"
      label="Rental Rate * "
      reqired
    />
    <v-select :items="items" label="Tenant" />
    <v-file-input show-size label="Contract Doucment" />
    <!-- <v-text-field v-model="data.city" label="City * " reqired /> -->
    <!-- <v-col class="d-flex" cols="12" sm="6"> -->

    <!-- </v-col> -->
    <v-btn color="primary" to="properties">Submit</v-btn>
    <v-btn text @click="previous">Back</v-btn>
  </v-stepper-content>
</template>
<script>
export default {
  props: {
    next: Function,
    previous: Function,
    rules: Object,
    data: Object
  }
};
</script>