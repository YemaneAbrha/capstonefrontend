<template>
  <v-stepper-content step="1">
    <v-text-field v-model="data.propertyName" label="Property Name * " reqired />
    <v-text-field v-model="data.city" label="City * " reqired />
    <v-text-field v-model="data.country" label="Country * " reqired />
    <v-btn color="primary" @click="next">Continue</v-btn>
    <v-btn text to="properties">Cancel</v-btn>
  </v-stepper-content>
</template>
<script>
export default {
  props: {
    next: Function,
    rules: Object,
    data: Object
  }
};
</script>