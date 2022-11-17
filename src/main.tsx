import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FoodCartContextProvider } from './contexts/FoodCartContext'
import { UserInfoContextProvider } from './contexts/UserInfoContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <FoodCartContextProvider>
    <UserInfoContextProvider>
      <App />
    </UserInfoContextProvider>
  </FoodCartContextProvider>,
)
