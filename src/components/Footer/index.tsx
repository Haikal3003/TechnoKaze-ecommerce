import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative flex flex-col mt-14">
      <div className="flex justify-between">
        <div className="max-w-lg w-full ">
          <div className="w-56 mb-2">
            <img src="../src/assets/TechnoKaze-logo.png" alt="TechnoKaze logo" className="w-full h-full object-cover" />
          </div>
          <p className="text-sm">
            TechnoKaze offers a wide range of laptops and smartphones designed to meet the needs of both professionals and tech enthusiasts. Since its founding, TechnoKaze has been committed to providing top-quality products, backed by
            excellent customer support and fast delivery. Explore the latest tech trends with us and discover devices that fit your lifestyle.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="uppercase font-semibold mb-2">Company</h1>
          <ul className="flex flex-col text-sm gap-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/delivery">Delivery</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="uppercase font-semibold mb-2 ">Get in touch</h1>
          <div className="flex flex-col text-sm gap-2">
            <span>+62812-1234-5678</span>
            <span>TechnoKazeEC@gmail.com</span>
            <span>Instagram</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 my-6">
        <p className="text-sm text-center pt-6">Copyright 2024@ Haikal3003 - All Right Reserved.</p>
      </div>
    </footer>
  );
}
