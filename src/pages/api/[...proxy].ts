import { API_URL } from '@/conf/urlConfig'
import { withSessionRoute } from '@/utils/session'
import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware'

export default withSessionRoute(
  createProxyMiddleware({
    target: API_URL,
    pathRewrite: { '^/api': '' },
    changeOrigin: true,
    onProxyReq(proxyReq, req) {
      const { access_token } = req.session?.auth || {}
      proxyReq.setHeader('Authorization', `bearer ${access_token}`)
      proxyReq.setHeader('Accept-Language', 'zh-CN')
      proxyReq.removeHeader('Cookie')
      fixRequestBody(proxyReq, req)
    },
  }) as any
)

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
}