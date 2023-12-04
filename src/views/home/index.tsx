import styles from './index.module.less'
function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <div className={styles.subTitle}>欢迎体验</div>
        <div className={styles.title}>React18通用后台管理系统</div>
        <div className={styles.desc}>React18+ReactRouter6.0+AntD5.5+Typescript+Vite实现通用后台管理系统</div>
      </div>
      <div className={styles.img}></div>
    </div>
  )
}

export default Home
