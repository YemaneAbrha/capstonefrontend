<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-container ma-5>
        <h3 class="text-center display-3 hidden-xs-only">Available Rooms</h3>
        <h3 class="text-center display-1 hidden-sm-and-up">Available Rooms</h3>
      </v-container>
    </v-row>
    <v-row align="center" justify="center">
      <v-data-table :headers="headers" :items="$store.state.available" class="elevation-1">
        <template v-slot:top>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="declineTenantConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:item.actions="{ item }">
          <!-- <template v-slot:label> -->
          <!-- <div> -->
          <!-- </template> -->
          <!-- <v-icon small @click="approveTenant(item)" color="info">mdi-more</v-icon> -->
          <v-btn text color="success" @click="allocate(item)">allocate</v-btn>
        </template>
        <template v-slot:no-data>No Data</template>
      </v-data-table>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Unit Name",
          align: "start",
          sortable: false,
          value: "unitName"
        },
        { text: "Floor Number", value: "floorNumber", sortable: false },
        { text: "Total Area", value: "totalArea", sortable: false },
        { text: "Billable Area ", value: "billableArea", sortable: false },
        { text: "Actions", value: "actions", sortable: false }
      ]
    };
  },
  methods: {
    allocate(item) {
      console.log("Hahaahah Yemane Abrha");
    }
  }
};
</script>