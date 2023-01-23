import React from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OtherProjects } from './components/OtherProjects';
import { Project } from './components/Project';

export const Portafolio = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Project />
      <OtherProjects />
      <Contact />
    </>
  );
};
