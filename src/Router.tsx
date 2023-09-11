import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Experience from "./components/pages/Experience";
import Skills from "./components/pages/Skills";

function Router() { 
    return (  
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<div>Projects</div>} />
        </Routes>
      </div>
    );
}

export default Router;