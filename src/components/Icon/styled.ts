import { ReactSVG } from "react-svg"
import styled from 'styled-components'

export const SvgWrapper = styled(ReactSVG)`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }
`
