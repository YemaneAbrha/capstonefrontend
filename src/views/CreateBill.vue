<template>
  <v-sheet height="sheetHeight">
    <v-container class="fill-hight">
      <v-container ma-5></v-container>
      <v-card class="mx-auto" outlined>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="4" offset-sm="1" offset-md="2">
                <v-text-field v-model="title" :rules="titleRules" label="Title *" required></v-text-field>
              </v-col>

              <v-col cols="12" md="4" offset-sm="1" offset-md="2">
                <v-text-field v-model="amount" :rules="amountRules" label="Amount *" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4" offset-sm="1" offset-md="2">
                <v-textarea v-model="description" label="Description" :rules="descriptionRule"></v-textarea>
              </v-col>
              <v-col cols="12" md="4" offset-sm="1" offset-md="2">
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="date"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="date" label="Due-Date" readonly v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="date" scrollable>
                    <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
                <v-spacer></v-spacer>
                <v-file-input show-size label="Bill Document" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="8" offset-sm="1" offset-md="2">
                <v-btn
                  block
                  color="success"
                  class="ml-10"
                  @click="createBill()"
                  outlined
                  large
                >Submit</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-container>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    title: "",
    amount: "",
    description: "",
    titleRules: [v => !!v || "Title is required"],
    amountRules: [v => !!v || "Amount is required"],
    descriptionRule: [v => !!v || "Description is required"],
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false
  }),
  methods: {
    createBill() {
      this.$store.commit("addBill", {
        title: this.title,
        amount: this.amount,
        description: this.description,
        dueDate: this.date
      });
    }
  }
};
</script>