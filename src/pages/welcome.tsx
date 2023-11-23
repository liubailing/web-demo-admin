import CustomHead from '@/components/custom-head'
import { getLayout } from '@/components/layout'
import { PageContainer } from '@ant-design/pro-layout'

const Page = () => {
  return (
    <PageContainer header={{ title: '' }} breadcrumb={{ separator: '--' }}>
      <CustomHead title="test" keywords="" description="" />
      <div>welcome</div>
    </PageContainer>
  )
}

Page.getLayout = getLayout

export default Page
