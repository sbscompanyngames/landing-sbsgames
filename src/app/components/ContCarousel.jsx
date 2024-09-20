import React, { useRef, useState, useEffect } from "react";
import { CardCarousel } from "@/app/components/CardCarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export function ContCarousel({ bg = 0, fetching }) {
  const [tournaments, setTournaments] = useState([]);
  const [windowWidth, setWindowWidth] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const swiperRef = useRef(null);

  let position = 0; // Inicializar position fuera del bucle

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="containerCarousel">
      <div className="spaceNav" onClick={goPrev}>
        <div className="prev">
          <div>
            <svg
              className="svgPrev"
              width="24"
              height="24"
              viewBox="0 0 23 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon/black/left arrow">
                <path
                  id="Vector 2605"
                  d="M2.51953 11.3359L21.8665 11.3359"
                  stroke="white"
                  strokeWidth="1.59807"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector 2606"
                  d="M7.97681 4.88672L1.52783 11.3357L7.97681 17.7847"
                  stroke="white"
                  strokeWidth="1.59807"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={4}
        loop={true}
        slidesPerGroup={1}
        spaceBetween={0}
        className="mySwiper"
        modules={[Autoplay]}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          770: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 4,
          },
        }}
      >
        {fetching.length == 0 ? (
          <SwiperSlide className="swiperCont">
            <div>cargando</div>
          </SwiperSlide>
        ) : (
          fetching.map((tournament, index) => {
            const bg = position % 4;
            position++;
            return (
              <SwiperSlide key={index} className="swiperCont">
                <CardCarousel
                  concurrent={tournament.concurrent}
                  date={tournament.date}
                  name={tournament.name}
                  price={tournament.price}
                  location={tournament.location}
                  bg={bg}
                  // image={tournament.image}
                />
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
      <div className="spaceNav" onClick={goNext}>
        <div className="next">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 23 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon/black/left arrow">
                <path
                  id="Vector 2605"
                  d="M20.8755 9.66406L1.52857 9.66406"
                  stroke="white"
                  strokeWidth="1.59807"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector 2606"
                  d="M15.4182 16.1133L21.8672 9.66431L15.4182 3.21533"
                  stroke="white"
                  strokeWidth="1.59807"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
