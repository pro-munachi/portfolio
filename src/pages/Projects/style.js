import styled from 'styled-components'

export const ProjectStyle = styled.div`
  width: 80%;
  margin: 120px auto 0 auto;

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

  h2 {
    font-size: 46px;
    @media (max-width: 850px) {
      font-size: 36px;
    }
    @media (max-width: 650px) {
      font-size: 36px;
    }
  }

  .first {
    margin: 10% 0;

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
`
