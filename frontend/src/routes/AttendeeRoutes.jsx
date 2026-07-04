import { Route, Navigate } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import RoleRoute from "./RoleRoute";

import AttendeeLayout from "../layouts/AttendeeLayout";

import Dashboard from "../pages/attendee/Dashboard";
import Events from "../pages/attendee/Events";
import EventDetails from "../pages/attendee/EventDetails";
import Exhibitors from "../pages/attendee/Exhibitors";
import Sessions from "../pages/attendee/Sessions";
import Bookmarks from "../pages/attendee/Bookmarks";
import Notifications from "../pages/attendee/Notifications";
import Feedback from "../pages/attendee/Feedback";
import Profile from "../pages/attendee/Profile";

const AttendeeRoutes = () => (
  <Route
    path="/attendee"
    element={
      <PrivateRoute>
        <RoleRoute allowedRole="attendee">
          <AttendeeLayout />
        </RoleRoute>
      </PrivateRoute>
    }
  >

    < Route index element={< Navigate to="dashboard" replace />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="events" element={<Events />} />
    <Route path="events/:id" element={<EventDetails />} />
    <Route path="exhibitors" element={<Exhibitors />} />
    <Route path="sessions" element={<Sessions />} />
    <Route path="bookmarks" element={<Bookmarks />} />
    <Route path="notifications" element={<Notifications />} />
    <Route path="feedback" element={<Feedback />} />
    <Route path="profile" element={<Profile />} />
    
  </Route >
);

export default AttendeeRoutes;