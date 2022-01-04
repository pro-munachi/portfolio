import styled from 'styled-components'

export const TabStyle = styled.div`
  width: 100%;

  .button {
    width: 100%;
    display: flex;

    .emp {
      width: 30px;
    }

    .active {
      background: transparent;
      border: none;
      padding: 13px 18px;
      border-bottom: 1.3px solid #379683;
      font-size: 17px;
      color: #379683;
      cursor: pointer;
    }
    .inactive {
      background: white;
      padding: 13px 18px;
      border: none;
      font-size: 17px;
      cursor: pointer;
    }
  }

  hr {
    padding: 0;
    margin: 0;
    opacity: 0.3;
  }

  .project {
    margin-left: 20px;
    margin-top: 20px;
  }
`
