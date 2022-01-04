import homeImg from '../images/home.png'
import hom from '../images/card1.PNG'
import joyride1 from '../images/joyride1.PNG'
import joyride2 from '../images/joyride2.PNG'
import joyride3 from '../images/joyride3.PNG'
import react from '../logos/react-seeklogo.com.svg'
import material from '../logos/material-ui-seeklogo.com.svg'
import express from '../logos/expressjs.png'
import mongo from '../logos/mongodb-seeklogo.com.svg'

const cards = [
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
    body: '  Joyride is a web application for dispatch rides. where a usercreates an order and the order is dispatched by the dispatchers.',
    link: '/',
    img: hom,
  },
  {
    id: 3,
    head: 'Alien Bandit',
    body: '  Joyride is a web application for dispatch rides. where a usercreates an order and the order is dispatched by the dispatchers.',
    link: '/',
    img: homeImg,
  },
]

export default cards
