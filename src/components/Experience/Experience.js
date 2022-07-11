import React from "react";

import { ExperienceStyle } from "./style";

let data = [
  {
    key: 0,
    title: "Contract: Frontend Engineer",
    location: "CyberMe Studio | Saudi Arabia",
    start: " May 2022",
    end: "Present",
    role: "Built client side of software security applications and crypto arbitrage application",
  },
  {
    key: 1,
    title: "MERN Stack Engineer",
    location: "Joyride | FreeLance",
    start: " October 2021",
    end: "December 2021",
    role: "Worked both on server and client side with MERN to build a dispatch app",
  },
  {
    key: 2,
    title: "Software Engineer",
    location: "Kids Galaxy | India",
    start: " June 2021",
    end: "August 2021",
    role: "Working on both server and client side with MERN",
  },
  {
    key: 3,
    title: "Front-end Engineer",
    location: "HNGI8 | Remote",
    start: " August 2021",
    end: "August 2021",
    role: "Joined team aristotle to solve issues from an open source",
  },
  {
    key: 4,
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
    start: " Febuary 2020",
    end: "June 2020",
    role: "Contributed in building the client side of the hospital app",
  },
  {
    key: 6,
    title: "Front-end Engineer",
    location: "Chidi tech | Owerri",
    start: " July 2019",
    end: "November 2019",
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
