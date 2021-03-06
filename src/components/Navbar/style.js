import styled from 'styled-components'

export const NavStyle = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    background-color: black;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    filter: blur(80px);
    -webkit-filter: (40px);
    z-index: 2;
  }
  .container {
    background-color: white;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    width: 100%;
    height: 12vh;
    transition: 1s;
    z-index: 99;
    .logo {
      display: flex;
      align-items: center;
      left: 1em;
      position: fixed;
      top: 6px;
      img {
        left: 2em;
        width: 120px;
      }
    }
    .nav_items_mobile {
      display: flex;
      body {
        overflow-x: hidden;
      }
      position: absolute;
      right: 0px;
      top: 0;
      height: 100vh;
      margin-right: 0em;
      background: #379683;
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      opacity: 1;
      transform: ${(props) => props.transform};
      transition: 0.3s;

      .single_item {
        opacity: 0.5;
        display: flex;
        flex-direction: column;
        text-align: center;
      }
      .when_active_mobile {
        text-align: center;
        opacity: 1;
      }
      a {
        color: white;
        text-decoration: none;
        font-size: 59px;
        margin: 20px 0;
      }
    }
    @media (max-width: 999px) {
      height: 8vh;
    }
  }
`

export const ButtonStyle = styled.div`
  position: fixed;
  top: 11px;
  right: 30px;
  width: 35px;
  display: block;
  cursor: pointer;
  z-index: 99;
  .line1 {
    background: blue;
    width: 45px;
    height: 2px;
    margin: 5px;
    border-radius: 2px;
    transform: ${(props) => props.line1};
    transition: 0.5s;
  }
  .line1w {
    background: white;
    width: 45px;
    height: 2px;
    margin: 5px;
    border-radius: 2px;
    transform: ${(props) => props.line1};
    transition: 0.5s;
  }
  .line2 {
    background: black;
    width: 25px;
    height: 2px;
    margin: 5px;
    border-radius: 2px;
    opacity: ${(props) => props.line2};
  }
  .line3 {
    background: blue;
    width: 45px;
    height: 2px;
    margin: 5px;
    border-radius: 2px;
    transform: ${(props) => props.line3};
    transition: 0.5s;
  }
  .line3w {
    background: white;
    width: 45px;
    height: 2px;
    margin: 5px;
    border-radius: 2px;
    transform: ${(props) => props.line3};
    transition: 0.5s;
  }
  @media (max-width: 999px) {
    display: block;
  }
`
