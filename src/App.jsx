import Index from "./pages/Index";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Admin from "./admin/pages/Admin";
import Register from "./pages/Register";
import Deposite from "./pages/Deposite";
import Withdraw from "./pages/Withdraw";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route index="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/deposite" element={<Deposite />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
