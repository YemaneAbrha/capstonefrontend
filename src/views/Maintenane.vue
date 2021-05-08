<template>
  <v-sheet height="sheetHeight">
    <v-container class="fill-hight">
      <v-row align="center" justify="center">
        <v-container ma-5>
          <h5 class="text-center display-3 hidden-xs-only">New Maintenance Request</h5>
          <h6 class="text-center display-1 hidden-sm-and-up">New Maintenance Request</h6>
        </v-container>
      </v-row>
      <v-row align="center" justify="center">
        <v-data-table
          :headers="headers"
          :items="newMaintenance"
          :items-per-page="4"
          class="elevation-1"
        ></v-data-table>
      </v-row>
      <v-row align="center" justify="center">
        <br />
        <v-container ma-5>
          <h3 class="text-center display-3 hidden-xs-only">Assigned Maintenace Request</h3>
          <h3 class="text-center display-1 hidden-sm-and-up">Assigned Maintenace Request</h3>
        </v-container>
      </v-row>
      <v-row align="center" justify="center">
        <v-data-table
          :headers="headers"
          :items="newMaintenance"
          :items-per-page="4"
          class="elevation-1"
        ></v-data-table>
      </v-row>
    </v-container>
    <!-- <h1>Maintenance</h1> -->
  </v-sheet>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Maintenance Type",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Tenant Name", value: "tenant", sortable: false },
        { text: "Property", value: "property", sortable: false },
        { text: "Date ", value: "date", sortable: true }
      ],
      newMaintenance: [
        {
          name: "Frozen Yogurt",
          tenant: 159,
          property: 6.0,
          date: "24-Tus-2020"
        },
        {
          name: "Ice cream sandwich",
          tenant: 237,
          property: 9.0,
          date: "23-Tus-2031"
        },
        {
          name: "Eclair",
          tenant: 262,
          property: 16.0,
          date: "23-Tus-2031"
        },
        {
          name: "Cupcake",
          tenant: 305,
          property: 3.7,
          date: "23-Tus-2031"
        },
        {
          name: "Gingerbread",
          tenant: 356,
          property: 16.0,
          date: "23-Tus-2031"
        },
        {
          name: "Jelly bean",
          tenant: 375,
          property: 0.0,
          date: "23-Tus-2031"
        },
        {
          name: "Lollipop",
          tenant: 392,
          property: 0.2,
          date: "23-Tus-2031"
        },
        {
          name: "Honeycomb",
          tenant: 408,
          property: 3.2,
          date: "23-Tus-2031"
        },
        {
          name: "Donut",
          tenant: 452,
          property: 25.0,
          date: "23-Tus-2031"
        },
        {
          name: "KitKat",
          tenant: 518,
          property: 26.0,
          date: "23-Tus-2031"
        },
        {
          name: "Ice cream sandwich",
          tenant: 237,
          property: 9.0,
          date: "23-Tus-2031"
        },
        {
          name: "Eclair",
          tenant: 262,
          property: 16.0,
          date: "23-Tus-2031"
        }
      ]
    };
  }
};
</script>