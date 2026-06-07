import { Route, Navigate } from "react-router-dom";

import ExhibitorLayout from "../layouts/ExhibitorLayout";

import Dashboard from "../pages/exhibitor/Dashboard";
import Profile from "../pages/exhibitor/Profile";
import ApplyExpo from "../pages/exhibitor/ApplyExpo";
import MyApplications from "../pages/exhibitor/MyApplications";
import BoothSelection from "../pages/exhibitor/BoothSelection";
import MyBooth from "../pages/exhibitor/MyBooth";
import Messages from "../pages/exhibitor/Messages";

const ExhibitorRoutes = () => (
  <Route path="/exhibitor" element={<ExhibitorLayout />}>
    <Route index element={<Navigate to="dashboard" replace />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="profile" element={<Profile />} />
    <Route path="apply" element={<ApplyExpo />} />
    <Route path="applications" element={<MyApplications />} />
    <Route path="booth-selection" element={<BoothSelection />} />
    <Route path="my-booth" element={<MyBooth />} />
    <Route path="messages" element={<Messages />} />
  </Route>
);

export default ExhibitorRoutes;