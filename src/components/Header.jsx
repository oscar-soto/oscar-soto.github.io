import React from 'react';
import { useState } from 'react';

import { ReactComponent as BurgerMenu } from '../assets/burger-menu.svg';
import { ReactComponent as Close } from '../assets/close.svg';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <header className="fixed w-full z-50 shadow-lg bg-black lg:relative">
      <div className="container mx-auto">
        <nav className="pt-4 px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7 md:w-full md:justify-between">
              <div>
                <a
                  href="#"
                  className="
                  py-6
                  px-2
                  text-lg text-white
                  font-semibold
                  md:text-xl
                  flex
                  items-center
                  hover:text-gray-500
                  transition
                  duration-300
                "
                >
                  Oscar Espinoza
                </a>
              </div>
              
              {/* Primary Navbar items  */}
              <div className="hidden md:flex items-center space-x-5">
                <a
                  href="#hero"
                  className="
                  py-6
                  px-2
                  text-white
                  font-semibold
                  border-b-2 border-transparent
                  hover:border-white
                  transition
                  duration-300
                "
                >
                  Inicio
                </a>
                <a
                  href="#about"
                  className="
                  py-6
                  px-2
                  text-white
                  font-semibold
                  border-b-2 border-transparent
                  hover:border-white
                  transition
                  duration-300
                "
                >
                  Sobre Mí
                </a>
                <a
                  href="#project"
                  className="
                  py-6
                  px-2
                  text-white
                  font-semibold
                  border-b-2 border-transparent
                  hover:border-white
                  transition
                  duration-300
                "
                >
                  Proyectos
                </a>
                <a
                  href="#contact"
                  className="
                  py-6
                  px-2
                  text-white
                  font-semibold
                  border-b-2 border-transparent
                  hover:border-white
                  transition
                  duration-300
                "
                >
                  Contacto
                </a>
              </div>
            </div>

            {/* Mobile menu button  */}
            <div className="md:hidden flex items-center" onClick={handleMenu}>
              <button className="outline-none mobile-menu-button">
                <BurgerMenu className={`${showMenu ? 'hidden' : ''}`} />
                <Close className={`${!showMenu ? 'hidden' : ''}`}/>
              </button>
            </div>
          </div>

          {/*  mobile menu */}
          <div className={`md:hidden ${!showMenu ? 'hidden' : ''}`}>
            <ul>
              <li>
                <a
                  href="#"
                  className="block text-base px-2 py-4 text-white font-semibold"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block text-base px-2 py-4 text-white font-semibold"
                >
                  Sobre Mí
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className="block text-base px-2 py-4 text-white font-semibold"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-base px-2 py-4 text-white font-semibold"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
