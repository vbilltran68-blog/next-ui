import Back from "@components/Back"
import classNames from "classnames"
import dynamic from "next/dynamic"

import styles from './styles.module.scss'

const FlexibleToggleTheme = dynamic(() => import('@components/ToggleTheme'))
const FlexibleScrollToTop = dynamic(() => import('@components/ScrollToTop'))

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
          <FlexibleToggleTheme />
        </div>
      </div>
      <div className={classNames(styles.mainWrapper, 'flex-1')}>{children}</div>
      <FlexibleScrollToTop />
    </div>
  )
}
