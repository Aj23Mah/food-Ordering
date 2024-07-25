import '../CSS/TopResturant.css'
import topRestaurant1 from '../assets/images/top-restaurant1.png'
import topRestaurant2 from '../assets/images/top-restaurant2.png'
import topRestaurant3 from '../assets/images/top-restaurant3.png'
import topRestaurant4 from '../assets/images/top-restaurant4.png'
import topRestaurant5 from '../assets/images/top-restaurant5.png'
import topRestaurant6 from '../assets/images/top-restaurant6.png'
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const TopResturant = () => {
  const resturantImg = [
    {image: topRestaurant1},
    {image: topRestaurant2},
    {image: topRestaurant3},
    {image: topRestaurant4},
    {image: topRestaurant5},
    {image: topRestaurant6},
  ]

  const [visibleCards, setVisibleCards] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setVisibleCards((prev) => {
          if (prev < resturantImg.length) {
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
    <section className="top_resturant">
        <div className='sub_header'>Website for Resturant and Cafe</div>
        <div className='header'>TOP RESTAURANTS</div>
        <div className='description'>
          Things that get tricky are things like burgers and fries, or things
          that are deep-fried. We do have a couple of burger restaurants that
          are capable of doing a good job transporting but it's Fries are almost
          impossible.
        </div>

        <div className="resturant_img-box" ref={ref}>
          {resturantImg.map((v, index) => ( 
            <div
              key={index}
              style={{
                transform: visibleCards > index ? "none" : "translateY(20px)",
                opacity: visibleCards > index ? 1 : 0,
                transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 0.01}s`,
              }}
             className='resturent_img'>
              <img src={v.image} alt="" />
            </div>
          ))}
        </div>
      </section>
  )
}

export default TopResturant