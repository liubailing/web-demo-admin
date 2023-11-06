import CustomHead from '@/components/custom-head'
import Error from '@/components/error'
import { getLayout } from '@/components/layout'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <CustomHead title="404" />
      <Error>
        <h1 className=" text-4xl font-bold my-5">页面未找到</h1>
        <p>你要找的页面已经被外星人偷走了！</p>
        <Link href="/">
          <button className="mt-10 capitalize bg-[#3470ff] rounded-md text-white px-4 py-2">返回首页</button>
        </Link>
      </Error>
    </>
  )
}

Custom404.getLayout = getLayout
