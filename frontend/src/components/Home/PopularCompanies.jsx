import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { AiFillAmazonSquare } from "react-icons/ai";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: " Luxor North Tower, Bangalore, Karnataka",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Amazon",
      location: "Gurgaon, Haryana",
      openPositions: 5,
      icon: <AiFillAmazonSquare />,
    },
    {
      id: 3,
      title: "Apple",
      location: "New Delhi",
      openPositions: 20,
      icon: <FaApple />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;