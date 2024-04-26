import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Packages from "./pages/admin/Packages";
import Staff from "./pages/admin/Staff";
import StaffDetail from "./pages/admin/StaffDetail";
import Clients from "./pages/admin/Clients";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<AdminLayout />}>
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Packages />} path="/package" />
            <Route element={<Staff />} path="/staff" />
            <Route element={<StaffDetail />} path="/staff/:id" />
            <Route element={<Clients />} path="/clients" />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
