import { getLayout } from '@/components/layout'
import styles from './index.module.scss'

const Page = () => {
  return (
    <div className={styles.home}>
      <div>test</div>
    </div>
  )
}

Page.getLayout = getLayout

export default Page
