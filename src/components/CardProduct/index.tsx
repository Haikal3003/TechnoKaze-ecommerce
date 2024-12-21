import { useEffect, useState } from 'react';
import { Product } from '../../features/products/productsSlice';

interface CardProductProps {
  product: Product;
}

export default function CardProduct({ product }: CardProductProps) {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(`${process.env.EXCHANGERATE_API_URL}/${process.env.EXCHANGERATE_API_KEY}/latest/INR`);
        const data = await response.json();

        if (data && data.conversion_rates && data.conversion_rates.USD) {
          setExchangeRate(data.conversion_rates.USD);
        } else {
          console.error('Exchange rate data not found.');
        }
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, []);

  const cleanedProductBrand = product.Brand.replace(/- \([^)]+\)/g, '').trim();

  const priceInINR = typeof product.Price === 'string' ? Number(product.Price.replace(/[^\d.-]/g, '')) : product.Price;
  const priceInUSD = exchangeRate ? priceInINR * exchangeRate : priceInINR;

  const priceInDollar = !isNaN(priceInUSD)
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(priceInUSD)
    : 'Invalid price';

  return (
    <div className="relative w-full h-full p-4 rounded-md border-2 border-slate-100 flex flex-col justify-between cursor-pointer">
      <div className="w-full h-52 mb-4">
        <img src={product.Image} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-sm text-ellipsis">{cleanedProductBrand}</h1>
        <p className="mt-auto font-normal">{priceInDollar}</p>
      </div>
    </div>
  );
}
