import React from "react";
import { Categories } from "../assets/Data";
import HeroImg from "../assets/images/hero-page.png";

const Home = () => {
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">SHOP BY CATEGORIES</div>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {Categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border bordr-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img src={HeroImg} alt="" />
          <div>
            <p>Bliss | eSHop</p>
            <h2>WELCOME TO ESHOP</h2>
            <p>MILLIONS+ PRODUCTS</p>
            <button>SHOP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
