import styled from 'styled-components'

export const HomeStyle = styled.div`
  width: 80%;
  margin: 120px auto 0 auto;

  @media (max-width: 1000px) {
    width: 90%;
  }

  .homa {
    font-size: 60px;
    font-family: 'Literata', sans-serif;
    margin: 0;

    @media (max-width: 650px) {
      font-size: 26px;
    }
  }

  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    align-items: center;
    margin: 50px 0;
    @media (max-width: 850px) {
      flex-direction: column;
    }
  }

  .text {
    width: 45%;
    @media (max-width: 850px) {
      width: 100%;
    }

    h2 {
      font-size: 46px;

      @media (max-width: 650px) {
        font-size: 20px;
      }

      span {
        opacity: 0.5;
      }
    }

    h1 {
      font-size: 50px;
      font-family: 'Literata', sans-serif;
      @media (max-width: 850px) {
        font-size: 40px;
      }
      @media (max-width: 650px) {
        font-size: 26px;
      }
    }
  }

  .img {
    width: 45%;
    height: 500px;
    @media (max-width: 850px) {
      width: 80%;
      margin: auto;
      height: 400px;
    }
    @media (max-width: 650px) {
      width: 100%;
      height: 450px;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }

  .middle {
    h2 {
      font-size: 46px;
      @media (max-width: 850px) {
        font-size: 36px;
      }
      @media (max-width: 650px) {
        font-size: 26px;
      }

      span {
        opacity: 0.5;
      }
    }

    p {
      font-size: 22px;
      text-align: center;
      font-style: italic;

      @media (max-width: 650px) {
        font-size: 16px;
      }
    }

    .view {
      display: flex;
      justify-content: center;
      @media (max-width: 750px) {
        width: 100%;
      }
      button {
        width: 320px;
        margin: 10px auto;
        padding: 15px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #379683;
        color: white;
        border: none;
        outline: none;
        border-radius: 6px;

        @media (max-width: 750px) {
          width: 300px;
          border-radius: 6px;
        }
      }
    }
  }

  .last {
    margin: 15% 0;
  }
`
