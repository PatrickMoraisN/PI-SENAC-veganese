import { Checkout } from '@/pages/Checkout/Checkout'
import { Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { Confirmation } from '@/pages/Confirmation'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  )
}
