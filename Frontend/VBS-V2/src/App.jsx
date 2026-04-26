import Navbar from "./components/Home/Navbar";
import Hero from "./components/Home/Hero";

import Contact from "./pages/Home/Contact";
import Services from "./pages/Home/Services";
import FdRates from "./pages/Home/FdRates";

import OpenAccount from "./pages/OpenAccount";
import Login from "./pages/Login";

import UserDashboard from "./pages/User Dashboard/UserDashboard";

import { Routes, Route } from "react-router-dom";

function HomePage() {
  return <Hero />;
}

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function App() {
  return (
    <Routes>

      {/* PUBLIC ROUTES WITH NAVBAR */}
      <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
      <Route path="/services" element={<PublicLayout><Services /></PublicLayout>} />
      <Route path="/rates" element={<PublicLayout><FdRates /></PublicLayout>} />
      <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
      <Route path="/open-account" element={<PublicLayout><OpenAccount /></PublicLayout>} />
      <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />

      {/* PRIVATE ROUTE WITHOUT NAVBAR */}
      <Route path="/dashboard" element={<UserDashboard />} />

    </Routes>
  );
}

export default App;