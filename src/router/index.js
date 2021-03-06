import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "../views/Dashboard.vue";
import Maintenance from "../views/Maintenane.vue";
import Bill from "../views/Bill.vue";
import Properties from "../views/Properties.vue";
import Tenant from "../views/Tenant.vue";
import Professional from "../views/Professional.vue";
import Message from "../views/Messages.vue";
import CreateBill from "../views/CreateBill.vue";
import RegisterProperty from "../views/RegisterProperty.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path: "/maintenance",
    name: "Maintenance",
    component: Maintenance,
  },
  {
    path: "/bill",
    name: "Bill",
    component: Bill,
  },
  {
    path: "/properties",
    name: "Properties",
    component: Properties,
  },
  {
    path: "/tenant",
    name: "Tenant",
    component: Tenant,
  },
  {
    path: "/professional",
    name: "Professional",
    component: Professional,
  },
  {
    path: "/messages",
    name: "Message",
    component: Message,
  },
  {
    path: "/createBill",
    name: "createBill",
    component: CreateBill,
  },
  {
    path: "/registerProperty",
    name: "registerProperty",
    component: RegisterProperty,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
