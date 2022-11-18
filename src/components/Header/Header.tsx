import React, { useContext } from 'react'
import * as S from './Header.styles'
import logo from '@/assets/veganese.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { FoodCart, FoodCartContext } from '@/contexts/FoodCartContext'

export function Header() {
  const { cart } = useContext(FoodCartContext)

  const getTotalQuantityOnCart = (coffees: FoodCart[]) => {
    const totalQuantity = coffees.reduce((acc, curr) => {
      return acc + curr.amount!
    }, 0)
    return totalQuantity
  }

  return (
    <S.HeaderContainer>
      <NavLink to="/" data-testid="logo">
        <img src={logo} width="50px" />
      </NavLink>

      <S.HeaderText>Vegane-se</S.HeaderText>

      <S.CartContainer>
        <S.Location>
          <MapPin size={18} color="#8047F8" weight="fill" />
          SENAC
        </S.Location>
        <NavLink to="/checkout">
          <S.Cart data-testid="cart">
            {!!cart.foods.length && (
              <span>{getTotalQuantityOnCart(cart.foods)}</span>
            )}
            <ShoppingCart size={18} color="#C47F17" weight="fill" />
          </S.Cart>
        </NavLink>
      </S.CartContainer>
    </S.HeaderContainer>
  )
}
