import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setLaptops, setMobiles } from './features/products/productsSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  const dispatch = useDispatch();

  const fetchLaptopsProduct = async () => {
    try {
      const response = await axios.get(process.env.RAPIDAPI_URL + '/laptops', {
        headers: {
          'x-rapidapi-key': process.env.RAPIDAPI_KEY,
          'x-rapidapi-host': process.env.RAPIDAPI_HOST,
        },
      });

      const data = response.data.slice(0, 50);

      dispatch(setLaptops(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMobilesProduct = async () => {
    try {
      const response = await axios.get(process.env.RAPIDAPI_URL + '/mobiles', {
        headers: {
          'x-rapidapi-key': process.env.RAPIDAPI_KEY,
          'x-rapidapi-host': process.env.RAPIDAPI_HOST,
        },
      });

      const data = response.data.slice(0, 50);
      dispatch(setMobiles(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLaptopsProduct();
    fetchMobilesProduct();
  }, []);

  return (
    <main className="relative font-outfit">
      <div className="px-20">
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
}
