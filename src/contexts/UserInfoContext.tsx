import { createContext, ReactNode, useState } from 'react'

type UserInfoProps = {
  street: string
  city: string
  uf: string
  neighb: string
  paymentMethod: string
}

interface UserInfoContextProps {
  userInfo: UserInfoProps | {}
  setUserInfo: (value: any) => void
}

interface UserInfoContextProviderProps {
  children: ReactNode
}

export const UserInfoContext = createContext({} as UserInfoContextProps)

export function UserInfoContextProvider({
  children,
}: UserInfoContextProviderProps) {
  const [userInfo, setUserInfo] = useState<UserInfoProps | {}>({})
  console.log(userInfo)

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  )
}
