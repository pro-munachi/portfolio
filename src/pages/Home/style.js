import styled from 'styled-components'

export const HomeStyle = styled.div`
  width: 80%;
  margin: 15% auto 0 auto;

  @media (max-width: 1000px) {
    width: 90%;
  }

  .homa {
    font-size: 60px;
    font-family: 'Literata', sans-serif;
    @media (max-width: 850px) {
      font-size: 47px;
    }
    @media (max-width: 650px) {
      font-size: 38px;
    }
  }

  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    align-items: center;
    margin: 20% 0;
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

    h1 {
      font-size: 60px;
      font-family: 'Literata', sans-serif;
      @media (max-width: 850px) {
        font-size: 47px;
      }
      @media (max-width: 650px) {
        font-size: 38px;
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
        font-size: 36px;
      }

      span {
        opacity: 0.5;
      }
    }

    p {
      font-size: 22px;
      text-align: center;
      font-style: italic;
    }

    .view {
      width: 50%;
      margin: auto;
      @media (max-width: 750px) {
        width: 100%;
      }
      button {
        width: 320px;
        margin: auto;
        padding: 15px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 750px) {
          width: 100%;
        }
      }
    }
  }

  .last {
    margin: 15% 0;
  }
`
