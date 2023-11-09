import { ConfigProvider } from 'antd'

const withTheme = (node: JSX.Element) => (
  <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#52c41a',
          colorBgContainer: '#f0f0f0',
        },
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 16,
          },
        }}
      >
        {node}
      </ConfigProvider>
    </ConfigProvider>
  </>
)

export default withTheme
