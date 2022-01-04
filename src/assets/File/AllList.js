import homeImg from '../images/home.png'
import hom from '../images/card1.PNG'
import joyride1 from '../images/joyride1.PNG'
import joyride2 from '../images/joyride2.PNG'
import joyride3 from '../images/joyride3.PNG'
import alien1 from '../images/alien1.PNG'
import alien2 from '../images/alien2.PNG'
import mcbee1 from '../images/mcbee1.PNG'
import mcbee2 from '../images/mcbee2.PNG'
import imma1 from '../images/imma1.PNG'
import imma2 from '../images/imma2.PNG'
import port1 from '../images/port1.PNG'
import port2 from '../images/port2.PNG'
import meme1 from '../images/meme1.PNG'
import meme2 from '../images/meme2.PNG'
import coupon1 from '../images/coupon1.PNG'
import coupon2 from '../images/coupon2.PNG'
import github from '../images/github.PNG'
import react from '../logos/react-seeklogo.com.svg'
import material from '../logos/material-ui-seeklogo.com.svg'
import bootstrap from '../logos/bootstrap-seeklogo.com.svg'
import css from '../logos/css-3-seeklogo.com.svg'
import express from '../logos/expressjs.png'
import mongo from '../logos/mongodb-seeklogo.com.svg'
import html from '../logos/html5-without-wordmark-color.svg'
import redux from '../logos/redux-seeklogo.com.svg'
import styled from '../logos/styled.png'

const all = [
  {
    id: 1,
    head: 'Joyride',
    body: '  Joyride is a web application for dispatch rides. where a usercreates an order and the order is dispatched by the dispatchers.',
    img: homeImg,
    first: joyride1,
    second: joyride2,
    third: joyride3,
    arsenal: [
      { img: react, name: 'Reactjs' },
      { img: material, name: 'Material-Ui' },
      { img: css, name: 'CSS' },
      { img: express, name: 'Expressjs' },
      { img: mongo, name: 'MongoDb' },
    ],
    links: [
      {
        link: 'https://github.com/pro-munachi/Joyride-frontend',
        name: 'Git Frontend',
        id: 1,
      },
      {
        link: 'https://github.com/pro-munachi/Joyride-backend',
        name: 'Git Backend',
        id: 2,
      },
      { link: 'https://joyrideapp.herokuapp.com', name: 'Website', id: 3 },
    ],
  },

  {
    id: 2,
    head: 'Mcbee',
    body: '  Mcbee is an E-commerce website for buying different kinds of goods.',
    img: hom,
    second: mcbee1,
    third: mcbee2,
    arsenal: [
      { img: react, name: 'Reactjs' },
      { img: bootstrap, name: 'Bootstrap' },
      { img: css, name: 'CSS' },
      { img: express, name: 'Expressjs' },
      { img: mongo, name: 'MongoDb' },
    ],
    links: [
      {
        link: 'https://github.com/pro-munachi/e-commerce',
        name: 'Github',
        id: 1,
      },

      { link: 'https://mcbee.herokuapp.com', name: 'Website', id: 2 },
    ],
  },

  {
    id: 3,
    head: 'Alien Bandit',
    body: 'Alien Bandit is a website for an NFT brand Alien Bandits.',
    img: homeImg,
    second: alien1,
    third: alien2,
    arsenal: [
      { img: react, name: 'Reactjs' },
      { img: material, name: 'Material-Ui' },
      { img: css, name: 'CSS' },
    ],
    links: [
      {
        link: 'https://github.com/pro-munachi/alien-bandit',
        name: 'Github',
        id: 1,
      },

      { link: 'https://alienbandit.herokuapp.com/', name: 'Website', id: 2 },
    ],
  },

  {
    id: 4,
    head: 'Munachi',
    body: 'This is my portfolio website.',
    img: homeImg,
    second: port1,
    third: port2,
    arsenal: [
      { img: react, name: 'Reactjs' },
      { img: styled, name: 'Styled-Components' },
    ],
    links: [
      {
        link: 'https://github.com/pro-munachi/portfolio',
        name: 'Github',
        id: 1,
      },

      {
        link: '/',
        name: 'Website',
        id: 2,
      },
    ],
  },

  {
    id: 5,
    head: 'Immaculate',
    body: 'Immaculate Eye Clinic is a website for an eye clinic hospital which serves the purpose of providing necessary information to patients.',
    img: homeImg,
    second: imma1,
    third: imma2,
    arsenal: [
      { img: react, name: 'Reactjs' },
      { img: styled, name: 'Styled-Components' },
    ],
    links: [
      {
        link: 'https://github.com/orgs/Immaculate-Eye-Clinic/dashboard',
        name: 'Github',
        id: 1,
      },

      {
        link: 'https://pedantic-easley-e837e3.netlify.app/',
        name: 'Website',
        id: 2,
      },
    ],
  },
  {
    id: 6,
    head: 'Meme Generator',
    body: '  The website generates memes with random pictures and with the words you inputed.',
    img: homeImg,
    second: meme1,
    third: meme2,
    arsenal: [
      { img: react, name: 'Reactjs' },
      { img: css, name: 'CSS' },
    ],
    links: [
      {
        link: 'github.com',
        name: 'Github',
        id: 1,
      },
      {
        link: 'https://silly-roentgen-2e4648.netlify.app/',
        name: 'Website',
        id: 2,
      },
    ],
  },

  {
    id: 7,
    head: 'Coupon Site',
    body: 'A site for inputing a coupon code which will discount the price of the macbook.',
    img: hom,
    second: coupon1,
    third: coupon2,
    arsenal: [
      { img: react, name: 'Reactjs' },
      { img: css, name: 'CSS' },
      { img: redux, name: 'Redux' },
    ],
    links: [
      {
        link: 'https://sleepy-newton-34eeab.netlify.app/',
        name: 'Website',
        id: 1,
      },
    ],
  },

  {
    id: 8,
    head: 'Github',
    body: 'Replicated the repository page of github for a job interview i had.',
    img: homeImg,
    second: github,
    arsenal: [
      { img: html, name: 'HTML' },
      { img: css, name: 'CSS' },
    ],
    links: [
      {
        link: 'https://github.com/pro-munachi/Git-hub',
        name: 'Github',
        id: 1,
      },

      {
        link: 'https://epic-jones-15604d.netlify.app/',
        name: 'Website',
        id: 2,
      },
    ],
  },
]

export default all
