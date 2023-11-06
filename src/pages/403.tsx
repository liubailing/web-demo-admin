import CustomHead from '@/components/custom-head'
import Error from '@/components/error'
import { getLayout } from '@/components/layout'
import Link from 'next/link'

export default function Four03() {
  return (
    <>
      <CustomHead title="403" />
      <Error>
        <h1 className=" text-4xl font-bold my-5">禁止访问</h1>
        <p>对不起，您没有访问此页面的权限。</p>
        <Link href="/">
          <button className="mt-10 capitalize bg-[#3470ff] rounded-md text-white px-4 py-2">返回首页</button>
        </Link>
      </Error>
    </>
  )
}

Four03.getLayout = getLayout
