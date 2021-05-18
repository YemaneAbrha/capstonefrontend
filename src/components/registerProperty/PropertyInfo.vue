<template>
  <v-stepper-content step="1">
    <v-text-field v-model="data.propertyName" label="Unit Name * " reqired />
    <v-text-field label="Floor Number * " reqired />

    <v-text-field v-model="data.city" label="Total Area * " suffix="m2" reqired />
    <v-text-field v-model="data.country" label="Billable Area * " suffix="m2" reqired />
    <V-container>
      <v-row>
        <v-btn text to="properties">Cancel</v-btn>
        <v-spacer></v-spacer>

        <v-btn color="primary" @click="next">Continue</v-btn>
      </v-row>
    </V-container>
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