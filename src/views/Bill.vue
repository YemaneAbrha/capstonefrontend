<template>
  <v-sheet>
    <v-container class="text-center" pa-15>
      <v-row>
        <v-btn block color="success" class="ml-10" outlined large to="createBill">
          <v-icon left>mdi-plus</v-icon>Create Bill
        </v-btn>
      </v-row>
    </v-container>
    <v-row align="center" justify="center">
      <v-container ma-5>
        <h3 class="text-center display-3 hidden-xs-only">Pending Fees</h3>
        <h3 class="text-center display-1 hidden-sm-and-up">Pending Fees</h3>
      </v-container>
    </v-row>
    <v-row align="center" justify="center">
      <v-data-table
        :headers="headers"
        :items="$store.state.bill"
        :items-per-page="3"
        class="elevation-1"
      ></v-data-table>
    </v-row>
    <v-row align="center" justify="center">
      <v-container ma-5>
        <h3 class="text-center display-3 hidden-xs-only">Late Fees</h3>
        <h3 class="text-center display-1 hidden-sm-and-up">Late Fees</h3>
      </v-container>
    </v-row>
    <v-row align="center" justify="center">
      <v-data-table
        :headers="headers"
        :items="$store.state.bill"
        :items-per-page="3"
        class="elevation-1"
      ></v-data-table>
    </v-row>
    <v-row align="center" justify="center">
      <v-container ma-5>
        <h3 class="text-center display-3 hidden-xs-only">Paid Fees</h3>
        <h3 class="text-center display-1 hidden-sm-and-up">Paid Fees</h3>
      </v-container>
    </v-row>
    <v-row align="center" justify="center">
      <v-data-table
        :headers="headers"
        :items="$store.state.bill"
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
          text: "Bill Title",
          align: "start",
          sortable: false,
          value: "title"
        },
        { text: "Amount", value: "amount", sortable: false },
        { text: "Description", value: "description", sortable: false },
        { text: "Due-Date ", value: "dueDate", sortable: true }
      ]
    };
  }
};
</script>