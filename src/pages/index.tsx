import CustomHead from '@/components/custom-head'
import { getLayout } from '@/components/layout'
import Head from 'next/head'
import styles from './index.module.scss'

const Page = () => {
  return (
    <div className={styles.home}>
      <CustomHead title="" keywords="" description="" />
      <Head>
        <link rel="alternate" hrefLang="x-default" href="https://www.xxxx.com/" />
      </Head>
      <div></div>
    </div>
  )
}

Page.getLayout = getLayout

export default Page
