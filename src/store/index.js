import Vue from "vue";
import Vuex from "vuex";
/*
 * @import  data from 
    the model.
 */
import { pendingBill, lateFee, paidFee } from "../data/bill";
import maintenance from "../data/maintenance";
import property from "../data/properties";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    maintenance,
    pendingBill,
    lateFee,
    paidFee,
    property,
  },
  mutations: {
    addBill(state, payload) {
      state.pendingBill.push(payload);
    },
    addPaidFee(state, payload) {
      const { item, index } = payload;
      state.pendingBill.splice(index, 1);
      console.log(index);
      // console.log(x);
      state.paidFee.push(item);
    },
    editPendingBill(state, payload) {
      const { item } = payload;
      Object.assign(pendingBill[item.id], item);
    },
    editLateFee(state, payload) {
      const { item } = payload;
      Object.assign(pendingBill[item.id], item);
    },
    deletePendingBill(state, payload) {
      const { index } = payload;
      state.pendingBill.splice(index, 1);
    },

    deleteLateBill(state, payload) {
      const { index } = payload;
      state.lateFee.splice(index, 1);
    },
    registerProperty(state, payload) {
      // state.property.push(payload);
    },
  },
  actions: {},
  modules: {},
});
