import React from "react";

import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero";
import "./App.css";
import Features from "./components/Features";
import WhyUsSection from "./components/WhyUsSection";
import StepsSection from "./components/StepsSection";
import MissionSection from "./components/MissionSection";
import StatsSection from "./components/StatsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <WhyUsSection />
      <StepsSection />
      <MissionSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
