<template>
  <v-stepper-content step="1">
    <v-text-field v-model="data.unitName" label="Unit Name * " reqired />
    <v-text-field v-model="data.floorNumber" label="Floor Number * " reqired />
    <v-text-field v-model="data.totalArea" label="Total Area * " suffix="m2" reqired />
    <v-text-field v-model="data.billableArea" label="Billable Area * " suffix="m2" reqired />
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