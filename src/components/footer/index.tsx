import dayjs from 'dayjs'
import Link from 'next/link'
import styles from './index.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <div className={styles.left}>
          <div>*****信息技术有限公司版权所有</div>
          <div> © 2013-{dayjs().year()} . All rights reserved.</div>
        </div>
        <div className={styles.right}>
          <div className={styles.icp}>
            <div>
              <Link href={'https://beian.miit.gov.cn/#/Integrated/index'}>粤ICP备11111111号</Link>
            </div>
            <span className={styles.split}></span>
            <div>粤公网安备 11111111111111号</div>
            <span className={styles.split}></span>
          </div>
          <div className={styles.other}>
            <div>
              <Link href={'/service'}>服务协议</Link>
            </div>
            <span className={styles.split}></span>
            <div>
              <Link href={'/privacy'}>隐私协议</Link>
            </div>
            <span className={styles.split}></span>
            <div>
              <Link href={'/version'}>版本</Link>
            </div>
            <span className={styles.split}></span>
            <div>
              <Link href={'/developer'}>开发者名称</Link>
            </div>
            <span className={styles.split}></span>
            <div>
              <Link href={'/authority'}>权限</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
