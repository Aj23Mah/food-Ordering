import Nav from "../partials/Nav";
import Footer from "../partials/Footer";
import "../CSS/Home.css";
import clouds from "../assets/images/clouds.png";
import scooty from "../assets/images/deliver.png";
import factIcon1 from "../assets/images/fact-icon1.png";
import factIcon2 from "../assets/images/fact-icon2.png";
import factIcon3 from "../assets/images/fact-icon3.png";
import factIcon4 from "../assets/images/fact-icon4.png";
import TopResturant from "../partials/TopResturant";
import FavoriteFood from "../partials/FavoriteFood";
import { useRef } from "react";
import { useInView } from "framer-motion";
import PopularFood from "../partials/PopularFood";
import Parallax from "./../partials/parallax";
import FeaturedResturant from "../partials/FeaturedResturant";
import DownloadApp from "../partials/DownloadApp";

import CountUp from "react-countup";

const Home = () => {
  const landingCount = [
    { label: "Resturant", count: "137", image: factIcon1 },
    { label: "People Served", count: "158", image: factIcon2 },
    { label: "Happy Service", count: "659", k: 'k', image: factIcon3 },
    { label: "Regular user", count: "235", image: factIcon4 },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="main-section">
      <Nav />

      <section className="hero-section">
        <div className="landing">
          <div className="landing_header">
            Order <span>Food Online From</span> the Best Restaurants
          </div>

          <div className="resturant-form">
            <input type="text" placeholder="Restaurant Name" />
            <input type="text" placeholder="Search Location" />
            <button>SEARCH</button>
          </div>

          <div className="funfacts">
            {landingCount.map((v) => (
              <div className="fact-box">
                <div className="fact-img">
                  <img src={v.image} alt="" />
                </div>
                <div className="fact-details">
                  <div className="fact-count flex">
                    <CountUp
                      start={0}
                      end={Number(v.count)}
                      duration={5}
                      delay={0}
                    ></CountUp>
                    <p>{v.k}</p>
                  </div>
                  <div className="fact-label">{v.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cloud-img">
          <img src={clouds} alt="" />
        </div>
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="left-scooty"
        >
          <img src={scooty} alt="" />
        </div>
      </section>

      <TopResturant />
      <FavoriteFood />
      <PopularFood />
      <Parallax />
      <FeaturedResturant />
      <DownloadApp />

      <Footer />
    </div>
  );
};

export default Home;
