import CustomHead from '@/components/custom-head'
import { getLayout } from '@/components/layout'
import { AUTH_CALLBACK } from '@/conf/urlConfig'
import { useAccount } from '@/data'
import createAuthClient from '@/utils/createAuthClient'
import { withSessionServerSide } from '@/utils/session'
import type { InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function LoginCallback({ nextUrl, registry }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const { data, isLoading, error } = useAccount()
  useEffect(() => {
    if (error) {
      router.replace('/500')
      return
    }

    if (data?.userId) {
      if (registry) {
        const channelType = sessionStorage.getItem('channelType')
        const channelId = sessionStorage.getItem('channelId')
        if (channelId && channelType) {
          // const tp = createTrackingPoint(data.userId, channelId, channelType)
          // api.post('/tracking/extract/simpleUpload', { data: tp })
        }
        // 如果是注册成功后登录
        router.replace('/registersuccess')
        return
      }
      router.replace(nextUrl ? nextUrl : '/console/overview')
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
  try {
    const { state, nonce, nextUrl } = req.session.auth || {}
    const { registry, ...qs } = query

    if (!(state && nonce)) {
      let path = '/api/auth'
      if (registry) {
        const param = new URLSearchParams({ nextUrl: '/userSurvey' })
        path = `${path}?${param.toString()}`
      }
      return {
        redirect: {
          destination: path,
          permanent: false,
        },
      }
    }
    const redirect_url = new URL(AUTH_CALLBACK)
    if (registry) {
      redirect_url.searchParams.append('registry', registry as string)
    }
    const client = await createAuthClient()
    const { access_token, expires_at } = await client.callback(redirect_url.toString(), qs, { nonce, state })
    req.session.auth = {
      access_token,
      expires_at,
    }
    await req.session.save()
    return {
      props: { registry: registry ?? '', nextUrl: nextUrl || (registry ? '/userSurvey' : null) },
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
