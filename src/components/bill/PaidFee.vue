<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-container ma-5>
        <h3 class="text-center display-3 hidden-xs-only">Paid Fees</h3>
        <h3 class="text-center display-1 hidden-sm-and-up">Paid Fees</h3>
      </v-container>
    </v-row>
    <v-row align="center" justify="center">
      <v-data-table :headers="headers" :items="$store.state.paidFee" class="elevation-1"></v-data-table>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    headers: [
      {
        text: "Title",
        align: "start",
        sortable: false,
        value: "title"
      },
      { text: "Amount", value: "amount", sortable: true },
      { text: "Description", value: "description", sortable: false },
      { text: "Due-Date", value: "dueDate", sortable: true }
    ]
  }),

  computed: {
    formTitle() {
      return "Edit Bill";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  methods: {}
};
</script>