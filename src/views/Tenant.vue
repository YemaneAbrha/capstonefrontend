<template>
  <v-sheet>
    <v-container class="text-center" pa-15>
      <v-row></v-row>
    </v-container>
    <NewRegisteredTenant />
    <Tenant />
  </v-sheet>
</template>
<script>
import NewRegisteredTenant from "../components/tenant/NewTenantTable";
import Tenant from "../components/tenant/TenantTable";
export default {
  components: {
    NewRegisteredTenant,
    Tenant
  }
};
</script>