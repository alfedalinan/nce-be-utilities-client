import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserSettings from "@/pages/UserSettings.vue";
import TableList from "@/pages/TableList.vue";
import ApnFcmNotifications from "@/pages/ApnFcmNotifications";
import OfflineMessages from "@/pages/OfflineMessages";
import ApnConnectionStatus from "@/pages/ApnConnectionStatus";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/user-settings",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "user-settings",
        name: "user-settings",
        component: UserSettings
      },
      {
        path: "apn-fcm-notifications",
        name: "apn-fcm-notifications",
        component: ApnFcmNotifications
      },
      {
        path: "apn-connection-status",
        name: "apn-connection-status",
        component: ApnConnectionStatus
      },
      {
        path: "offline-sms",
        name: "offline-sms",
        component: OfflineMessages
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
