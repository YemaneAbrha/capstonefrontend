<template>
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
</template>