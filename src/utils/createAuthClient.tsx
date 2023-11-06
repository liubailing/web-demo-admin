import { AUTH_CALLBACK, AUTH_URL } from '@/conf/urlConfig'
import { Issuer } from 'openid-client'

export default async function createAuthClient() {
  const { Client } = await Issuer.discover(AUTH_URL)

  return new Client({
    client_id: process.env.CLIENT_ID || '',
    client_secret: process.env.CLIENT_SECRET || '',
    redirect_uris: [AUTH_CALLBACK],
    response_types: ['code'],
  })
}
