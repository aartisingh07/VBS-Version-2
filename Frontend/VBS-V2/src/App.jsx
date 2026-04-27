import Navbar from "./components/Home/Navbar";
import Hero from "./components/Home/Hero";

import Contact from "./pages/Home/Contact";
import Services from "./pages/Home/Services";
import FdRates from "./pages/Home/FdRates";

import OpenAccount from "./pages/OpenAccount";
import Login from "./pages/Login";

import ProtectedRoute from "./components/ProtectedRoute";

import UserLayout from "./components/User Dashboard/UserLayout";

import UserDashboard from "./pages/User Dashboard/UserDashboard";
import TransferMoney from "./pages/User Dashboard/TransferMoney";
import Transactions from "./pages/User Dashboard/Transactions";
import Loans from "./pages/User Dashboard/Loans";
import Cards from "./pages/User Dashboard/Cards";
import Investments from "./pages/User Dashboard/Investments";

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
      
      <Route element={<UserLayout />}> 
        <Route path="/dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>}/>
        <Route path="/transfer" element={<ProtectedRoute><TransferMoney /></ProtectedRoute>}/>
        <Route path="/transactions" element={<ProtectedRoute><Transactions /></ProtectedRoute>}/>
        <Route path="/cards" element={<ProtectedRoute><Cards /></ProtectedRoute>}/>
        <Route path="/investments" element={<ProtectedRoute><Investments /></ProtectedRoute>}/>
        <Route path="/loans" element={<ProtectedRoute><Loans /></ProtectedRoute>}/>
      </Route>
      
    </Routes>
  );
}

export default App;