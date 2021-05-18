<template>
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent app>
    <v-list-item class="px-2">
      <v-list-item-title>Yemane Abrha</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <!-- <v-divider></v-divider> -->

    <v-list nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-spacer></v-spacer>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block x-large dark>Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Dash-Board", icon: "mdi-view-dashboard", to: "/" },
        { title: "Maintenance", icon: "mdi-account", to: "/maintenance" },
        { title: "Bill", icon: "mdi-currency-usd", to: "/bill" },
        { title: "Properties", icon: "mdi-home-city", to: "/properties" },
        { title: "Tenant", icon: "mdi-account-group", to: "/tenant" },
        {
          title: "Professional",
          icon: "mdi-hammer-wrench",
          to: "/professional"
        },
        { title: "Message", icon: "mdi-message", to: "/message" }
      ],
      mini: false
    };
  }
};
</script>