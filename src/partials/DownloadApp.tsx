import mobileImg from "../assets/resource/app-mockup.png";
import appImg1 from "../assets/resource/app-download-btn1.png";
import appImg2 from "../assets/resource/app-download-btn2.png";
import cloud2 from '../assets/images/clouds2.png'
import { useRef } from "react";
import { useInView } from "framer-motion";

const DownloadApp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="overflow-y-hidden">
      <div className="bg-white h-32 md:block hidden"></div>

      <div className="w-full h-auto bg-[#EA1B25] text-white xl:px-24 lg:px-10 px-3 relative">

      <div className="flex md:justify-between lg:justify-around xl:justify-evenly">
        <div></div>

        <div className="md:w-[50%] w-full lg:py-14 py-10 md:px-2">
          <h2 className="font-bold lg:text-3xl md:text-2xl text-xl pb-4">The Best Food Delivery App</h2>
          <p className="md:text-lg text-base lg:pb-8 pb-5">
            We have a launch team that focuses on one city at a time. At the end
            of the day, we're a marketplace. In order to make an effective
            marketplace, you need critical mass. We need enough restaurants that
            quality and variety
          </p>
          <div className="flex gap-5">
            <div>
              <img src={appImg1} alt="" />
            </div>
            <div>
              <img src={appImg2} alt="" />
            </div>
          </div>
        </div>
        
      </div>

      <div className="lg:block absolute bottom-0 left-0 w-full hidden"><img src={cloud2} width='100%' alt="" /></div>

      <div
      ref={ref} 
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
       className="md:block absolute bottom-0 hidden xl:left-72"> 
          <img src={mobileImg} alt="" />
        </div>

    </div>
    </div>
  );
};

export default DownloadApp;
