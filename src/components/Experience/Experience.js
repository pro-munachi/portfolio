import React from "react";

import { ExperienceStyle } from "./style";

let data = [
  {
    key: 0,
    title: "Contract: Frontend Engineer",
    location: "CyberMe Studio | Saudi Arabia",
    start: " 2022",
    end: "Present",
    role: "Built client side of cyber security applications and crypto arbitrage application",
  },

  {
    key: 1,
    title: "Software Engineer",
    location: "Kids Galaxy | India",
    start: "  2019",
    end: " 2021",
    role: "Working on both server and client side with MERN",
  },
  {
    key: 2,
    title: "MERN Stack Engineer",
    location: "Joyride | FreeLance",
    start: " October 2021",
    end: "December 2021",
    role: "Worked both on server and client side with MERN to build a dispatch app",
  },

  {
    key: 3,
    title: "MERN Stack Engineer",
    location: "Mcbee | Freelance",
    start: " October 2020",
    end: "December 2020",
    role: "Working on both server and client side with MERN to build an e-commerce site",
  },
  {
    key: 5,
    title: "Front-end Engineer",
    location: "Immaculate | Remote",
    start: "  2020",
    end: " 2020",
    role: "Contributed in building the client side of the hospital app",
  },
  {
    key: 6,
    title: "Front-end Engineer",
    location: "Chidi tech | Owerri",
    start: "  2019",
    end: " 2019",
    role: "Was employed to work on the client side of web apps",
  },
];

const Experience = () => {
  return (
    <ExperienceStyle>
      <div className="wrapper">
        <div className="container">
          {data.map((item, i) => (
            <React.Fragment key={i}>
              <div className="box" />
              <div className="writings">
                <h3>
                  {item.title} <span>- {item.location}</span>
                </h3>
                <p>
                  {item.start} - <span>{item.end}</span>
                </p>
                <p>{item.role}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </ExperienceStyle>
  );
};

export default Experience;
