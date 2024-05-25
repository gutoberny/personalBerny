import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold">Meu Portfólio</h1>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="text-white hover:text-gray-200">
                Sobre
              </a>
            </li>

            <li>
              <a href="#" className="text-white hover:text-gray-200">
                Projetos
              </a>
            </li>

            <li>
              <a href="#" className="text-white hover:text-gray-200">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
