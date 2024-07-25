import { useEffect, useRef, useState } from "react";
import articleImg1 from "../assets/resource/article1.jpg";
import articleImg2 from "../assets/resource/article2.jpg";
import articleImg3 from "../assets/resource/article3.jpg";
import { useInView } from "framer-motion";
import '../CSS/SpecialRecipes.css'
import { CiHeart } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";

const SpecialRecipes = () => {
  const recipesItems = [
    {
      img: articleImg1,
      day: "THU",
      date: "15 Dec 2021",
      label: "Special Food Recipes For DpecialOccasions.",
    },
    {
      img: articleImg2,
      day: "MON",
      date: "25 Sep 2021",
      label: "Candy Canes Wafer Sweet Roll 2",
    },
    {
      img: articleImg3,
      day: "WED",
      date: "11 July 2021",
      label: "Cheesecake Pastry Marshmallow",
    },
  ];

  const [visibleCards, setVisibleCards] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setVisibleCards((prev) => {
          if (prev < recipesItems.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 100); // Adjust the delay as needed
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <div className="py-10">
      <p className="sub_header text-center">Website for Resturant</p>
      <p className="header text-center">FEATURED RESTURANTS</p>

      <div className="special-recipes" ref={ref}>
        {recipesItems.map((v, index) => (
          <div
            key={index}
            style={{
              transform: visibleCards > index ? "none" : "translateY(20px)",
              opacity: visibleCards > index ? 1 : 0,
              transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                index * 0.5
              }s`,
            }}
            className="special-recipes_card"
          >
            <div className="card-img">
              <img src={v.img} alt="" style={{ width: "100%" }} />
            </div>
            <div className="flex py-5 gap-4 w-full">
              <div className="w-[30%] text-end">
                <p className="font-semibold md:text-lg text-base">{v.day}</p>
                <div className="md:text-base text-sm">
                  <p>{v.date}</p>
                  <p>By Webinane</p>
                </div>
              </div>

              <div className="border border-gray-400"></div>

              <div className="w-[40%]">
                <h2 className="font-semibold md:text-lg text-base">{v.label}</h2>
                <div className="md:text-base text-sm flex gap-5 text-[#EA1B25]">
                    <p className="flex items-center gap-1"><CiHeart /><p>12</p></p>
                    <p className="flex items-center gap-1"><BiMessageRounded /><p>7</p></p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialRecipes;
