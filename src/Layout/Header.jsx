import { NavLink } from 'react-router';

function Header() {
  return (
    <header className="bg-[#032F30] text-white fixed w-full top-0 left-0 z-50 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Ultimate Online Store</h1>
          <p className="mt-1 text-lg">Your one-stop shop for everything you need!</p>
        </div>
        <nav className="hidden md:flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-[#0C969C]" : "hover:text-[#0C969C]")}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "text-[#0C969C]" : "hover:text-[#0C969C]")}
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-[#0C969C]" : "hover:text-[#0C969C]")}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-[#0C969C]" : "hover:text-[#0C969C]")}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
