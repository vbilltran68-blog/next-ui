import styles from './not-found.module.scss'

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className="code text-comic">404</div>
      <div className="description text-code">Page not found</div>
    </div>
  )
}
