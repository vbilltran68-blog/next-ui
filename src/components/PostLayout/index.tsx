import Back from "@components/Back"
import ScrollToTop from "@components/ScrollToTop"
import ToggleTheme from "@components/ToggleTheme"
import classNames from "classnames"

import styles from './styles.module.scss'

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.headerWrapper} id="top">
        <div className={styles.wrapper}>
          <Back className={styles.backAction} />
        </div>
      </div>
      <div className={classNames(styles.mainWrapper, 'flex-1')}>{children}</div>
      <ToggleTheme />
      <ScrollToTop />
    </div>
  )
}
