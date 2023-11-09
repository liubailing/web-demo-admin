import { PlusCircleFilled, SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
const SearchInput = () => {
  return (
    <div
      key="SearchOutlined"
      aria-hidden
      style={{
        display: 'flex',
        alignItems: 'center',
        marginInlineEnd: 24,
      }}
      onMouseDown={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
    >
      <Input
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
        }}
        prefix={<SearchOutlined rev={undefined} />}
        placeholder="搜索方案"
        bordered={false}
      />
      <PlusCircleFilled
        style={{
          fontSize: 24,
        }}
        rev={undefined}
      />
    </div>
  )
}

export { SearchInput }
