import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

const MyDocument = () => (
  <Html lang="zh">
    <Head>
      <link rel="shortcut icon" href="/favicon.ico?v1" type="image/x-icon" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache()
  const originalRenderPage = ctx.renderPage
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
    })

  const initialProps = await Document.getInitialProps(ctx)
  // 1.1 extract style which had been used
  const style = extractStyle(cache, true)
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {/* 1.2 inject css */}
        <style dangerouslySetInnerHTML={{ __html: style }}></style>
      </>
    ),
  }
}

export default MyDocument
