import CustomHead from '@/components/custom-head'
import Icon from '@/components/icon'
import Head from 'next/head'
import styles from './index.module.scss'

const Page = () => {
  return (
    <div>
      <CustomHead title="" keywords="" description="" />
      <Head>
        <link rel="alternate" hrefLang="x-default" href="https://www.bazhuayu.com/" />
      </Head>
      <div className={styles.home}>
        <div className={styles.logo}>
          <Icon name="#icon-logo-1" size={196}></Icon>
        </div>
      </div>
    </div>
  )
}

// Page.getLayout = getLayout

export default Page
