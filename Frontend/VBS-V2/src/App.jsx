import Navbar from "./components/Home/Navbar";
import Hero from "./components/Home/Hero";
import Contact from "./components/Home/Contact";

import Services from "./pages/Home/Services";
import FdRates from "./pages/Home/FdRates"

import { Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Hero />
      <Contact />
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
      </Routes>
    </>
  );
}

export default App;