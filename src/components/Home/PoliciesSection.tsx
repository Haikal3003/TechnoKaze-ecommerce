import { RiExchangeFundsFill } from 'react-icons/ri';
import { PiSealCheckFill } from 'react-icons/pi';
import { RiCustomerService2Line } from 'react-icons/ri';

export default function PoliciesSection() {
  return (
    <section className="relative w-full h-full py-10">
      <div className="flex justify-around items-center text-center">
        <div className="flex flex-col items-center ">
          <RiExchangeFundsFill fontSize={34} className="mb-6" />
          <h2 className="text-base font-semibold ">Easy Exchange Policy</h2>
          <p className="text-sm font-normal text-slate-500 ">We offer hassle free exchange policy</p>
        </div>

        <div className="flex flex-col items-center ">
          <PiSealCheckFill fontSize={34} className="mb-6" />
          <h2 className="text-base font-semibold ">3 Days Return Policy</h2>
          <p className="text-sm font-normal text-slate-500 ">Return the product within 3 days of purchase</p>
        </div>

        <div className="flex flex-col items-center ">
          <RiCustomerService2Line fontSize={34} className="mb-6" />
          <h2 className="text-base font-semibold ">Best customer support</h2>
          <p className="text-sm font-normal text-slate-500 ">we provide 24/7 customer support</p>
        </div>
      </div>
    </section>
  );
}
