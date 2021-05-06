<template>
  <v-app>
    <v-container class="ma-0 fill-hight" >
     <v-row >
       <VerticaNavs />
       <v-main>
         <router-view/>
       </v-main>
      </v-row>
  </v-container>
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
