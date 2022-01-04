import styled from 'styled-components'

export const AboutStyle = styled.div`
  width: 80%;
  margin: 15% auto 0 auto;

  @media (max-width: 1000px) {
    width: 90%;
  }

  
  .last {
    margin: 15% 0;
  }

  .middle {

    margin: 15% 0;

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
  }

  .bottom {
    margin: 15% 0;
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

  .first {
    display: flex;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    align-items: center;
    margin: 20% 0;
    @media (max-width: 850px) {
      flex-direction: column-reverse;
    }

    .img {
      width: 45%;
      height: 500px;
      @media (max-width: 850px) {
        width: 80%;
        margin: 40px auto;
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
          font-size: 36px;
        }

        span {
          opacity: 0.5;
        }
      }

      .view {
        width: 50%;
        @media (max-width: 750px) {
          width: 100%;
        }
        button {
          width: 320px;
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
