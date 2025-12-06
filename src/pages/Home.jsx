import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Services from "../components/Services";
import Making from "../components/Making";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Timeline />
      <Services />
       <Making />
      <ContactForm /> 
      <Footer />
    </div>
  );
}
