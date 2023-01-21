import React from 'react';
import { About } from './components/About';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Project } from './components/Project';

export const Portafolio = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Project />
    </>
  );
};
