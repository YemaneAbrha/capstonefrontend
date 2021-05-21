<template>
  <v-container>
    <v-container class="text-center" pa-15>
      <v-row>
        <v-btn block color="success" class="ml-10" outlined large to="createBill">
          <v-icon left>mdi-plus</v-icon>Create Bill
        </v-btn>
      </v-row>
    </v-container>
    <v-row align="center" justify="center">
      <v-container ma-5>
        <h3 class="text-center display-3 hidden-xs-only">New Registered Tenant</h3>
        <h3 class="text-center display-1 hidden-sm-and-up">New Registered Tenant</h3>
      </v-container>
    </v-row>
    <v-row align="center" justify="center">
      <v-data-table :headers="headers" :items="newRegistedUser" class="elevation-1">
        <template v-slot:top>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon @click="paidFee(item)" color="success">mdi-check</v-icon>
          <v-icon small @click="deleteItem(item)" color="error">mdi-delete</v-icon>
        </template>
        <template v-slot:no-data>No Data</template>
      </v-data-table>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    dialogDelete: false,
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
        date: "22-Tus-2020"
      }
    ]
  }),

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  methods: {
    paidFee(item) {
      this.editedIndex = this.$store.state.pendingBill.indexOf(item);
      console.log(item);
      this.$store.commit("addPaidFee", {
        item: item,
        index: this.editedIndex
      });
    },
    deleteItem(item) {
      this.editedIndex = this.$store.state.pendingBill.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.$store.commit("deletePendingBill", {
        index: this.editedIndex
      });
      this.closeDelete();
    },

    close() {
      // this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      this.$store.commit("editBill", {
        item: this.editedItem
      });
      this.close();
    }
  }
};
</script>