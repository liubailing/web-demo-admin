import CustomHead from '@/components/custom-head'
import { getLayout } from '@/components/layout'

const Page = () => {
  return (
    <div>
      <CustomHead title="" keywords="" description="" />

      <div>test</div>
    </div>
  )
}

Page.getLayout = getLayout

export default Page
