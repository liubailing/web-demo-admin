import { sessionOptions } from '@/conf/session'
import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next'
import { GetServerSideProps, NextApiHandler } from 'next'
import { TokenSetParameters } from 'openid-client'

declare module 'iron-session' {
  interface IronSessionData {
    auth?: {
      state?: string
      nonce?: string
      nextUrl?: string | null
    } & TokenSetParameters
  }
}

export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions)
}

export function withSessionServerSide(serverSideProps: GetServerSideProps) {
  return withIronSessionSsr(serverSideProps, sessionOptions)
}
