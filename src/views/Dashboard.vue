<template>
  <v-col>
    <v-row>
      <v-card max-width="400" elevation="0">
        <v-row class="pa-10" align="center">
          <v-col>
            <h1>54</h1>
            <h3>Occupied Unit</h3>
          </v-col>
          <vc-donut
            background="white"
            foreground="grey"
            :size="100"
            unit="px"
            :thickness="10"
            :sections="sections"
            :total="100"
            :start-angle="0"
            :auto-adjust-text-size="true"
            @section-click="handleSectionClick"
          >
            <v-icon color="black" size="100" x-large>mdi-domain</v-icon>
          </vc-donut>
        </v-row>
      </v-card>
      <v-card max-width="400" class="md-2 lg-3">
        <v-row class="pa-10" align="center">
          <v-col>
            <h1>54</h1>
            <h3>Occupied Unit</h3>
          </v-col>
          <vc-donut
            background="white"
            foreground="grey"
            :size="100"
            unit="px"
            :thickness="10"
            :sections="sections"
            :total="100"
            :start-angle="0"
            :auto-adjust-text-size="true"
            @section-click="handleSectionClick"
          >
            <v-icon color="black" size="100" x-large>mdi-domain</v-icon>
          </vc-donut>
        </v-row>
      </v-card>
    </v-row>
    <v-row>
      <v-card max-width="400" class="md-2 lg-3">
        <v-row class="pa-10" align="center">
          <v-col>
            <h1>54</h1>
            <h3>Occupied Unit</h3>
          </v-col>
          <vc-donut
            background="white"
            foreground="grey"
            :size="100"
            unit="px"
            :thickness="10"
            :sections="sections"
            :total="100"
            :start-angle="0"
            :auto-adjust-text-size="true"
            @section-click="handleSectionClick"
          >
            <v-icon color="black" size="100" x-large>mdi-domain</v-icon>
          </vc-donut>
        </v-row>
      </v-card>
      <v-card max-width="400" class="md-2 lg-3">
        <v-row class="pa-10" align="center">
          <v-col>
            <h1>54</h1>
            <h3>Occupied Unit</h3>
          </v-col>
          <vc-donut
            background="white"
            foreground="grey"
            :size="100"
            unit="px"
            :thickness="10"
            :sections="sections"
            :total="100"
            :start-angle="0"
            :auto-adjust-text-size="true"
            @section-click="handleSectionClick"
          >
            <v-icon color="black" size="100" x-large>mdi-domain</v-icon>
          </vc-donut>
        </v-row>
      </v-card>
    </v-row>
  </v-col>
</template>
<script>
import DonutDiagram from "../components/DonutDiagram";
export default {
  data() {
    return {
      sections: [
        { label: "Occupied", value: 75, color: "green" }
        //   { label: 'Un-Occupied', value: 25, color: 'primary' },

        //   { label: 'Blue section', value: 25, color: 'blue' }
      ]
    };
  },
  methods: {
    handleSectionClick(section, event) {
      console.log(`${section.label} clicked.`);
    }
  },
  components: {}
};
</script>
