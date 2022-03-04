import joyride from '../images/joyride.PNG'
import joyride1 from '../images/joyride1.PNG'
import joyride2 from '../images/joyride2.PNG'
import joyride3 from '../images/joyride3.PNG'
import alien from '../images/alien.PNG'
import alien1 from '../images/alien1.PNG'
import alien2 from '../images/alien2.PNG'
import mcbee from '../images/mcbee.PNG'
import mcbee1 from '../images/mcbee1.PNG'
import mcbee2 from '../images/mcbee2.PNG'
import imma from '../images/imma.PNG'
import imma1 from '../images/imma1.PNG'
import imma2 from '../images/imma2.PNG'
import port from '../images/port.PNG'
import port1 from '../images/port1.PNG'
import port2 from '../images/port2.PNG'
import gamelyd from '../images/gamelyd.PNG'
import gamelyd1 from '../images/gamelyd1.PNG'
import gamelyd2 from '../images/gamelyd3.PNG'
import reyvue from '../images/reyvue.PNG'
import reyvue1 from '../images/reyvue1.PNG'
import reyvue2 from '../images/reyvue2.PNG'
import react from '../logos/react-seeklogo.com.svg'
import material from '../logos/material-ui-seeklogo.com.svg'
import bootstrap from '../logos/bootstrap-seeklogo.com.svg'
import css from '../logos/css-3-seeklogo.com.svg'
import express from '../logos/expressjs.png'
import mongo from '../logos/mongodb-seeklogo.com.svg'
import redux from '../logos/redux-seeklogo.com.svg'
import styled from '../logos/styled.png'
import go from '../logos/go.png'

const cards = [
  {
    id: 1,
    head: 'Joyride',
    body: '  Joyride is a web application for dispatch rides. where a usercreates an order and the order is dispatched by the dispatchers.',
    img: joyride,
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
    img: mcbee,
    second: mcbee1,
    third: mcbee2,
    arsenal: [
      { img: react, name: 'Reactjs' },
      { img: bootstrap, name: 'Bootstrap' },
      { img: css, name: 'CSS' },
      { img: express, name: 'Expressjs' },
      { img: mongo, name: 'MongoDb' },
      { img: redux, name: 'Redux' },
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
    img: alien,
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
    head: 'Gamelyd',
    body: 'Gamelyd is a website for hosting free and paid game competitions.',
    img: gamelyd1,
    second: gamelyd2,
    third: gamelyd,
    arsenal: [
      { img: react, name: 'Reactjs' },
      { img: go, name: 'Golang' },
      { img: styled, name: 'Styled-Components' },
      { img: material, name: 'Material-Ui' },
      { img: css, name: 'CSS' },
    ],
    links: [
      {
        link: 'https://github.com/coders-pro/Gamelyd-frontend',
        name: 'Git Frontend',
        id: 1,
      },

      {
        link: 'https://github.com/coders-pro/Gamelyd-backend',
        name: 'Git Backend',
        id: 2,
      },

      {
        link: 'https://gamelyd-madumcbobby.vercel.app/',
        name: 'Website',
        id: 3,
      },
    ],
  },

  {
    id: 5,
    head: 'Reyvue',
    body: 'This is a website for dropping sexual reviews.',
    img: reyvue2,
    second: reyvue1,
    third: reyvue,
    arsenal: [
      { img: react, name: 'Reactjs' },
      { img: styled, name: 'Styled-Components' },
      { img: express, name: 'ExpressJs' },
    ],
    links: [
      {
        link: '#',
        name: 'Private Repo',
        id: 1,
      },
      {
        link: 'https://reyvue.com',
        name: 'Website',
        id: 2,
      },
    ],
  },

  {
    id: 6,
    head: 'Munachi',
    body: 'This is my portfolio website which was built to display my skills.',
    img: port,
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
    id: 7,
    head: 'Immaculate',
    body: 'Immaculate Eye Clinic is a website for an eye clinic hospital which serves the purpose of providing necessary information to patients.',
    img: imma,
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
]

export default cards
