<template>
  <v-container>
    <v-stepper-content step="2">
      <v-select :items="items" label="Unit Name" />

      <v-text-field
        v-model="data.propertyName"
        :rules="[rules.required]"
        label="Rental Rate * "
        suffix="ETB / m2"
        type="number"
        reqired
      />

      <v-select :items="items" label="Tenant" />
      <v-file-input show-size label="Contract Doucment" />
      <v-container>
        <v-row>
          <v-col>Payment Period</v-col>
          <!-- <v-container> -->
          <v-radio-group v-model="radios">
            <v-col>
              <v-row>
                <v-col>
                  <v-radio value="monthly">
                    <template v-slot:label>
                      <!-- <div> -->
                      <strong>Monthly</strong>
                      <!-- </div> -->
                    </template>
                  </v-radio>
                </v-col>

                <v-spacer></v-spacer>
                <v-col>
                  <v-radio value="bi_annual">
                    <template v-slot:label>
                      <div>
                        <strong>Bi-Annual</strong>
                      </div>
                    </template>
                  </v-radio>
                </v-col>
              </v-row>
              <!-- <v-spacer></v-spacer> -->
              <v-row>
                <v-col>
                  <v-radio value="Annualy">
                    <template v-slot:label>
                      <!-- <div> -->
                      <strong>Annualy</strong>
                      <!-- </div> -->
                    </template>
                  </v-radio>
                </v-col>

                <v-spacer></v-spacer>
                <v-col>
                  <v-text-field label="Custom" suffix="Years" type="number" />
                </v-col>
              </v-row>
              <v-row></v-row>
            </v-col>
          </v-radio-group>

          <!-- </v-container> -->
        </v-row>
      </v-container>

      <!-- <v-text-field v-model="data.city" label="City * " reqired /> -->
      <!-- <v-col class="d-flex" cols="12" sm="6"> -->

      <!-- </v-col> -->
      <v-container>
        <v-row>
          <v-btn text @click="previous">Back</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" to="properties">Submit</v-btn>
        </v-row>
      </v-container>
    </v-stepper-content>
  </v-container>
</template>
<script>
export default {
  props: {
    next: Function,
    previous: Function,
    rules: Object,
    data: Object
  }
};
</script>