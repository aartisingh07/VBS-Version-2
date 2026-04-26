import Navbar from "./components/Home/Navbar";
import Hero from "./components/Home/Hero";
import Contact from "./pages/Home/Contact";

import Services from "./pages/Home/Services";
import FdRates from "./pages/Home/FdRates"

import { Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rates" element={<FdRates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;