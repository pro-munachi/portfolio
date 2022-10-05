import meme from "../images/meme.PNG";
import meme1 from "../images/meme1.PNG";
import meme2 from "../images/meme2.PNG";
import coupon from "../images/coupon.PNG";
import coupon1 from "../images/coupon1.PNG";
import coupon2 from "../images/coupon2.PNG";
import Github from "../images/github.png";
import Github1 from "../images/github1.png";
import react from "../logos/react-seeklogo.com.svg";
import css from "../logos/css-3-seeklogo.com.svg";
import redux from "../logos/redux-seeklogo.com.svg";
import express from "../logos/expressjs.png";
import hos from "../images/hos.jpeg";
import hos1 from "../images/hos1.jpeg";
import expo from "../logos/expo.png";
import reactNative from "../logos/react-native-seeklogo.com.svg";

const play = [
  {
    id: 0,
    head: "Github-Oauth",
    body: "Project with github oauth to get your public github repositories.",
    img: Github,
    second: Github1,
    third: Github,
    arsenal: [
      { img: react, name: "Reactjs" },
      { img: css, name: "Css" },
      { img: express, name: "ExpressJs" },
    ],
    links: [
      {
        link: "https://github.com/pro-munachi/Github-oauth",
        name: "Github",
        id: 1,
      },
      {
        link: "https://github-oauth-pro-munachi.vercel.app",
        name: "Website",
        id: 2,
      },
    ],
  },
  {
    id: 1,
    head: "Meme Generator",
    body: "  The website generates memes with random pictures and with the words you inputed.",
    img: meme,
    second: meme1,
    third: meme2,
    arsenal: [
      { img: react, name: "Reactjs" },
      { img: css, name: "CSS" },
    ],
    links: [
      {
        link: "github.com",
        name: "Github",
        id: 1,
      },
      {
        link: "https://silly-roentgen-2e4648.netlify.app/",
        name: "Website",
        id: 2,
      },
    ],
  },

  {
    id: 2,
    head: "Coupon Site",
    body: "A site for inputing a coupon code which will discount the price of the macbook.",
    img: coupon,
    second: coupon1,
    third: coupon2,
    arsenal: [
      { img: react, name: "Reactjs" },
      { img: css, name: "CSS" },
      { img: redux, name: "Redux" },
    ],
    links: [
      {
        link: "https://sleepy-newton-34eeab.netlify.app/",
        name: "Website",
        id: 1,
      },
    ],
  },

  // {
  //   id: 3,
  //   head: "Github",
  //   body: "Replicated the repository page of github for a job interview i had.",
  //   img: github1,
  //   first: github,
  //   second: github2,
  //   arsenal: [
  //     { img: html, name: "HTML" },
  //     { img: css, name: "CSS" },
  //   ],
  //   links: [
  //     {
  //       link: "https://github.com/pro-munachi/Git-hub",
  //       name: "Github",
  //       id: 1,
  //     },

  //     {
  //       link: "https://epic-jones-15604d.netlify.app/",
  //       name: "Website",
  //       id: 2,
  //     },
  //   ],
  // },
  {
    id: 4,
    head: "Hospital",
    body: "Mobile app to get a list of hospitals and book an appointment with a doctor.",
    img: hos,
    second: hos1,
    third: hos,
    arsenal: [
      { img: reactNative, name: "React-Native" },
      { img: expo, name: "Expo" },
    ],
    links: [
      {
        link: "https://github.com/pro-munachi/Hospital/tree/master/frontend",
        name: "Github",
        id: 1,
      },
      {
        link: "https://drive.google.com/file/d/1p06VC248yM4Q8HeuYWgAvWzkd6C9FPWI/view?usp=drivesdk",
        name: "App Download",
        id: 2,
      },
    ],
  },
];

export default play;
