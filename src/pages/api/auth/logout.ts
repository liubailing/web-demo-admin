import { LOGOUT_CALLBACK } from '@/conf/urlConfig'
import createAuthClient from '@/utils/createAuthClient'
import { createApiRouter, handlerOptions } from '@/utils/router'
import { withSessionRoute } from '@/utils/session'

const logoutRouter = createApiRouter()

logoutRouter.get(async (req, resp) => {
  const { access_token } = req.session?.auth || {}
  let url = LOGOUT_CALLBACK
  if (access_token) {
    const client = await createAuthClient()
    url = client.endSessionUrl({ id_token_hint: access_token, post_logout_redirect_uri: LOGOUT_CALLBACK })
  }
  req.session?.destroy()
  resp.redirect(302, url)
})

export default withSessionRoute(logoutRouter.handler(handlerOptions))
