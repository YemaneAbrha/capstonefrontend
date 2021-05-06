<template>
  <v-app>
  <VerticaNavs />
    <!-- <v-main> -->
  <!-- <router-view/> -->
    <!-- </v-main> -->
  </v-app>
</template>

<script>
import VerticaNavs from './components/VerticalNav'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    VerticaNavs
  }
};
</script>
