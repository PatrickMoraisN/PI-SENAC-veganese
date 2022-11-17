import { FoodCartContextProvider } from '@/contexts/FoodCartContext'
import { UserInfoContextProvider } from '@/contexts/UserInfoContext'
import React, { ReactNode } from 'react'

interface RenderWithContextProps {
  children: ReactNode | any
}

export function RenderWithContext({ children }: RenderWithContextProps) {
  return (
    <FoodCartContextProvider>
      <UserInfoContextProvider>{children}</UserInfoContextProvider>
    </FoodCartContextProvider>
  )
}
