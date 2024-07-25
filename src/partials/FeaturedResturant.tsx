import "@mantine/carousel/styles.css";
import "../CSS/FeaturedResturant.css";
import featuredSliderImg1 from "../assets/resource/featured-restaurant-gallery1.jpg";
import featuredSliderImg2 from "../assets/resource/featured-restaurant-gallery2.jpg";
import featuredImg1 from "../assets/resource/featured-restaurant-img1.jpg";
import featuredImg2 from "../assets/resource/featured-restaurant-img2.jpg";
import featuredImg3 from "../assets/resource/featured-restaurant-img3.jpg";
import { RiMotorbikeLine } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel } from "@mantine/carousel";
import { FaPlay } from "react-icons/fa";

import TabsComponent from "../component/TabsComponent";
import SpecialRecipes from "../component/SpecialRecipes";
import { useInView } from "framer-motion";

const FeaturedResturant = () => {
  const featuredItems = [
    {
      img: featuredImg1,
      label: "Tuna Roast Source",
      location: "5th Avenue New Yourk 68",
      price: "$85.00",
      rating: "4.25",
      minQuantity: "$30",
      deleveryTime: "30min",
    },
    {
      img: featuredImg2,
      label: "Crab With Curry Sources",
      location: "5th Avenue New Yourk 68",
      price: "$70.00",
      rating: "4.03",
      minQuantity: "$40",
      deleveryTime: "20min",
    },
    {
      img: featuredImg3,
      label: "Imported Salmon Steak",
      location: "5th Avenue New Yourk 68",
      price: "$90.00",
      rating: "5.00",
      minQuantity: "$60",
      deleveryTime: "45min",
    },
  ];
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const [toggle, setToggle] = useState(false);

  const [visibleCards, setVisibleCards] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setVisibleCards((prev) => {
          if (prev < featuredItems.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 10); // Adjust the delay as needed
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <>
      <div className="lg:py-20 md:py-14 py-10">
        <div className="sub_header text-center">
          Website for Resturant and Cafe
        </div>
        <div className="header text-center">FEATURED RESTURANTS</div>

        {/* features slider */}
        <div className="flex flex-wrap justify-center items-center md:gap-20">
          <div ref={ref}>
            {featuredItems.map((v, index) => (
              <div
                key={index}
                style={{
                  transform: visibleCards > index ? "none" : "translateY(20px)",
                  opacity: visibleCards > index ? 1 : 0,
                  transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                    index * 0.5
                  }s`,
                }}
                className="flex flex-wrap justify-center items-center gap-6 mt-5"
              >
                <img src={v.img} alt="" className="cursor-pointer" />
                <div className="w-[320px] px-2">
                  <div className="flex items-center justify-between">
                    <div className="mb-2">
                      <div className="text-[#EA1B25] text-sm mb-1">
                        {v.location}
                      </div>
                      <div className="text-lg font-semibold cursor-pointer hover:text-[#EA1B25] transition-all">
                        {v.label}
                      </div>
                    </div>
                    <div className="bg-[#FFBE00] px-2 py-1 flex items-center gap-1 text-white">
                      <FaRegStar />
                      <p>{v.rating}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="text-lg font-bold">{v.price}</div>
                    <div className="flex items-center gap-2">
                      <FaRegCircleCheck />
                      <p>Min Order</p>
                      <p>{v.minQuantity}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <RiMotorbikeLine />
                      <p>{v.deleveryTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:max-w-[30%] md:w-[90%] w-full mt-5 ">
            <div className="slider">
              <Carousel
                max-height={360}
                withControls={true}
                dragFree
                loop
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                className="bg-white custom-carousel shadow-lg cursor-pointer"
              >
                <Carousel.Slide>
                  <img
                    src={featuredSliderImg1}
                    alt=""
                    style={{ width: "100%" }}
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img
                    src={featuredSliderImg2}
                    alt=""
                    style={{ width: "100%" }}
                  />
                </Carousel.Slide>
              </Carousel>
            </div>

            <div className="flex justify-between relative">
              {/* play button */}
              <div
                className="absolute top-[-40%] left-[10%] cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                <div className="text-white bg-[#EA1B25] p-7 lg:p-9">
                  <FaPlay size={22} />
                </div>
                <p className="text-center underline">15min</p>
              </div>
              {toggle && (
                <div className="h-full w-full bg-black bg-opacity-80 fixed top-0 left-0 z-50 flex items-center justify-center">
                  <div className="relative bg-black p-4">
                     <iframe
                      src="https://player.vimeo.com/video/49674259"
                      width="1200"
                      height="750"
                      frameborder="0"
                      allow="autoplay; fullscreen"
                      allowfullscreen
                    ></iframe>

                    <button
                      className="absolute top-2 right-2"
                      onClick={() => setToggle(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-x"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#fff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
              {/* play button */}

              <div></div>

              <div className="max-w-[380px] w-[380px] px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="mb-2">
                    <div className="text-[#EA1B25] text-sm mb-1">
                      5th Avenue New Yourk 68
                    </div>
                    <div className="text-lg font-semibold cursor-pointer hover:text-[#EA1B25] transition-all">
                      Maenaam Thai Restaurant
                    </div>
                  </div>
                  <div className="bg-[#FFBE00] px-2 py-1 flex items-center gap-1 text-white">
                    <FaRegStar />
                    <p>4.25</p>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <div className="text-lg font-bold">$85.00</div>
                  <div className="flex items-center gap-2">
                    <FaRegCircleCheck />
                    <p>Min Order</p>
                    <p>$50</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiMotorbikeLine />
                    <p>30min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TabsComponent />
      <SpecialRecipes />
    </>
  );
};

export default FeaturedResturant;
