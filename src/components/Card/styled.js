// @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap');

import styled from 'styled-components'

export const CardStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  font-family: 'Ubuntu', sans-serif;

  align-items: center;

  .card-container {
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 850px) {
      flex-direction: column;
    }
  }
  .card {
    position: relative;
    max-width: 320px;
    background-color: transparent;
    overflow: hidden;
    background: #fff;
    margin: 20px 5px;
    height: 300px;
    @media (max-width: 850px) {
      margin: 20px auto;
    }
  }
  .card .card-content {
    text-align: center;
    line-height: 1.3;
    font-size: 1.05rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .card h2 {
    margin-bottom: 0.5rem;
  }
  .card p {
    text-align: justify;
  }
  .card .btn {
    margin-top: 1.5rem;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    padding: 1rem 0.8rem;
    cursor: pointer;
    background: #379683;
    border: none;
    transition: all 0.3s linear;
    color: white;
  }
  .card .btn:hover {
    background: #333;
    color: #eee;
  }

  .card .card-img {
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    overflow: hidden;
    transition: transform 0.4s linear;
  }
  .card .card-img.left {
    left: 0;
  }
  .card .card-img.right {
    right: 0;
  }

  .card:hover .card-img.left {
    transform: translateX(-100%);
  }
  .card:hover .card-img.right {
    transform: translateX(100%);
  }

  .card .card-img img {
    width: 200%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  .card .card-img.left img {
    left: 0;
  }
  .card .card-img.right img {
    right: 0;
  }
`
