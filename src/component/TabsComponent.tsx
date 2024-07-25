import React, { useEffect, useState } from "react";
import "../CSS/TabComponent.css";
import { Tabs } from "@mantine/core";
import { FaRegCircleCheck, FaRegStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import restImg from "../assets/resource/featured-restaurant-img1.jpg";
import { RiMotorbikeLine } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";

const Card = ({ title, description, isVisible }) => (
  <div className={`p-6 border rounded-lg shadow-lg flex lg:flex-row flex-col items-center gap-5 card ${isVisible ? 'visible' : ''}`}>
    <img src={restImg} alt="" />
    <div className="w-full">
      <div className="flex items-center justify-between">
        <p className="text-[#EA1B25] text-sm">5th Avenue New York 68</p>
        <div className="flex items-center gap-1 text-[#EA1B25] text-base font-semibold">
          <CiHeart /> <p>12</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex items-center gap-1 bg-[#FFBE00] text-white text-base px-2 py-1">
          <FaRegStar /> <p>4.25</p>
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <p className="text-[#EA1B25] font-semibold text-base">Type of food:</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="flex gap-6 mt-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaRegCircleCheck />
          <p>Min Order $50</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <RiMotorbikeLine />
          <p>30min</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
        <BsCashCoin />
        <p>Accepts cash & online payments</p>
      </div>
      <button className="bg-gray-200 py-2 px-4 text-sm font-semibold hover:bg-[#EA1B25] hover:text-white mt-4 delay-0 duration-300 ease-in-out transition-all">
        Order Now
      </button>
    </div>
  </div>
);

const TabsComponent = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  const allCards = [
    { title: "Domino's Pizza", description: "Pizza and Beverages" },
    { title: "Burger King", description: "Burgers and Fries" },
    { title: "Wendy's Cafe", description: "Pasta and Desserts" },
    { title: "Restaurant", description: "Various Dishes" },
  ];

  const filterCards = (category) => {
    switch (category) {
      case "beverages":
        return allCards.filter(
          (card) =>
            card.title === "Domino's Pizza" || card.title === "Restaurant"
        );
      case "burgers":
        return allCards.filter(
          (card) => card.title === "Burger King" || card.title === "Restaurant"
        );
      case "pasta":
        return allCards.filter(
          (card) => card.title === "Wendy's Cafe" || card.title === "Restaurant"
        );
      default:
        return allCards;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card');
      const triggerBottom = window.innerHeight / 5 * 4;
      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
          setVisibleCards((prev) => [...prev, index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className=" w-full md:py-10 py-7 lg:px-[280px] md:px-16">
      <div className="sub_header text-center">Your Favourite Food</div>
      <div className="header text-center">CHOOSE YOUR FOOD</div>
      <Tabs
        variant="pills"
        defaultValue="all"
        color="#FFBE00"
        className="md:mt-9 mt-6"
        onTabChange={() => setVisibleCards([])}
      >
        <Tabs.List className="custom-tabs-list" justify="center" mb={30}>
          <Tabs.Tab value="all" className="custom-tab">
            <p className=" flex  items-center justify-center text-lg"> All</p>
          </Tabs.Tab>
          <Tabs.Tab value="beverages" className="custom-tab">
            <p className=" flex  items-center justify-center text-lg">
              Beverages
            </p>
          </Tabs.Tab>
          <Tabs.Tab value="burgers" className="custom-tab">
            <p className=" flex  items-center justify-center text-lg">
              Burgers
            </p>
          </Tabs.Tab>
          <Tabs.Tab value="pasta" className="custom-tab">
            <p className=" flex  items-center justify-center text-lg"> Pasta</p>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filterCards("all").map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                isVisible={visibleCards.includes(index)}
              />
            ))}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="beverages">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filterCards("beverages").map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                isVisible={visibleCards.includes(index)}
              />
            ))}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="burgers">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filterCards("burgers").map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                isVisible={visibleCards.includes(index)}
              />
            ))}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="pasta">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filterCards("pasta").map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                isVisible={visibleCards.includes(index)}
              />
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
