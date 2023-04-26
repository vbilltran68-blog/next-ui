import Icon from "@components/Icon";
import { IconPath, IconType } from "@interfaces/icon"

import { ScrollWrapper } from "./styled"

const ScrollToTop = () => {
  return (
    <ScrollWrapper href="#top">
      <Icon src={IconPath[IconType.HandTop]} size={30} />
    </ScrollWrapper>
  );
}

export default ScrollToTop

