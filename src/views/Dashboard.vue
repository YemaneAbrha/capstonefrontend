<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="7">
        <v-row>
          <v-col sm="12" md="6" v-for="diagram in diagrams" :key="diagram.name">
            <DonutDiagram :diagram="diagram" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import DonutDiagram from "../components/DonutDiagram";
export default {
  data() {
    return {
      diagrams: [
        {
          label: "Occupied Unit",
          value: 75,
          color: "blue",
          icon: "mdi-domain"
        },
        {
          label: "Pending M. Request",
          value: 70,
          color: "orange",
          icon: "mdi-credit-card-clock"
        },
        {
          label: "Paid Bill",
          value: 88,
          color: "green",
          icon: "mdi-text-box-check"
        },
        {
          label: "Late Payment",
          value: 20,
          color: "red",
          icon: "mdi-clock-alert"
        }
      ]
    };
  },
  methods: {
    handleSectionClick(section, event) {
      console.log(`${section.label} clicked.`);
    }
  },
  components: {
    DonutDiagram
  }
};
</script>
