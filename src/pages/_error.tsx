import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
function Error({ error }: { error?: string }) {
  const router = useRouter()
  useEffect(() => {
    if (error) {
      router.replace(error)
    }
  }, [error])
  return <div />
}

Error.getInitialProps = async ({ req, err }: NextPageContext) => {
  const statusCode = req?.statusCode ? req.statusCode : err?.statusCode ? err.statusCode : 404
  if (statusCode == 500) {
    return { statusCode, error: '/500' }
  }

  return { statusCode }
}

export default Error
