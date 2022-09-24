import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="bg-red-500 w-full">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-center md:justify-between lg:justify-between  border-b border-white py-6 md:border-none lg:border-none">
          <div className="flex items-center">
            <div className="hidden space-x-8 md:block lg:block">
              <Link to="/" className="text-base font-medium text-white hover:text-indigo-50">
                🏠 Home
              </Link>
              <Link to="/contacto" className="text-base font-medium text-white hover:text-indigo-50">
                📙 Contacto
              </Link>
            </div>
          </div>
          <Link to="/" >
            <div className="space-x-4 text-white">
              Happy Cake 🍰
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 md:hidden lg:hidden">
          <Link to="/" className="text-base font-medium text-white hover:text-indigo-50">
            🏠 Home
          </Link>
          <Link to="/contacto" className="text-base font-medium text-white hover:text-indigo-50">
            📙 Contacto
          </Link>
        </div>
      </nav>
    </header>

  )
}