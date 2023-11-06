import createAuthClient from '@/utils/createAuthClient'
import { createApiRouter, handlerOptions } from '@/utils/router'
import { withSessionRoute } from '@/utils/session'
import { generators as g } from 'openid-client'

const authRouter = createApiRouter()

authRouter.get(async (req, resp) => {
  const query = new URLSearchParams(req.query as Record<string, string>)
  const nextUrl = query.get('nextUrl')

  const nonce = g.nonce()
  const state = g.state()
  req.session.auth = {
    nonce,
    state,
    nextUrl,
  }

  const client = await createAuthClient()
  const url = new URL(
    client.authorizationUrl({
      scope: 'openid profile',
      nonce,
      state,
    })
  )

  query.forEach((v, k) => {
    url.searchParams.append(k, v)
  })


  await req.session.save()
  resp.redirect(302, String(url))
})

export default withSessionRoute(authRouter.handler(handlerOptions))
