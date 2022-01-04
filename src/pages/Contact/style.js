import styled from 'styled-components'

export const ContactStyle = styled.div`
  width: 80%;
  margin: 15% auto 0 auto;

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
      font-size: 38px;
    }
  }

  .sannu {
    margin-top: 10% ;

    h2 {
        text-align: center;
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
    }

  h2 {
      text-align: center;
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

  .first {

  .left {
    width: 100%;
  

    .top {
        width: 70%
        @media (max-width: 850px) {
          width: 100%;
        }
    }

    .bottom {
        width: 100%;
    }

    h2 {
        text-align: left;
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
  
    h1 {
      font-size: 60px;
      font-family: 'Literata', sans-serif;
      @media (max-width: 850px) {
          font-size: 47px;
        }
        @media (max-width: 650px) {
          font-size: 36px;
        }
    }
  
    p {
      font-size: 22px;
      width: 70%;
      @media (max-width: 850px) {
        width: 100%;
      }
    }
  
    .view {
      width: 50%;
      margin: 35px 0 0 0;
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
`