import styled from 'styled-components'

export const TabStyle = styled.div`
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
`
