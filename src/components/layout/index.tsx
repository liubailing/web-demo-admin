import dayjs from 'dayjs'
import { PropsWithChildren, ReactElement, useContext, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { BannerContext, BannerContextProvider } from '../banner-context'
import Footer from '../footer'

const Main = ({ children }: PropsWithChildren) => {
  const { bannerVisible } = useContext(BannerContext)

  const [cookies, setCookie] = useCookies(['channelURL'])

  useEffect(() => {
    /** 渠道打点（后端绑定渠道来源，百度营销用） */
    if (!cookies.channelURL && location.href.includes('campaign')) {
      setCookie('channelURL', location.href, { expires: dayjs().add(7, 'day').toDate() })
    }
  }, [])

  return <main style={{ marginTop: bannerVisible ? 152 : 72 }}>{children}</main>
}

function Layout({ children }: PropsWithChildren) {
  return (
    <BannerContextProvider>
      <Main>{children}</Main>
      <Footer />
    </BannerContextProvider>
  )
}

export const getLayout = (page: ReactElement) => <Layout>{page}</Layout>
