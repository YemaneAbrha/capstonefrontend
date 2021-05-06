<template>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
    >
      <v-list-item class="px-2">
      <v-list-item-title>Yemane Abrha</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
       <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
</template>
<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Dash-Board', icon: 'mdi-view-dashboard' },
          { title: 'Maintenance', icon: 'mdi-account' },
          { title: 'Bill', icon: 'mdi-currency-usd' },
          { title: 'Properties', icon: 'mdi-home-city' },
          { title: 'User', icon: 'mdi-account-group' },
          { title: 'Message', icon: 'mdi-message' },
          
        ],
        mini: false,
      }
    },
  }
</script>