import "../CSS/PopularFood.css";
import CarouselComponent from "../component/CarouselComponent";

import roundPic1 from "../assets/images/round-pic1.jpg";
import roundPic2 from "../assets/images/round-pic2.jpg";
import roundPic3 from "../assets/images/round-pic3.jpg";
import roundPic4 from "../assets/images/round-pic4.jpg";
import restaurantLogo2 from "../assets/images/restaurant-logo2.png";
import restaurantLogo3 from "../assets/images/restaurant-logo3.png";
import restaurantLogo4 from "../assets/images/restaurant-logo4.png";
import restaurantLogo5 from "../assets/images/restaurant-logo5.png";

import mockup1 from "../assets/images/mockup1.png";
import mockup2 from "../assets/images/mockup2.png";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const PopularFood = () => {
  const popDish = [
    {
      dishImg: roundPic1,
      price: "$10.00-$30.00",
      label: "Tequila & lime hake",
      logoImg: restaurantLogo2,
      sublabel: "Jagnetina Na Raznju",
      location: "68 5th Avenue New York",
    },
    {
      dishImg: roundPic2,
      price: "$10.00-$30.00",
      label: "Maximus nibh facilisis",
      logoImg: restaurantLogo3,
      sublabel: "Central Caffe Pizzeria",
      location: "68 5th Avenue New York",
    },
    {
      dishImg: roundPic3,
      price: "$10.00-$30.00",
      label: "Henderit nisi venenatis",
      logoImg: restaurantLogo4,
      sublabel: "Dream Food By Opaq",
      location: "68 5th Avenue New York",
    },
    {
      dishImg: roundPic4,
      price: "$10.00-$30.00",
      label: "Grilled Shrimp Scampi",
      logoImg: restaurantLogo5,
      sublabel: "Fabio AI Porto Ristorante",
      location: "68 5th Avenue New York",
    },
  ];

  const [visibleCards, setVisibleCards] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setVisibleCards((prev) => {
          if (prev < popDish.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 200); // Adjust the delay as needed
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section className="popular-food relative">
      <div className="sub_header">Your Favorite Food</div>
      <div className="header">POPULAR THIS MONTH</div>
      <div className="description">In Your City</div>

      <div className="popular-food_container flex flex-wrap justify-center gap-10 md:pt-10 pt-5">
        <CarouselComponent />

        <div className="popular-of-month" ref={ref}>
          {popDish.map((v, index) => (
            <div
              className="pop-dish flex flex-wrap justify-center items-center gap-10 p-3 bg-white shadow-lg"
              key={index}
              style={{
                transform: visibleCards > index ? "none" : "translateY(20px)",
                opacity: visibleCards > index ? 1 : 0,
                transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 0.01}s`,
              }}
            >
              <div className="poplr-dish flex items-center gap-3 py-2 md:px-14">
                <img src={v.dishImg} alt="" />
                <div>
                  <p className="text-[#EA1B25]">{v.price}</p>
                  <p className="font-semibold hover:text-[#EA1B25] transition-all cursor-pointer">
                    {v.label}
                  </p>
                </div>
              </div>
              <div className="item-meta flex items-center gap-3 py-2 md:px-14">
                <img src={v.logoImg} alt="" />
                <div>
                  <p className="font-semibold">{v.sublabel}</p>
                  <p className="text-sm">{v.location}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-6">
            <button className="bg-black text-white py-3 px-10 rounded-3xl text-base font-semibold hover:bg-[#EA1B25]">
              VIEW MORE FOOD
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 md:flex hidden">
        <img src={mockup2} alt="" />
      </div>
      <div className="absolute bottom-0 left-0 md:flex hidden">
        <img src={mockup1} alt="" />
      </div>
    </section>
  );
};

export default PopularFood;
