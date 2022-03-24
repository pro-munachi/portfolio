import styled from 'styled-components'

export const FooterStyle = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  height: 100px;
  align-items: center;
  padding-bottom: 35px;

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }

  .link {
    display: flex;

    p {
      margin: 0 10px;
      a {
        text-decoration: none;
        font-size: 20px;
        color: #379683;

        @media (max-width: 650px) {
          font-size: 16px;
        }
      }
    }
  }

  .copyright {
    font-size: 18px;

    @media (max-width: 650px) {
      font-size: 16px;
    }
  }
`
