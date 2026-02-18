import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CardComponentMinimalist from "./CardComponentMinimalist";

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CarouselMinimalist = ({ items, imageStyle }) => {
  return (
    <div className="w-full max-w-7xl mx-auto py-10  group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 }, // Muestra 2 si quieres ver más de uno
        }}
        className="relative"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="pb-12">
            <CardComponentMinimalist obj={item} imageStyle={imageStyle} />
          </SwiperSlide>
        ))}

      
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-4">
            <button className="prev-btn p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:bg-gray-100/30">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="next-btn p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors text-gray-500 dark:hover:bg-gray-100/30 dark:text-gray-300 hover:text-gray-800">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Paginación (puntos) sutil */}
          <div className="custom-pagination w-auto! relative! bottom-0! flex gap-2"></div>
        </div>
      </Swiper>

      <style>{`
      .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    height: auto; /* Esto obliga al slide a estirarse */
    display: flex; /* Permite que la card dentro se estire */
  }
        .custom-pagination .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          width: 6px;
          height: 6px;
          transition: all 0.3s;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #4b5563;
          width: 20px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default CarouselMinimalist;
