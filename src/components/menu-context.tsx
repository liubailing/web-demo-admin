import { PropsWithChildren, createContext, useState } from 'react'

interface MenuContextProps {
  menuCollapsed: boolean
  setMenuCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuContext = createContext<MenuContextProps>({ menuCollapsed: false, setMenuCollapsed: () => {} })

export const MenuContextProvider = ({ children }: PropsWithChildren) => {
  const [menuCollapsed, setMenuCollapsed] = useState(false)

  return <MenuContext.Provider value={{ menuCollapsed, setMenuCollapsed }}>{children}</MenuContext.Provider>
}
