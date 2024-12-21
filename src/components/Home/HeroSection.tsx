export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh]">
      <div className="text-8xl w-full text-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <h1>
          <span className="text-red-300 outline-text">ELEVATE </span>
          YOUR
        </h1>
        <h1>
          DIGITAL
          <span className="text-yellow-200 outline-text"> LIVE</span>
        </h1>
      </div>
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -z-10">
        <img src="../src/assets/home-image.png" alt="home" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}
