/** 绝对定位的spin，需要给父元素设置相对定位或绝对定位 */
export const Spin = ({ visible }: { visible: boolean }) => {
  return visible ? (
    <div className="flex justify-center items-center absolute left-0 top-0 bg-white p-4 w-full h-full z-50">
      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
        <circle />
        <path
          className="opacity-80"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  ) : (
    <></>
  )
}
