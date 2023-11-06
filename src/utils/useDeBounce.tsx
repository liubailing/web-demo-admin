import { ChangeEvent, useCallback, useEffect, useRef } from 'react'
interface refProps {
  timer: null | NodeJS.Timeout
  fn: (event: ChangeEvent<HTMLDivElement>) => void
}

// 防抖 hooks
const useDebounce = (fn: (event: ChangeEvent<HTMLDivElement>) => void, delay: number, dep = []) => {
  const { current } = useRef<refProps>({ fn, timer: null })
  useEffect(() => {
    current.fn = fn
  }, [fn])

  return useCallback((...args: [ChangeEvent<HTMLDivElement>]) => {
    if (current.timer) {
      clearTimeout(current.timer)
    }
    current.timer = setTimeout(() => {
      current.fn(...args)
    }, delay)
  }, dep)
}

export default useDebounce
