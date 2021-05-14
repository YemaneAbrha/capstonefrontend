import Vue from "vue";
import Vuex from "vuex";
/*
 * @import  data from 
    the model.
 */
import { pendingBill, lateFee, paidFee } from "../data/bill";
// import
// import bill from "../data/bill";
import maintenance from "../data/maintenance";
import property from "../data/properties";

Vue.use(Vuex);
// console.log(maintenance);
// console.log(pendingBill);

export default new Vuex.Store({
  state: {
    maintenance,
    pendingBill,
    lateFee,
    paidFee,
    // bill,
    property,
  },
  mutations: {
    addBill(state, payload) {
      state.pendingBill.push(payload);
    },
    editBill(state, payload) {
      const { item } = payload;

      console.log("here is the payload");
      console.log(item);
      // console.log("yemane");
      // Object.assign(pendingBill[index], editedItem);
      // console.log("Abrha");
      /** Do some thing to edit the bill */
      // console.log(payload);
      Object.assign(pendingBill[item.id], item);
      // console.log(item.id);
      console.log("this is yemane abrha from addis ababa");
    },
    registerProperty(state, payload) {
      state.property.push(payload);
    },
  },
  actions: {},
  modules: {},
});
