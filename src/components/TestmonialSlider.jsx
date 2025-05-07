import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import testimonials from "../utils/testmonials";
const TestimonialSlider = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-10">
        Our <span className="text-[#00171F] font-bold">Testimonials</span>
      </h2>
      <p className="text-[#00171F] text-xl w-[600px] ml-100 mb-5">
        Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
        consectetur mi. Vulputate sapien a a bibendum
      </p>
      <div className="mt-10 px-4 max-w-6xl mx-auto">
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          navigation
          modules={[Navigation]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg border-  shadow-md text-left">
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.username}</p>
                  </div>
                </div>
                <div className="flex space-x-1 mb-4">
                  {Array(1)
                    .fill(0)
                    .map((_, i) => (
                      //   <svg
                      //     key={i}
                      //     className="w-4 h-4 text-green-500 fill-current"
                      //     viewBox="0 0 20 20"
                      //   >
                      //     <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                      //   </svg>
                      <img src=" src/assets/images/star.png" alt="star"></img>
                    ))}
                </div>
                <p className="text-gray-600 text-sm">{t.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
