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
    <Occupied />
  </v-sheet>
</template>
<script>
import Availiable from "../components/lease/Availiable";
import Occupied from "../components/lease/Occupied";
export default {
  components: {
    Availiable,
    Occupied
  }
};
</script>