<template>
  <v-card max-width="320" height="200px" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <!-- <div class="overline mb-4">OVERLINE</div> -->
        <v-list-item-title class="headline mb-1">
          <h1>{{diagram.value}}</h1>
        </v-list-item-title>
        <v-list-item-subtitle>
          <h3>{{diagram.label}}</h3>
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar size="100" color="grey">
        <vc-donut
          background="white"
          foreground="grey"
          :size="100"
          unit="px"
          :thickness="20"
          :sections="[diagram]"
          :total="100"
          :start-angle="0"
          :auto-adjust-text-size="true"
          @section-click="handleSectionClick"
        >
          <v-icon color="black" size="100" x-large>{{diagram.icon}}</v-icon>
        </vc-donut>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>
<script>
export default {
  props: {
    diagram: Object
  }
};
</script>
         
                
