import Vue from "vue";
import Vuex from "vuex";
/*
 * @import  data from 
    the model.
 */
import { pendingBill, lateFee, paidFee } from "../data/bill";
import { occupied, available } from "../data/lease";
import maintenance from "../data/maintenance";
import property from "../data/properties";
import { newRegisteredTenant, tenant } from "../data/tenant";
console.log("Yemane Abrha");
console.log(newRegisteredTenant);
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    maintenance,
    pendingBill,
    lateFee,
    paidFee,
    property,
    newRegisteredTenant,
    tenant,
    occupied,
    available,
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
    /** Approve & Decline Newly Registered */
    approveTenant(state, payload) {
      const { item, index } = payload;
      state.newRegisteredTenant.splice(index, 1);
      state.tenant.push(item);
    },
    declineTenant(state, payload) {
      const { index } = payload;
      state.newRegisteredTenant.splice(index, 1);
    },

    addUnit(state, payload) {
      state.available.push(payload);
      console.log(payload);
    },
  },
  actions: {},
  modules: {},
});
