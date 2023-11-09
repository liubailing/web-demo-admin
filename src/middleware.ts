import { sessionOptions } from '@/conf/session'
import { getIronSession } from 'iron-session/edge'
import { createEdgeRouter } from 'next-connect'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

const router = createEdgeRouter<NextRequest, NextFetchEvent>()

const isValidToken = (token: string | undefined, exp: number | undefined) => (exp ? Date.now() < (exp - 60 * 30) * 1000 : !!exp) && token

router.get(/^\/(Blog|Plan|Download|Billing-payments|Contact|Subscribe)\/?/, async (req) => {
  const { origin, pathname, search } = req.nextUrl
  return NextResponse.redirect(new URL(`${origin}${pathname.toLowerCase()}${search}`))
})
console.log(`----------------0,`)
// router.get(/^\/console\/?$/, async (req: NextRequest) => {
//   console.log(`----------------0,`)
//   return NextResponse.redirect(new URL('/console/overview', req.url))
// })

// router.get(/^\/console\/[\w-/]+\/?$/, async (req: NextRequest) => {
//   const resp = NextResponse.next()
//   const session = await getIronSession(req, resp, sessionOptions)

//   const { access_token, expires_at } = session?.auth || {}
//   console.log(`----------------1,`, access_token, expires_at )
//   if (!isValidToken(access_token, expires_at)) {
//     session?.destroy()
//     const { nextUrl } = req
//     const auth = new URL('/api/auth', nextUrl.origin)
//     new URLSearchParams({ nextUrl: `${nextUrl.pathname}${nextUrl.search}` }).forEach((v, k) => auth.searchParams.append(k, v))

//     return NextResponse.redirect(auth, { headers: { referer: req.url }, status: 302 })
//   }

//   return resp
// })


router.get(/^\/login\/?$/i, (req: NextRequest) => {
  return NextResponse.redirect(new URL('/api/auth', req.url))
})

router.get(/^\/signup\/?$/i, (req: NextRequest) => {
  const url = new URL('/api/auth', req.url)
  url.searchParams.append('registry', 'true')
  return NextResponse.redirect(url)
})

router.all(/^\/api\/v1/, async (req: NextRequest) => {
  const resp = NextResponse.next()
  const session = await getIronSession(req, resp, sessionOptions)

  const { access_token, expires_at } = session?.auth || {}

  if (!isValidToken(access_token, expires_at)) {
    const referer = req.headers.get('referer') || ''
    if (!/\/console\/[\w/-]+\/?/.test(referer)) {
      return new NextResponse(JSON.stringify({ data: { error: 403 } }))
    }
    session?.destroy()
    return new NextResponse(JSON.stringify(null), { status: 403 })
  }

  return resp
})
export function middleware(req: NextRequest, _: NextFetchEvent) {
  console.log(`-------------- middleware`)
  return router.run(req, _)
}
