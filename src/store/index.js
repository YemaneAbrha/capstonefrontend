import Vue from "vue";
import Vuex from "vuex";
/*
 * @import  data from 
    the model.
 */
import bill from "../data/bill";
import maintenance from "../data/maintenance";
import property from "../data/properties";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    maintenance,
    bill,
    property,
  },
  mutations: {
    addBill(state, payload) {
      state.bill.push(payload);
    },
    registerProperty(state, payload) {
      state.property.push(payload);
    },
  },
  actions: {},
  modules: {},
});
