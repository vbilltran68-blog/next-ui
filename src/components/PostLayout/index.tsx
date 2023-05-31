import Back from "@components/Back"
import classNames from "classnames"
import dynamic from "next/dynamic"

import styles from './styles.module.scss'

const FlexibleToggleTheme = dynamic(() => import('@components/ToggleTheme'))
const FlexibleScrollToTop = dynamic(() => import('@components/ScrollToTop'))
const FlexibleShare = dynamic(() => import('@components/Share'))

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.layoutWrapper}>
      <div id="top"></div>
      <div className={styles.headerWrapper}>
        <div className={styles.wrapper}>
          <Back />
          <div className={styles.tools}>
            <FlexibleToggleTheme />
            <FlexibleShare title="ABC" />
          </div>
        </div>
      </div>
      <div className={classNames(styles.mainWrapper, 'flex-1 page-a4')}>{children}</div>
      <div className={styles.scrollToTop}>
        <FlexibleScrollToTop />
      </div>
    </div>
  )
}
