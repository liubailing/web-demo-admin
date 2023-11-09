// import ProLayout from '@ant-design/pro-layout'
import { LogoutOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd'
import dynamic from 'next/dynamic'
import router from 'next/router'
import { PropsWithChildren, ReactElement, useContext } from 'react'
import Icon from '../icon'
import { MenuContext, MenuContextProvider } from '../menu-context'
import defaultProps from './_default'

const ProLayout = dynamic(() => import('@ant-design/pro-layout').then((com) => com.ProLayout), { ssr: false })

const Main = ({ children }: PropsWithChildren) => {
  const { menuCollapsed, setMenuCollapsed } = useContext(MenuContext)
  return (
    <div style={{ height: '100vh' }}>
      <ProLayout
        fixSiderbar={true}
        layout={'mix'}
        title="八爪鱼"
        logo={
          <div>
            <Icon name="#icon-octopus" size={48}></Icon>
          </div>
        }
        // splitMenus={true}
        {...defaultProps}
        siderMenuType="sub"
        onMenuHeaderClick={() => router.push('/')}
        collapsed={menuCollapsed}
        onCollapse={() => {
          setMenuCollapsed(!menuCollapsed)
        }}
        menu={{
          collapsedShowGroupTitle: true,
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '七妮妮',
          render: (props, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: 'logout',
                      icon: <LogoutOutlined rev={undefined} />,
                      label: '退出登录',
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            )
          },
        }}
        actionsRender={(props) => {
          if (props.isMobile) return []
          if (typeof window === 'undefined') return []
          return [undefined, undefined, undefined, <div key={1} />]
        }}
        menuItemRender={(item, dom) => (
          <div
            key={item.path}
            onClick={() => {
              router.push(item.path || '/welcome')
            }}
          >
            {dom}
          </div>
        )}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined
          return (
            <p
              style={{
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                flex: '1 1',
                paddingBlockStart: 12,
              }}
            >
              <a href="/" target="_blank">
                官网
              </a>
            </p>
          )
        }}
        // footerRender={() => {
        //   return <Footer></Footer>
        // }}
      >
        <div>{children}</div>
      </ProLayout>
    </div>
  )
}

function MainLayout({ children }: PropsWithChildren) {
  return (
    <MenuContextProvider>
      <Main>{children}</Main>
    </MenuContextProvider>
  )
}

export const getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
export default Main
