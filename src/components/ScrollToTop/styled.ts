import Link from "next/link";
import styled from "styled-components";

export const ScrollWrapper = styled(Link)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
  transition: scroll 2s ease-in-out;

  svg {
    path {
      fill: var(--color-description);
    }
  }

  &:hover {
    opacity: 1;

    svg {
      path {
        fill: var(--color-link);
      }
    }
  }

`;
