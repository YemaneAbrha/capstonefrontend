<template>
  <v-sheet>
    <v-container class="text-center" pa-15>
      <v-row>
        <v-btn block color="success" class="ml-10" outlined large to="createBill">
          <v-icon left>mdi-plus</v-icon>Create Bill
        </v-btn>
      </v-row>
    </v-container>
    <PendingFee />
    <LateFee />
    <PaidFee />
  </v-sheet>
</template>
<script>
import PendingFee from "../components/bill/PendingFee";
import PaidFee from "../components/bill/PaidFee";
import LateFee from "../components/bill/LateFee";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
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
      { text: "Due-Date", value: "dueDate", sortable: true },
      { text: "Actions", value: "actions", sortable: false }
    ],
    editedIndex: -1,
    editedItem: {
      id: "",
      title: "",
      amount: 0,
      description: 0,
      date: 0
    }
  }),

  computed: {
    formTitle() {
      return "Edit Bill";
    }
  },
  components: {
    PendingFee,
    PaidFee,
    LateFee
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  methods: {
    editItem(item) {
      console.trace();
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.$store.state.pendingBill.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.$store.commit("deleteBill", {
        index: this.editedIndex
      });
      this.closeDelete();
    },

    close() {
      this.dialog = false;
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