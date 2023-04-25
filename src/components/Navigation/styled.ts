import styled from 'styled-components'
import mediaQuery from 'styled-media-query'

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  font-family: var(--fonts-comic);
  color: var(--color-header);

  ${mediaQuery.lessThan('medium')`
    flex-direction: row;
    justify-content: flex-end;
    padding: 0 20px;
    gap: 20px;
  `}
`

export const NavItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-top: 1px solid var(--color-header);

  &:last-child {
    border-bottom: 1px solid var(--color-header);
  }

  a {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 10px 5px;
    color: inherit;
    font-size: 1.2rem;
  }

  svg {
    path, rect {
      fill: var(--color-header);
    }
  }

  ${mediaQuery.lessThan('medium')`
    width: 50px;
    height: 50px;
    border: 2px solid var(--color-header) !important;
    transform: skew(-10deg);

    .title {
      display: none;
    }
  `};

  &.active {
    background: var(--color-primary);
    pointer-events: none;
  }

  &:not(.active):hover {
    background: var(--color-accent);
  }
`;
