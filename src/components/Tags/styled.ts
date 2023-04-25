import styled from "styled-components";

export const TagWrapper = styled.div`
  color: var(--color-link);
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .tag {
    cursor: pointer;
    &::before {
      content: '#'
    }
  }
`;
