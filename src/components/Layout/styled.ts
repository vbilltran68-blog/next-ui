import styled from 'styled-components'
import mediaQuery from 'styled-media-query'

export const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;

  ${mediaQuery.lessThan('medium')`
    flex-direction: column;
  `}
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  background-color: var(--color-bg-header);
  color: var(--color-header);

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 10px;
    font-family: var(--fonts-comic);

    .title {
      text-align: center;
    }
  }

  .nav {
    flex: 1;
    margin: 20px 0;
  }

  .footer {
    padding: 0 10px;
    display: flex;
    justify-content: center;
    font-size: 12px;
    font-family: var(--fonts-code);
  }

  ${mediaQuery.lessThan('medium')`
    flex-direction: row;
    border-right: 0;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

    .profile {
      flex-direction: row;
      padding: 0 15px;
    }

    .nav {
      flex-direction: row;
      justify-content: flex-end;
      margin: 0;
    }

    .footer {
      display: none;
    }
  `}

`

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 1rem 100px 1rem;
  background-color: var(--color-bg);
  flex: 1;
  overflow-y: auto;
`

