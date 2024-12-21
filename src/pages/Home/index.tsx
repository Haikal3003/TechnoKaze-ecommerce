import BestSellerProducts from '../../components/Home/BestSellerProducts';
import HeroSection from '../../components/Home/HeroSection';
import LatestProducts from '../../components/Home/LatestProducts';
import PoliciesSection from '../../components/Home/PoliciesSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <LatestProducts />
      <BestSellerProducts />
      <PoliciesSection />
    </>
  );
}
