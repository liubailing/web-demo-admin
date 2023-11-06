import Image from 'next/image'
function Error({ children }: React.ComponentProps<'div'>) {
  return (
    <div className="flex flex-col items-center justify-center py-20 ">
      <div className="relative">
        <Image src="/static/global/error.png" width={360} height={260} alt="error" />
      </div>
      {children}
    </div>
  )
}

export default Error
