import Icon from "@components/Icon"
import { IconPath, IconType } from "@interfaces/icon"
import classNames from "classnames";

import styles from "./styled.module.scss"

type Props = {
  className?: string;
}

const ScrollToTop = ({ className }: Props) => {
  return (
    <a className={classNames(styles.layoutWrapper, className)} href="#top">
      <Icon src={IconPath[IconType.HandTop]} size={20} />
    </a>
  );
}

export default ScrollToTop
