const PromotionBoxes = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
    <div className="relative mt-4 md:mt-[0px] md:mr-[30px] mr-0 h-[180px] md:h-[50%] bg-gray-200 flex items-center justify-center">
      <img
        src="/promo1.avif"
        alt="Promo 1"
        className="w-full h-full object-position object-cover opacity-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black">
        <p className="text-sm">PREFER CUSTOMER 2025</p>
        <h2 className="font-bold text-xl">Winter Collection</h2>
        <button className="mt-2 px-4 py-2 bg-transparent border border-black hover:bg-black hover:text-white transition">
          Shop Now
        </button>
      </div>
    </div>
    <div className="relative mt-4 md:mt-[0px] h-[180px] md:h-[50%] bg-gray-300 flex items-center justify-center">
      <img
        src="/promo2.jpg"
        alt="Promo 2"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 md:mb-8 flex flex-col justify-center items-center text-center text-black">
        <p className="text-sm">PREFER CUSTOMER 2025</p>
        <h2 className="font-bold text-xl">Winter Collection</h2>
        <button className="mt-2 px-4 py-2 bg-transparent border border-black hover:bg-black hover:text-white transition">
          Shop Now
        </button>
      </div>
    </div>
  </div>
);

export default PromotionBoxes;
