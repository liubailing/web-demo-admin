import CustomHead from '@/components/custom-head'
import { getLayout } from '@/components/layout'
import { AUTH_CALLBACK } from '@/conf/urlConfig'
import { useAccount } from '@/data'
import createAuthClient from '@/utils/createAuthClient'
import { withSessionServerSide } from '@/utils/session'
import type { InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function LoginCallback({ nextUrl }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const { data, isLoading, error } = useAccount()
  useEffect(() => {
    if (error) {
      router.replace('/500')
      return
    }
    if (data?.userId) {
      router.replace(nextUrl ? nextUrl : '/console/test')
    }
  }, [data, error])

  return (
    <>
      <CustomHead title="Login" />
      {isLoading && <div className="flex justify-center items-center py-36">登录中</div>}
    </>
  )
}

LoginCallback.getLayout = getLayout

export const getServerSideProps = withSessionServerSide(async ({ req, query }) => {
  console.log(`------------------- callback `)
  try {
    const { state, nonce, nextUrl } = req.session.auth || {}
    const { ...qs } = query

    if (!(state && nonce)) {
      const path = '/api/auth'

      return {
        redirect: {
          destination: path,
          permanent: false,
        },
      }
    }
    const redirect_url = new URL(AUTH_CALLBACK)
    console.log(`------------------- callback  redirect_url`, redirect_url)
    const client = await createAuthClient()
    const { access_token, expires_at } = await client.callback(redirect_url.toString(), qs, { nonce, state })
    req.session.auth = {
      access_token,
      expires_at,
    }
    await req.session.save()
    return {
      props: { nextUrl },
    }
  } catch (er) {
    console.log((er as Error)?.message)
    return {
      redirect: {
        destination: '/403',
        permanent: true,
      },
    }
  }
})
