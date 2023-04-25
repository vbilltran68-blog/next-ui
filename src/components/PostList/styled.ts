import Card from "@components/Card";
import styled from "styled-components"
import mediaQuery from 'styled-media-query'

export const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;

  .history {
    display: flex;
    gap: 5px;
    align-items: center;
    line-height: 10px;
    font-family: var(--fonts-code);
    color: var(--color-post);

    svg {
      path {
        fill: var(--color-post);
      }
    }
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const PostWrapper = styled(Card)`
  width: 32%;
  max-width: 32%;
  padding: 0;
  max-height: 160px;
  overflow: hidden;
  height: 127px;

  ${mediaQuery.greaterThan('medium')`
    &:hover {
      cursor: pointer;
       border: 1px solid var(--color-primary);

      .topic {
        background: orange;
        span {
          color: black;
        }
      }
    }
  `}

  .info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    width: 100%;

    .header {
      font-weight: bold;
      color: var(--color-post);
      min-height: 20px;
      max-height: 40px;
      line-height: 1.25;
    }

    .description {
      color: var(--color-description);
      max-height: 40px;
      line-height: 1.25;
    }
  }

  ${mediaQuery.lessThan('large')`
    width: 49%;
    max-width: 49%;
  `}

  ${mediaQuery.lessThan('medium')`
    width: 100%;
    max-width: 100%;
  `}
`;
