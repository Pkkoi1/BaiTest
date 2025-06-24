import React, { useState } from "react";
import Item from "./Item";

const awardData = [
  {
    title: "Our Achievements",
    subtitle: "Award and Recognition",
    desc: "Celebrating our achievements",
    img: "https://picsum.photos/100/100?random=1",
  },
  {
    title: "Best Innovation",
    subtitle: "Tech Award 2023",
    desc: "For outstanding innovation in technology.",
    img: "https://picsum.photos/100/100?random=2",
  },
  {
    title: "Top Brand",
    subtitle: "Brand Excellence",
    desc: "Recognized as a leading brand.",
    img: "https://picsum.photos/100/100?random=3",
  },
  {
    title: "Customer Choice",
    subtitle: "People's Award",
    desc: "Voted by our valued customers.",
    img: "https://picsum.photos/100/100?random=4",
  },
  {
    title: "Sustainability",
    subtitle: "Green Award",
    desc: "Commitment to sustainability.",
    img: "https://picsum.photos/100/100?random=5",
  },
  {
    title: "Our Achievements",
    subtitle: "Award and Recognition",
    desc: "Celebrating our achievements",
    img: "https://picsum.photos/100/100?random=6",
  },
  {
    title: "Best Innovation",
    subtitle: "Tech Award 2023",
    desc: "For outstanding innovation in technology.",
    img: "https://picsum.photos/100/100?random=7",
  },
  {
    title: "Top Brand",
    subtitle: "Brand Excellence",
    desc: "Recognized as a leading brand.",
    img: "https://picsum.photos/100/100?random=8",
  },
  {
    title: "Customer Choice",
    subtitle: "People's Award",
    desc: "Voted by our valued customers.",
    img: "https://picsum.photos/100/100?random=9",
  },
  {
    title: "Sustainability",
    subtitle: "Green Award",
    desc: "Commitment to sustainability.",
    img: "https://picsum.photos/100/100?random=10",
  },
];

const AwardList = () => {
  const [page, setPage] = useState(0);

  const [itemsPerPage, setItemsPerPage] = useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        setItemsPerPage(6);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(awardData.length / itemsPerPage);

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const startIdx = page * itemsPerPage;
  const visibleItems = awardData.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div>
      <img src="\award.avif" alt="" className="w-full h-[120px] object-fill" />
      <div className="flex items-center justify-center gap-2 mt-6 pb-8">
        <button
          onClick={handlePrev}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-[#551760] text-white hover:bg-[#7a2b8a] transition"
          aria-label="Previous"
        >
          {"<"}
        </button>
        <div className="flex flex-wrap justify-center gap-6">
          {visibleItems.map((item, idx) => (
            <Item
              key={startIdx + idx}
              title={item.title}
              subtitle={item.subtitle}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-[#551760] text-white hover:bg-[#7a2b8a] transition"
          aria-label="Next"
        >
          {">"}
        </button>
      </div>
      {/* Dots */}
      <div className="flex justify-center mt-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full mx-1 ${
              page === idx ? "bg-[#551760]" : "bg-gray-300"
            }`}
            onClick={() => setPage(idx)}
            aria-label={`Go to page ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AwardList;
