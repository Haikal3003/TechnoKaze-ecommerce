import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { BsBag } from 'react-icons/bs';

export default function Navbar() {
  return (
    <nav className="relative py-6 flex justify-between items-center border-b border-b-slate-200 z-50">
      <div className="w-56 ">
        <img src="../src/assets/TechnoKaze-logo.png" className="w-full h-full object-cover" />
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>

      <div>
        <ul className="flex items-center space-x-6">
          <li>
            <Link to="/products">
              <CiSearch fontSize={22} />
            </Link>
          </li>

          <li className="relative">
            <Link to="/cart">
              <BsBag fontSize={18} />
            </Link>
            <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full px-1">0</span>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
