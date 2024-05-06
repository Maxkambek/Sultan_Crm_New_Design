import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Packages from "./pages/admin/Packages";
import Staff from "./pages/admin/Staff";
import StaffDetail from "./pages/admin/StaffDetail";
import Clients from "./pages/admin/Clients";
import Branchs from "./pages/admin/Branchs";
import FAQ from "./pages/admin/FAQ";
import Profile from "./pages/admin/Profile";
import BranchDetail from "./pages/admin/BranchDetail";
import PackageDetail from "./pages/admin/PackageDetail";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<AdminLayout />}>
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Packages />} path="/package" />
            <Route element={<PackageDetail />} path="/package/:id" />
            <Route element={<Staff />} path="/staff" />
            <Route element={<StaffDetail />} path="/staff/:id" />
            <Route element={<Clients />} path="/clients" />
            <Route element={<Branchs />} path="/branch" />
            <Route element={<BranchDetail />} path="/branch/:id" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<FAQ />} path="/faq" />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
