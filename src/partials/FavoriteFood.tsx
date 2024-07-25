import "../CSS/FavoriteFood.css";
import popularFood1 from "../assets/images/popular-dish-img1.jpg";
import popularFood2 from "../assets/images/popular-dish-img2.jpg";
import popularFood3 from "../assets/images/popular-dish-img3.jpg";
import restaurantLogo1 from "../assets/images/restaurant-logo1.png";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const FavoriteFood = () => {
  const foodItems = [
    {
      label: "Maenaam Thai Restaurant",
      image: popularFood1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      price: "$85.00",
    },
    {
      label: "Champignon somen Noodles",
      image: popularFood2,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      price: "$70.00",
    },
    {
      label: "Tomatoes & Clams Pasta",
      image: popularFood3,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      price: "$99.00",
    },
  ];

  const [visibleCards, setVisibleCards] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setVisibleCards((prev) => {
          if (prev < foodItems.length) {
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
    <div className="favorite-food_section">
      <div className="favorite-food_sub-header">Your Favourite Food</div>
      <div className="favorite-food_header">CHOOSE & ENJOY</div>

      <div className="favorite-food" ref={ref}>
        {foodItems.map((v, index) => (
          <div
            key={index}
            style={{
              transform: visibleCards > index ? "none" : "translateY(20px)",
              opacity: visibleCards > index ? 1 : 0,
              transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                index * 0.5
              }s`,
            }}
            className="favorite-food_card"
          >
            <div className="card-img">
              <img src={v.image} alt="" style={{ width: "100%" }} />
            </div>
            <div className="card-details">
              <h2 className="card-label">{v.label}</h2>
              <p className="card-description">{v.description}</p>
              <p className="price-btn">
                <p className="price">{v.price}</p>
                <button>ORDER NOW</button>
              </p>
            </div>

            <div className="card-border_line"></div>

            <div className="restaurant-info">
              <img src={restaurantLogo1} alt="restaurant-logo1.png" />
              <div className="restaurant-info-inner">
                <h6>Fabio al Porto Ristorante</h6>
                <span className="">5th Avenue New York 68</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteFood;
