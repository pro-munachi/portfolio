import styled from 'styled-components'

export const CardStyle = styled.div`
  .but-contain {
    margin: 0;
    padding: 0;
  }

  button {
    display: inline-block;
    position: relative;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    margin: 20px 30px;
    background: #379683;
    text-decoration: none;
  }
  span {
    display: block;
    padding: 5px 10px;
    width: 130px;
    text-decoration: none;
  }
  button::before,
  button::after {
    content: '';
    width: 0;
    height: 2px;
    position: absolute;
    transition: all 0.2s linear;
    background: #fff;
    text-decoration: none;
  }

  span::before,
  span::after {
    content: '';
    width: 2px;
    height: 0;
    position: absolute;
    transition: all 0.2s linear;
    background: #fff;
    text-decoration: none;
  }
  button:hover::before,
  button:hover::after {
    width: 100%;
    text-decoration: none;
  }
  button:hover span::before,
  button:hover span::after {
    height: 100%;
    text-decoration: none;
  }

  .btn-6::before {
    left: 50%;
    top: 0;
    transition-duration: 0.4s;
  }
  .btn-6::after {
    left: 50%;
    bottom: 0;
    transition-duration: 0.4s;
  }
  .btn-6 span::before {
    left: 0;
    top: 50%;
    transition-duration: 0.4s;
  }
  .btn-6 span::after {
    right: 0;
    top: 50%;
    transition-duration: 0.4s;
  }
  .btn-6:hover::before,
  .btn-6:hover::after {
    left: 0;
  }
  .btn-6:hover span::before,
  .btn-6:hover span::after {
    top: 0;
  }
`
