import Home from "./components/Home"

function App() {
  return (
      <div>
        <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex justify-between items-center">
              <div className="text-2xl font-light tracking-wider">
                <img src="../public/imagen-removebg-preview.png" alt="logo" className="h-20" />
              </div>
              <ul className="hidden md:flex space-x-8">
                <li>
                  <a href="#home" className="text-sm uppercase tracking-widest text-white hover:text-green-400 transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#episodios"
                    className="text-sm uppercase tracking-widest hover:text-green-400 text-white transition-colors"
                  >
                    Episodios
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="text-sm uppercase tracking-widest hover:text-green-400 text-white transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
              <button className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </nav>
          </div>
        </header>
        <Home />
      </div>
  )
}

export default App
