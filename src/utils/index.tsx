import { useEffect, useState } from 'react'

const platforms = ['win', 'mac']

export const useSystem = () => {
  const [isMac, setIsMac] = useState<boolean>(false)
  const [isWindows, setisWindows] = useState<boolean>(false)
  useEffect(() => {
    const platform = platforms.find((v) => navigator.platform.toLowerCase().includes(v))
    setIsMac(platform === 'mac')
    setisWindows(platform === 'win')
  }, [])

  return { isMac, isWindows, setIsMac }
}

// 异或运算
export function xorString(str: string, key: string) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    result += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % key.length))
  }
  return result
}

// 将字符串编码为 Base64
export function encodeBase64(str: string) {
  str = xorString(str, 'Octopus')
  return btoa(decodeURIComponent(encodeURIComponent(str)))
}
