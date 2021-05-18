<template>
  <v-sheet>
    <v-container class="pa-15">
      <v-row>
        <v-col md="9" offset-md="3" xl="4" offset-xl="4">
          <v-stepper v-model="step">
            <v-stepper-header>
              <v-stepper-step step="1" :complete="step > 1"></v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="step > 2" step="2"></v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <PropertyInfo :data="data" :rules="rules" :next="next" />
              <TenantInfo :data="data" :rules="rules" :next="next" :previous="previous" />
            </v-stepper-items>
          </v-stepper>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import TenantInfo from "../components/registerProperty/TenantInfo";
import PropertyInfo from "../components/registerProperty/PropertyInfo";

export default {
  components: {
    TenantInfo,
    PropertyInfo
  },
  data() {
    return {
      step: 1,
      checkoutForm: false,
      data: {
        propertyName: "",
        city: "",
        country: "",
        rentalrate: "",
        contractDocument: "",
        tenant: ""
      },
      rules: {
        required: value => !!value || "Required."
      }
    };
  },
  methods: {
    next() {
      this.step += 1;
    },
    previous() {
      this.step -= 1;
    },
    submitOrder() {
      this.$router.push({ name: "thankyou" });
    }
  }
};
</script>
