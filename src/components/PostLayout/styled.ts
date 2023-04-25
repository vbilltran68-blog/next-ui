import styled from 'styled-components'
import mediaQuery from 'styled-media-query'

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  background-color: var(--color-bg-post);
  font-family: var(--fonts-code);
  color: var(--color-post);
  scroll-behavior: smooth;
`

export const HeaderWrapper = styled.div`
  background: silver;
  background-color: var(--color-bg-header);
  color: var(--color-header);

  .wrapper {
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: 70rem;
    padding: .5rem 5rem;
    gap: 10px;

    .back-action {
      display: flex;
      gap: 10px;
      font-size: 20px;
      line-height: 20px;
      cursor: pointer;
      font-family: var(--fonts-comic);
    }
  }

  ${mediaQuery.lessThan('medium')`
    .wrapper {
      max-width: 100%;
      padding: 2rem 1rem;
    }
  `}
`

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 70rem;
  padding: 3rem 5rem 5rem 5rem;
  font-size: 1.25rem;

  ${mediaQuery.lessThan('medium')`
    max-width: 100%;
    padding: 2rem 1rem;
  `}

  .createdDate {
    color: silver;
    margin: 1rem 0;
  }
`

