import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import CardProduct from '../CardProduct';

export default function BestSellerProducts() {
  const laptops = useSelector((state: RootState) => state.products.laptops).slice(-5);
  const mobiles = useSelector((state: RootState) => state.products.mobiles).slice(-5);

  const bestSellerProducts = [...laptops, ...mobiles];

  return (
    <section className="relative w-full h-full py-6">
      <div className="text-center">
        <h1 className="uppercase text-xl font-light">- Best Sellers -</h1>
        <p className="font-extralight text-base">Discover our top-selling laptops and mobiles, crafted to keep you at the forefront of technology.</p>
      </div>

      <div className="grid grid-cols-5 gap-4 mt-10">
        {bestSellerProducts.map((product) => {
          return <CardProduct key={product.Id} product={product} />;
        })}
      </div>
    </section>
  );
}
