import CustomHead from '@/components/custom-head'
import Error from '@/components/error'
import { getLayout } from '@/components/layout'
import Link from 'next/link'

export default function ServerError() {
  return (
    <>
      <CustomHead title="500" />
      <Error>
        <h1 className=" text-4xl font-bold my-5">异常错误</h1>
        <p>我们正在努力解决这个问题。</p>
        <Link href="/">
          <button className="mt-10 capitalize bg-[#3470ff] rounded-md text-white px-4 py-2">返回首页</button>
        </Link>
      </Error>
    </>
  )
}

ServerError.getLayout = getLayout
