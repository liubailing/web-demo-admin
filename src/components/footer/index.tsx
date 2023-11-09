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
              <Link href={'https://beian.miit.gov.cn/#/Integrated/index'}>粤ICP备 123456 号</Link>
            </div>
            <span className={styles.split}></span>
            <div>粤公网安备 123456789 号</div>
            <span className={styles.split}></span>
          </div>
          <div className={styles.other}>
            <div>
              <Link href={'/help/service'}>服务协议</Link>
            </div>
            <span className={styles.split}></span>
            <div>
              <Link href={'/help/privacy'}>隐私协议</Link>
            </div>
            <span className={styles.split}></span>
            <div>
              <Link href={'/help/version'}>版本</Link>
            </div>
            <span className={styles.split}></span>
            <div>
              <Link href={'/help/developer'}>开发者名称</Link>
            </div>
            <span className={styles.split}></span>
            <div>
              <Link href={'/help/authority'}>权限</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
