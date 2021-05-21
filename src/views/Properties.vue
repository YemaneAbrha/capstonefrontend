<template>
  <v-sheet>
    <v-container class="text-center" pa-15>
      <v-row>
        <v-btn block color="success" class="ml-10" outlined large to="registerProperty">
          <v-icon left>mdi-plus</v-icon>Create lease
        </v-btn>
      </v-row>
    </v-container>
    <Availiable />
  </v-sheet>
</template>
<script>
import Availiable from "../components/lease/Availiable";
import Occupied from "../components/lease/Occupied";
export default {
  data() {
    return {
      headers: [
        {
          text: "Unit Name",
          align: "start",
          sortable: false,
          value: "unitName"
        },
        { text: "Floor Number", value: "floorNumber", sortable: false },
        { text: "Total Area", value: "totalArea", sortable: false },
        { text: "Billable Area ", value: "billableArea", sortable: false },
        { text: "Rental Rate ", value: "rentalRate", sortable: false },
        { text: "Tenant ", value: "tenant", sortable: false },
        { text: "Payment Period ", value: "paymentPeriod", sortable: false },
        { text: "Actions", value: "actions", sortable: false }
      ],

      availiableLease: [
        {
          unitName: "M01",
          floorNumber: "Mizanen",
          totalArea: "40",
          billableArea: "30",
          rentalRate: "150",
          tenant: "Abebe Zegeye",
          paymentPeriod: "Monthly"
        },

        {
          unitName: "M01",
          floorNumber: "Mizanen",
          totalArea: "40",
          billableArea: "30",
          rentalRate: "150",
          tenant: "Abebe Zegeye",
          paymentPeriod: "Monthly"
        },
        {
          unitName: "M01",
          floorNumber: "Mizanen",
          totalArea: "40",
          billableArea: "30",
          rentalRate: "150",
          tenant: "Abebe Zegeye",
          paymentPeriod: "Monthly"
        },
        {
          unitName: "M01",
          floorNumber: "Mizanen",
          totalArea: "40",
          billableArea: "30",
          rentalRate: "150",
          tenant: "Abebe Zegeye",
          paymentPeriod: "Monthly"
        },
        {
          unitName: "M01",
          floorNumber: "Mizanen",
          totalArea: "40",
          billableArea: "30",
          rentalRate: "150",
          tenant: "Abebe Zegeye",
          paymentPeriod: "Monthly"
        },
        {
          unitName: "M01",
          floorNumber: "Mizanen",
          totalArea: "40",
          billableArea: "30",
          rentalRate: "150",
          tenant: "Abebe Zegeye",
          paymentPeriod: "Monthly"
        }
      ]
    };
  },
  components: {
    Availiable,
    Occupied
  }
};
</script>