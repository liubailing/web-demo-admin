import { AUTH_URL } from '@/conf/urlConfig'
import { withSessionServerSide } from '@/utils/session'
import axios from 'axios'
import { GetServerSidePropsResult } from 'next'

function AuthPage() {
  return <div />
}

export default AuthPage

type AuthRedirect = GetServerSidePropsResult<{
  redirect: {
    destination: string
    permanent: boolean
  }
}>

type PasslessResp = {
  accessToken: string
  accessTokenExpiredIn: string
}

const authRedirect: (dest?: string) => AuthRedirect = (dest = '/') => ({
  redirect: {
    destination: dest,
    permanent: true,
  },
})

export const getServerSideProps = withSessionServerSide(async ({ req, query }) => {
  const { key, url } = query
  if (!key) {
    return authRedirect()
  }

  const resp = await axios.post<PasslessResp>('/api/Login/passwordLess', { key, returnUrl: url }, { baseURL: AUTH_URL })
  if (resp.status != 200) {
    return authRedirect()
  }
  const { accessTokenExpiredIn, accessToken } = resp.data
  const expires_at = Date.parse(accessTokenExpiredIn)
  const access_token = accessToken

  req.session.destroy()
  req.session.auth = { access_token, expires_at }

  await req.session.save()

  return authRedirect((url as string) || '/')
})
