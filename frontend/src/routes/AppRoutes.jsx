import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";

import Home from "../pages/home/Home";
import About from "../pages/home/About";
import Contact from "../pages/home/Contact";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

import AdminRoutes from "./AdminRoutes";
import ExhibitorRoutes from "./ExhibitorRoutes";
import AttendeeRoutes from "./AttendeeRoutes";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public Routes */}

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      {/* Feature Routes */}

      {AdminRoutes()}
      {ExhibitorRoutes()}
      {AttendeeRoutes()}

      {/* 404 */}

      <Route path="*" element={<h1>404 Page Not Found</h1>} />

    </Routes>
  );
};

export default AppRoutes;