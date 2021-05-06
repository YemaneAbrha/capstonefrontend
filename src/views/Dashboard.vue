<template>
    <v-card >
        <v-row class="pa-10" align="center">
        <v-col >
            <h1>54</h1>
            <h1>Occupied Unit</h1>
        </v-col>
        <vc-donut
             background="white" foreground="grey"
             :size="100" unit="px" :thickness="10"
             :sections="sections" :total="100"
             :start-angle="0" :auto-adjust-text-size="true"
             @section-click="handleSectionClick">
             <v-icon color="black" size="100" x-large >mdi-domain</v-icon>
        </vc-donut>
    </v-row>
    </v-card>
    
  
</template>
<script>
  export default {
    data() {
      return {
        sections: [
          { label: 'Occupied', value: 75, color: 'green' },
        //   { label: 'Un-Occupied', value: 25, color: 'primary' },
          
        //   { label: 'Blue section', value: 25, color: 'blue' }
        ]
      };
    },
    methods: {
      handleSectionClick(section, event) {
        console.log(`${section.label} clicked.`);
      }
    }
  };
</script>