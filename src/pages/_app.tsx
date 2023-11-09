import { isPrd } from '@/conf/urlConfig'
import '@/styles/globals.css'
import '@/styles/nprogress.css'
import { AppPropsWithLayout } from '@/types'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Script from 'next/script'
import Progress from 'nprogress'
import { useEffect } from 'react'
import { Middleware, SWRConfig } from 'swr'
import withTheme from '../theme'

const BackToTop = dynamic(() => import('@/components/back-to-top'), { ssr: false })

Progress.configure({ showSpinner: false })

const swrErrorMiddleware: Middleware = function (useSWRNext) {
  return (key, fetcher, config) => {
    const fetcherOnError = async (...args: unknown[]) => {
      if (fetcher) {
        const resp = (await fetcher(...args)) as any
        if (resp?.error) {
          throw new Error()
        }
        return resp
      }
    }
    return useSWRNext(key, fetcherOnError, config)
  }
}

const useRouterProgress = () => {
  const router = useRouter()
  useEffect(() => {
    const onStart = () => Progress.start()
    const onEnd = () => Progress.done()

    const prefetch = router.prefetch
    router.prefetch = async () => {}

    router.events.on('routeChangeStart', onStart)
    router.events.on('routeChangeComplete', onEnd)
    return () => {
      router.prefetch = prefetch
      router.events.off('routeChangeStart', onStart)
      router.events.off('routeChangeComplete', onEnd)
    }
  }, [router])
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  useRouterProgress()

  const getLayout = Component.getLayout ?? ((page) => page)
  return withTheme(
    <SWRConfig value={{ use: [swrErrorMiddleware] }}>
      <Script src="/iconfont.js" async />
      {getLayout(<Component {...pageProps} />)}
      <BackToTop />
      {isPrd && <noscript build-id={process.env.BUILD_ID} />}
    </SWRConfig>
  )
}

export default App
