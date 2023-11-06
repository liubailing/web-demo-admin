import Head from 'next/head'
import { useRouter } from 'next/router'

interface Props {
  title: string
  keywords?: string
  description?: string
}

export default function CustomHead({ title, keywords, description }: Props) {
  const router = useRouter()

  return (
    <Head>
      <title>{title}</title>
      {keywords && <meta name="keywords" content={keywords} />}
      {description && <meta name="description" content={description} />}
    </Head>
  )
}
