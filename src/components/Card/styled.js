// @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap');

import styled from 'styled-components'

export const CardStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  align-items: center;

  .card-container {
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 850px) {
      flex-direction: column;
      justify-content: center;
    }
  }

  .img-card {
    width: 300px;
    position: relative;
    border-radius: 5px;
    text-align: left;
    height: 400px;
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
    -o-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);

    @media (max-width: 850px) {
      margin: 0 auto;
    }
  }

  li {
    list-style: none;
  }

  .img-card .card-image {
    position: relative;
    margin: auto;
    overflow: hidden;
    border-radius: 5px 5px 0px 0px;
    height: 200px;
  }

  .img-card .card-image img {
    width: 100%;
    height: 100%;
    border-radius: 5px 5px 0px 0px;
    max-width: 100%;
    max-height: 100%;
    -webkit-transition: all 0.8s;
    -moz-transition: all 0.8s;
    -o-transition: all 0.8s;
    transition: all 0.8s;
  }

  .img-card .card-image:hover img {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }

  .img-card .card-text {
    padding: 0 15px 15px;
    line-height: 1.5;
  }

  .img-card .card-link {
    padding: 20px 15px 30px;
    width: -webkit-fill-available;
  }

  .img-card .card-link a {
    text-decoration: none;
    position: relative;
    padding: 10px 0;
  }

  .img-card .card-link a:after {
    top: 30px;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    width: 0;

    -webkit-transition: width 0.3s ease 0s, left 0.3s ease 0s;
    -moz-transition: width 0.3s ease 0s, left 0.3s ease 0s;
    -o-transition: width 0.3s ease 0s, left 0.3s ease 0s;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }

  .img-card .card-link a:hover:after {
    width: 100%;
    left: 0;
  }

  .img-card.iCard-style3 {
    text-align: center;
  }

  .img-card.iCard-style3 .card-title {
    top: 80%;
    font-size: 30px;
    color: #fff;
    position: absolute;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    z-index: 1;
  }

  .img-card.iCard-style3 .card-text {
    color: #636060;
    height: 120px;
  }

  .img-card.iCard-style3 .card-text h3 {
    font-size: 19px;
    margin: 3px 0;
  }

  .img-card.iCard-style3 .card-text p {
    font-size: 15px;
  }

  .img-card.iCard-style3 .card-link {
    border-top: 1px solid #e8e8e8;
  }
  .img-card.iCard-style3 .card-link a {
    color: #585858;
  }
  .img-card.iCard-style3 .card-link a:after {
    background: #585858;
  }
`
