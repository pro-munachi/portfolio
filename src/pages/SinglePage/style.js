import styled from 'styled-components'

export const SingleStyle = styled.div`
  width: 80%;
  margin: 90px auto 0 auto;

  @media (max-width: 1000px) {
    width: 90%;
  }

  h1 {
    font-size: 60px;
    font-family: 'Literata', sans-serif;
    @media (max-width: 850px) {
      font-size: 47px;
    }
    @media (max-width: 650px) {
      font-size: 26px;
    }
  }

  .link {
    text-decoration: none;
    font-size: 30px;
    margin: 20px auto;
    color: black;
    text-align: center;
  }

  .first {
    margin: 20% 0;

    h2 {
      text-align: left;
      font-size: 46px;
      @media (max-width: 850px) {
        font-size: 36px;
      }
      @media (max-width: 650px) {
        font-size: 20px;
      }

      span {
        opacity: 0.5;
      }
    }

    .img {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    img {
      height: 300px;
      width: 500px;
      margin: 20px 20px;

      @media (max-width: 651px) {
        width: 100%;
      }
    }
  }

  .second {
    margin: 15% 0;

    h2 {
      font-size: 46px;
      @media (max-width: 850px) {
        font-size: 36px;
      }
      @media (max-width: 650px) {
        font-size: 20px;
      }

      span {
        opacity: 0.5;
      }
    }

    p {
      font-size: 22px;

      @media (max-width: 650px) {
        font-size: 15px;
      }
    }
  }

  .third {
    margin: 15% 0;

    h2 {
      font-size: 46px;
      @media (max-width: 850px) {
        font-size: 36px;
      }
      @media (max-width: 650px) {
        font-size: 20px;
      }

      span {
        opacity: 0.5;
      }
    }

    .tab {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      @media (max-width: 651px) {
        justify-content: center;
      }

      .language {
        display: flex;
        width: 220px;
        height: 70px;
        background: white;
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
        align-items: center;
        margin: 9px 10px;

        :hover {
          width: 225px;
          height: 75px;
          transition: 0.5s ease-in-out;
        }

        @media (max-width: 651px) {
          width: 260px;
        }

        img {
          width: 25px;
          margin: 0 8px;
        }

        b {
          margin: 0 10px;
        }
      }
    }
  }

  .fourth {
    margin: 15% 0;

    button {
      width: 320px;
      margin: auto;
      padding: 15px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #379683;
      color: white;
      border: none;
      outline: none;
      border-radius: 6px;

      @media (max-width: 650px) {
        width: 100%;
      }
    }

    h2 {
      font-size: 46px;
      @media (max-width: 850px) {
        font-size: 36px;
      }
      @media (max-width: 650px) {
        font-size: 20px;
      }

      span {
        opacity: 0.5;
      }
    }

    .web {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex-direction: column;

      @media (max-width: 651px) {
        justify-content: center;
      }

      a {
        margin: 20px 20px;
        align-items: center;
      }

      p {
        font-size: 22px;
        @media (max-width: 650px) {
          font-size: 15px;
        }
      }
    }
  }
`
