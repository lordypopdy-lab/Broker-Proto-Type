import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route index="/" element={ <Index /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
       </Routes>
    </Router>
  )
}

export default App
