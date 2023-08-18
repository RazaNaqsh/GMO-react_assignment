import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-semibold text-xl">
          DataTable
        </Link>
        <ul className="flex space-x-10">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
