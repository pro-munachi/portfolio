import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { TabStyle } from './style'

//Logos
import javascript from '../../assets/logos/javascript.svg'
import htm from '../../assets/logos/html5-without-wordmark-color.svg'
import css from '../../assets/logos/css-3-seeklogo.com.svg'
import native from '../../assets/logos/react-native-seeklogo.com.svg'
import node from '../../assets/logos/nodejs-seeklogo.com.svg'
import github from '../../assets/logos/github-seeklogo.com.svg'
import boot from '../../assets/logos/bootstrap-seeklogo.com.svg'
import ant from '../../assets/logos/ant-design-seeklogo.com.svg'
import material from '../../assets/logos/material-ui-seeklogo.com.svg'
import mongo from '../../assets/logos/mongodb-seeklogo.com.svg'
import redux from '../../assets/logos/redux-seeklogo.com.svg'
import router from '../../assets/logos/reactrouter-seeklogo.com.svg'
import react from '../../assets/logos/react-seeklogo.com.svg'
import next from '../../assets/logos/next-js-seeklogo.com.svg'
import post from '../../assets/logos/postman-seeklogo.com.svg'
import heroku from '../../assets/logos/heroku-seeklogo.com.svg'
import netlify from '../../assets/logos/netlify-seeklogo.com.svg'
import express from '../../assets/logos/expressjs.png'
import styled from '../../assets/logos/styled.png'
import expo from '../../assets/logos/expo.png'
import npm from '../../assets/logos/npm.png'
import yarn from '../../assets/logos/yarn.png'
import go from '../../assets/logos/go.png'

const language = [
  {
    text: 'Javascript',
    id: 1,
    image: javascript,
  },
  {
    text: 'Golang',
    id: 2,
    image: go,
  },
  {
    text: 'Html',
    id: 3,
    image: htm,
  },
  {
    text: 'Css',
    id: 4,
    image: css,
  },
]

const tools = [
  {
    text: 'Redux',
    id: 1,
    image: redux,
  },
  {
    text: 'Github',
    id: 2,
    image: github,
  },
  {
    text: 'React-Router',
    id: 3,
    image: router,
  },
  {
    text: 'Material Ui',
    id: 4,
    image: material,
  },
  {
    text: 'Mongo Db',
    id: 5,
    image: mongo,
  },
  {
    text: 'Ant Design',
    id: 6,
    image: ant,
  },
  {
    text: 'Bootstrap',
    id: 7,
    image: boot,
  },
  {
    text: 'Styled Components',
    id: 8,
    image: styled,
  },
  {
    text: 'Expo',
    id: 9,
    image: expo,
  },
  {
    text: 'Postman',
    id: 10,
    image: post,
  },
  {
    text: 'Heroku',
    id: 11,
    image: heroku,
  },
  {
    text: 'Netlify',
    id: 12,
    image: netlify,
  },
  {
    text: 'NPM',
    id: 13,
    image: npm,
  },
  {
    text: 'Yarn',
    id: 14,
    image: yarn,
  },
]

const tech = [
  {
    text: 'Reactjs',
    id: 1,
    image: react,
  },
  {
    text: 'React-Native',
    id: 2,
    image: native,
  },
  {
    text: 'Nodejs',
    id: 3,
    image: node,
  },
  {
    text: 'Expressjs',
    id: 4,
    image: express,
  },
  {
    text: 'Nextjs',
    id: 5,
    image: next,
  },
]

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function ColorTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='Stacks' {...a11yProps(0)} />
          <Tab label='Languages' {...a11yProps(1)} />
          <Tab label='Tools' {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabStyle>
        <TabPanel value={value} index={0}>
          <span className='tab'>
            {tech.map((item) => (
              <b className='language' key={item.id}>
                <img src={item.image} alt={item.text} />
                <b>{item.text}</b>
              </b>
            ))}
          </span>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <span className='tab'>
            {language.map((item) => (
              <b className='language' key={item.id}>
                <img src={item.image} alt={item.text} />
                <b>{item.text}</b>
              </b>
            ))}
          </span>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <span className='tab'>
            {tools.map((item) => (
              <b className='language' key={item.id}>
                <img src={item.image} alt={item.text} />
                <b>{item.text}</b>
              </b>
            ))}
          </span>
        </TabPanel>
      </TabStyle>
    </Box>
  )
}
