import styled from 'styled-components'

export const ExperienceStyle = styled.div`
  .wrapper {
    width: 100%;

    .container {
      width: 100%;
      border-left: 3px dashed #379683;
      position: relative;

      .box {
        position: absolute;
        height: 10px;
        width: 10px;
        background: white;
        border: 3px solid #379683;
        padding: 0;
        left: -10px;
      }

      .writings {
        padding: 15px 10px;
        width: 600px;
        height: 100%;
        margin: 20px 0 20px 30px;
        background: white;
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
        :hover {
          margin: 20px 0 20px 40px;
          transition: 0.3s ease-in-out;
        }

        @media (max-width: 750px) {
          width: 90%;
        }

        h3 {
          font-family: 'Literata', sans-serif;
          font-weight: 700;
          span {
            font-family: 'K2D', sans-serif;
            font-weight: 600;
            font-size: 18px;
            opacity: 0.6;
          }
        }

        p {
          opacity: 0.6;
          font-weight: 600;
        }
      }
    }
  }
`
