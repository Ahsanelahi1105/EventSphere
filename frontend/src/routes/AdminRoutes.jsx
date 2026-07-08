import { Route, Navigate } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import RoleRoute from "./RoleRoute";

import AdminLayout from "../layouts/AdminLayout";

import Dashboard from "../pages/admin/Dashboard";
import ExpoManagement from "../pages/admin/ExpoManagement";
import BoothManagement from "../pages/admin/BoothManagement";
import ExhibitorManagement from "../pages/admin/ExhibitorManagement";
import SessionManagement from "../pages/admin/SessionManagement";
import Reports from "../pages/admin/Reports";
import Analytics from "../pages/admin/Analytics";
import Settings from "../pages/admin/Settings";
import ApplicationManagement from "../pages/admin/ApplicationManagement";

const AdminRoutes = () => (

  <Route
    path="/admin"
    element={
      <PrivateRoute>
        <RoleRoute allowedRole="admin">
          <AdminLayout />
        </RoleRoute>
      </PrivateRoute>
    }
  >

    <Route index element={<Navigate to="dashboard" replace />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="expos" element={<ExpoManagement />} />
    <Route path="booths" element={<BoothManagement />} />
    <Route path="exhibitors" element={<ExhibitorManagement />} />
    <Route path="sessions" element={<SessionManagement />} />
    <Route path="reports" element={<Reports />} />
    <Route path="analytics" element={<Analytics />} />
    <Route path="settings" element={<Settings />} />
    <Route path="applications" element={<ApplicationManagement />} />
  </Route>
);

export default AdminRoutes;