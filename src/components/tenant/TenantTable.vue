<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-container ma-5>
        <h3 class="text-center display-3 hidden-xs-only">Tenants</h3>
        <h3 class="text-center display-1 hidden-sm-and-up">Tenants</h3>
      </v-container>
    </v-row>
    <v-row align="center" justify="center">
      <v-data-table
        :headers="headers"
        :items="$store.state.newRegisteredTenant"
        class="elevation-1"
      >
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
          <v-icon @click="approveTenant(item)" color="info">mdi-info</v-icon>more
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
    ]
  }),

  watch: {
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },

  methods: {
    approveTenant(item) {
      this.editedIndex = this.$store.state.pendingBill.indexOf(item);
      this.$store.commit("approveTenant", {
        item: item,
        index: this.editedIndex
      });
    },
    declineTenant(item) {
      this.editedIndex = this.$store.state.newRegisteredTenant.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    declineTenantConfirm() {
      this.$store.commit("declineTenant", {
        index: this.editedIndex
      });
      this.closeDelete();
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {});
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