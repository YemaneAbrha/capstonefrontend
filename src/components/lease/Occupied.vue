<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-container ma-5>
        <h3 class="text-center display-3 hidden-xs-only">Occupied Rooms</h3>
        <h3 class="text-center display-1 hidden-sm-and-up">Occupied Rooms</h3>
      </v-container>
    </v-row>
    <v-row align="center" justify="center">
      <v-data-table
        :headers="headers"
        :items="$store.state.occupied"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            scrollable
          >
            <v-card tile>
              <v-toolbar flat max-height="50">
                <v-btn icon @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Detail</v-toolbar-title>
              </v-toolbar>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="4">
                      <h3>
                        Unit Name
                      </h3>
                      <h3>
                        Unit Name
                      </h3>
                      <h3>
                        Unit Name
                      </h3>
                      <h3>
                        Unit Name
                      </h3>
                      <h3>
                        Unit Name
                      </h3>
                      <!-- <v-text-field v-model="title" :rules="titleRules" label="Title *" required></v-text-field>
                <v-text-field v-model="title" :rules="titleRules" label="Title *" required></v-text-field> -->
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent accumsan tincidunt lectus, sed pulvinar leo
                      fringilla et. Curabitur ornare lorem at libero pretium, et
                      porttitor enim volutpat. Suspendisse imperdiet neque vitae
                      risus facilisis, non tempor magna convallis. Nunc enim mi,
                      posuere in purus auctor, congue posuere massa. Cras
                      commodo dui sed fringilla scelerisque. Vestibulum
                      convallis tempor quam, vitae mollis mauris. Sed blandit
                      libero arcu, at porta leo tristique et. Sed vitae
                      tincidunt ligula. Nulla ac placerat dolor. Fusce
                      vestibulum nibh vitae risus imperdiet, vitae mattis nunc
                      rhoncus. Quisque eget ante nunc. Pellentesque enim massa,
                      finibus dignissim quam sed, fringilla mollis ex. Quisque
                      sed dui arcu. Nulla tristique ante in maximus tempus.
                      Aliquam erat volutpat. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus. Vestibulum nec orci at lacus
                      sollicitudin dictum eget sit amet est. Aliquam erat
                      volutpat. Morbi fermentum finibus pretium. Nam ac lorem id
                      dolor auctor vulputate. Vivamus pharetra nisi ac eros
                      lacinia tempor. Proin tincidunt arcu auctor erat tincidunt
                      ornare vel nec ipsum. Phasellus tempor volutpat odio et
                      pulvinar. Etiam eu tristique mauris. Pellentesque
                      fringilla finibus tortor, eget ornare enim aliquet et.
                      Integer in rutrum dolor. Nunc pretium condimentum sem a
                      accumsan. Morbi mi arcu, ultrices non augue eget, lacinia
                      interdum magna. Proin vestibulum ipsum non
                    </v-col>
                    <v-col cols="88" sm="12" md="8">
                      <PDFReader />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small @click="more(item)" color="info">mdi-more</v-icon>
        </template>
        <template v-slot:no-data>No Data</template>
      </v-data-table>
    </v-row>
  </v-container>
</template>
<script>
import PDFReader from "../PDFReader";
export default {
  data: () => ({
    headers: [
      {
        text: "Unit Name",
        align: "start",
        sortable: false,
        value: "unitName",
      },
      { text: "Floor Number", value: "floorNumber", sortable: false },
      { text: "Total Area", value: "totalArea", sortable: false },
      { text: "Billable Area ", value: "billableArea", sortable: false },
      { text: "Rental Rate ", value: "rentalRate", sortable: false },
      { text: "Tenant ", value: "tenant", sortable: false },
      { text: "Payment Period ", value: "paymentPeriod", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    dialog: false,
    date: new Date().toISOString().substr(0, 10),

    detailItem: {
      id: "",
      title: "",
      amount: 0,
      description: 0,
      date: 0,
    },
  }),
  computed: {
    formTitle() {
      return "Edit Bill";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
  components: {
    PDFReader,
  },
  methods: {
    more(item) {
      this.detailItem = Object.assign({}, item);
      this.dialog = true;
    },
    save() {
      this.$store.commit("editBill", {
        item: this.editedItem,
      });
      this.close();
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>
