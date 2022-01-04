import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavStyle } from './style.js'
import Button from './Button'

class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      scrollPosition: 0,
      display: false,
      background: '',
      toggle: 'translateX(100%)',
      line1: '',
      line2: '1',
      line3: '',
    }
  }

  /* This section controls the NavBar fade on Scroll*/
  checkScroll = (event) => {
    this.setState(
      {
        scrollPosition: window.pageYOffset,
      },
      this.scrollAction
    )
  }

  scrollAction = () => {
    if (this.state.scrollPosition > 50) {
      this.setState({
        background: '#0D0D0D',
      })
    } else {
      this.setState({
        background: 'transparent',
      })
    }
  }
  /* The above section controls the NavBar fade on Scroll*/

  /*  Code below controls the Hamburger Menu Button */

  onClickButton = () => {
    this.setState(
      (prevState) => ({
        display: !prevState.display,
      }),
      this.change
    )
  }

  onClickBackdrop = () => {
    this.setState({
      display: false,
      toggle: 'translateX(100%)',
      line1: '',
      line2: '1',
      line3: '',
    })
  }

  change = () => {
    if (this.state.display === true) {
      this.setState({
        toggle: 'translateX(0%)',
        line1: 'rotate(-45deg) translate(-4px,6px)',
        line2: '0',
        line3: 'rotate(45deg) translate(-4px,-6px)',
        display: this.state.display,
      })
    } else {
      this.setState({
        toggle: 'translateX(100%)',
        line1: '',
        line2: '1',
        line3: '',
        display: this.state.display,
      })
    }
  }

  /*  Code above controls the Hamburger Menu Button */

  render() {
    const styleContain = {}
    return (
      <NavStyle
        transform={this.state.toggle}
        display={this.state.displayBackdrop}
      >
        {(window.onscroll = () => this.checkScroll())}
        {this.state.display ? (
          <div onClick={this.onClickBackdrop} className='backdrop'></div>
        ) : null}
        <div
          style={{ ...styleContain, backgroundColor: this.state.background }}
          className='container'
        >
          <div className='logo'>
            <img src='l.jpg' alt='Logo here' />
          </div>

          <div className='nav_items_mobile'>
            <NavLink
              to='/'
              onClick={this.onClickBackdrop}
              className={({ isActive }) =>
                isActive ? 'when_active_mobile' : 'single_item'
              }
            >
              Home<span></span>
            </NavLink>
            <NavLink
              to='/about'
              onClick={this.onClickBackdrop}
              className={({ isActive }) =>
                isActive ? 'when_active_mobile' : 'single_item'
              }
            >
              About<span></span>
            </NavLink>
            <NavLink
              to='/projects'
              onClick={this.onClickBackdrop}
              className={({ isActive }) =>
                isActive ? 'when_active_mobile' : 'single_item'
              }
            >
              Projects<span></span>
            </NavLink>
            <NavLink
              to='/contact'
              onClick={this.onClickBackdrop}
              className={({ isActive }) =>
                isActive ? 'when_active_mobile' : 'single_item'
              }
            >
              Contact Me<span></span>
            </NavLink>
          </div>
        </div>

        <Button
          onClick={this.onClickButton}
          line1={this.state.line1}
          line2={this.state.line2}
          line3={this.state.line3}
        />
      </NavStyle>
    )
  }
}
export default NavBar
