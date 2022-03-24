import styled from 'styled-components'

export const ContactStyle = styled.div`
  width: 50%;
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
    font-size: 60px;
    font-family: 'Literata', sans-serif;

    @media (max-width: 650px) {
      font-size: 26px;
    }
  }

  p {
    font-size: 22px;

    @media (max-width: 650px) {
      font-size: 15px;
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
      background-color: #379683;
      color: white;
      border: none;
      outline: none;
      border-radius: 6px;

      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }
`
