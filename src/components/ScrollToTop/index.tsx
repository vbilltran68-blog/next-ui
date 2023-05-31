import Icon from "@components/Icon"
import { IconPath, IconType } from "@interfaces/icon"

import styles from "./styled.module.scss"

const ScrollToTop = () => {
  return (
    <a className={styles.layoutWrapper} href="#top">
      <Icon src={IconPath[IconType.HandTop]} size={20} />
    </a>
  );
}

export default ScrollToTop
