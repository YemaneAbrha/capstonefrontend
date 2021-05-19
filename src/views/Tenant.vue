<template>
  <v-sheet>
    <v-row align="center" justify="center">
      <v-container ma-5>
        <h3 class="text-center display-3 hidden-xs-only">New Registered Tenant</h3>
        <h3 class="text-center display-1 hidden-sm-and-up">New Registered Tenant</h3>
      </v-container>
    </v-row>
    <v-row align="center" justify="center">
      <v-data-table
        :headers="headers"
        :items="newRegistedUser"
        :items-per-page="3"
        class="elevation-1"
      ></v-data-table>
    </v-row>
    <v-row align="center" justify="center">
      <v-container ma-5>
        <h3 class="text-center display-3 hidden-xs-only">Rooms</h3>
        <h3 class="text-center display-1 hidden-sm-and-up">Rooms</h3>
      </v-container>
    </v-row>
    <v-row align="center" justify="center">
      <v-data-table
        :headers="headers"
        :items="newMaintenance"
        :items-per-page="3"
        class="elevation-1"
      ></v-data-table>
    </v-row>
  </v-sheet>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Full Name",
          align: "start",
          sortable: false,
          value: "fullname"
        },
        { text: "Phone Number", value: "phonenumber", sortable: false },
        { text: "Email", value: "email", sortable: false },
        { text: "Date ", value: "date", sortable: true },
        { text: "Actions", value: "actions", sortable: false }
      ],
      newRegistedUser: [
        {
          fullname: "Abebe Zegeye",
          phonenumber: "+25121314159",
          email: "abebe@gmail.com",
          date: "24-Tus-2020"
        },
        {
          fullname: "Abebe Zegeye",
          phonenumber: "+25121314159",
          email: "abebe@gmail.com",
          date: "24-Tus-2020"
        }
      ]
    };
  }
};
</script>