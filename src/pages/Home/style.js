import styled from 'styled-components'

export const HomeStyle = styled.div`
  width: 80%;
  margin: 15% auto 0 auto;

  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    align-items: center;
  }

  .text {
    width: 45%;
  }

  .img {
    width: 45%;
    height: 500px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`
