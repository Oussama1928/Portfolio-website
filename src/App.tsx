import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from '@/pages/Home';
import Journey from "@/pages/Journey";
//import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
//import Recommendations from "@/pages/Recommendations";
import Extracurriculars from "@/pages/Extracurriculars";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/projects" element={<Projects />} />
        {/*<Route path="/skills" element={<Skills />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/extracurriculars" element={<Extracurriculars />} />
        {/* <Route path="/recommendations" element={<Recommendations />} />*/}
        <Route path="/login" element={<div>Login</div>} />
      </Routes>
    </>
  );
}
