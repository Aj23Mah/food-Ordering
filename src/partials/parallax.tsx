import { useEffect, useRef, useState } from "react";
import "../CSS/Parallax.css";
import setupImg1 from "../assets/resource/setp-img1.png";
import setupImg2 from "../assets/resource/setp-img2.png";
import setupImg3 from "../assets/resource/setp-img3.png";
import { useInView } from "framer-motion";

const parallax = () => {
  const parallaxItems = [
    {
      img: setupImg1,
      label: "Explore Restaurants",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      number: "1",
    },
    {
      img: setupImg2,
      label: "Choose a Tasty Dish",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      number: "2",
    },
    {
      img: setupImg3,
      label: "Follow The Status",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      number: "3",
    },
  ];

  
  const [visibleCards, setVisibleCards] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setVisibleCards((prev) => {
          if (prev < parallaxItems.length) {
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
    <div className="parallex_background">
      <p className="sub_header">Website for Restaurant and Cafe</p>
      <div className="header">EASY ORDER IN 3 STEPS</div>
      <div className="parallex_setupItems" ref={ref}>
        {parallaxItems.map((v, index) => (
          <div key={index} 
          style={{
            transform: visibleCards > index ? "none" : "translateY(20px)",
            opacity: visibleCards > index ? 1 : 0,
            transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
              index * 0.5
            }s`,
          }}
            className="setUp_items">
            <img src={v.img} alt="" />
            <h4 className="mt-3 font-semibold text-xl">{v.label}</h4>
            <p className="mt-2 text-base">{v.description}</p>
            <div className="absolute bg-red-600 rounded-full py-1 px-3">
              {v.number}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default parallax;
