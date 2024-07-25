import dishCaro1 from "../assets/images/dish-caro1.jpg";
import restaurantLogo2 from "../assets/images/restaurant-logo2.png";
import restaurantLogo3 from "../assets/images/restaurant-logo3.png";
import restaurantLogo4 from "../assets/images/restaurant-logo4.png";
import "../CSS/PopularFood.css";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import "../CSS/slides.css";

const CarouselComponent = () => {
  const slides = [
    {
      img: dishCaro1,
      logoImg: restaurantLogo2,
      sublabel: "Jagnetina Na Raznju",
      location: "68 5th Avenue New York",
      label: "Korean Bimbap Yamyam",
      price: "$10.00-$30.00",
    },
    {
      img: dishCaro1,
      logoImg: restaurantLogo3,
      sublabel: "Central Caffe Pizzeria",
      location: "68 5th Avenue New York",
      label: "Korean Bimbap Yamyam",
      price: "$10.00-$30.00",
    },
    {
      img: dishCaro1,
      logoImg: restaurantLogo4,
      sublabel: "Dream Food By Opaq",
      location: "68 5th Avenue New York",
      label: "Korean Bimbap Yamyam",
      price: "$10.00-$30.00",
    },
  ];

  return (
    <div className="max-w-[360px]">
      <Carousel
        withControls={false}
        withIndicators
        dragFree
        height={500}
        className="bg-white custom-carousel shadow-lg"
      >
        {slides.map((slide, index) => (
          <Carousel.Slide key={index}>
            <img src={slide.img} alt="" style={{ width: "100%" }} />
            <div className="flex gap-3 py-4 justify-center">
              <img src={slide.logoImg} alt="" />
              <div>
                <p className="font-semibold">{slide.sublabel}</p>
                <p className="text-base">{slide.location}</p>
              </div>
            </div>
            <p className="text-center text-lg font-semibold">{slide.label}</p>
            <p className="text-center text-[#EA1B25] text-base">
              {slide.price}
            </p>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
