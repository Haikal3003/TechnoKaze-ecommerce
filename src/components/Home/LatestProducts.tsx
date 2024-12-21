import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import CardProduct from '../CardProduct';
export default function LatestProductsSection() {
  const laptops = useSelector((state: RootState) => state.products.laptops).slice(0, 5);
  const mobiles = useSelector((state: RootState) => state.products.mobiles).slice(0, 5);

  const latestProducts = [...laptops, ...mobiles];

  return (
    <section className="relative w-full h-full py-6">
      <div className="text-center">
        <h1 className=" uppercase text-xl font-light">- Latest Products -</h1>
        <p className="font-extralight text-base">Browse our latest collection of laptops and mobiles, designed to help you stay ahead of the curve.</p>
      </div>

      <div className="grid grid-cols-5 gap-4 mt-10">
        {latestProducts.map((product) => {
          return <CardProduct key={product.Id} product={product} />;
        })}
      </div>
    </section>
  );
}
