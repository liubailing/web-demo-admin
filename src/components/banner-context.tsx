import { PropsWithChildren, createContext, useState } from 'react'

interface BannerContextProps {
  bannerVisible: boolean
  setBannerVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const BannerContext = createContext<BannerContextProps>({ bannerVisible: false, setBannerVisible: () => {} })

export const BannerContextProvider = ({ children }: PropsWithChildren) => {
  const [bannerVisible, setBannerVisible] = useState(false)

  return <BannerContext.Provider value={{ bannerVisible, setBannerVisible }}>{children}</BannerContext.Provider>
}
