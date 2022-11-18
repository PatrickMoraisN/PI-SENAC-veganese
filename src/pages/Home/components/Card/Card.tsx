import React from 'react'
import { ShoppingCart } from 'phosphor-react'
import * as S from './Card.styles'
import { FoodsListProps } from '@/api/products/mocks'
import { useNavigate } from 'react-router-dom'
import { AmountFood } from '@/components/AmountFood/AmountFood'

type CardProps = {
  coffeeList: FoodsListProps
}

export function Card({ coffeeList }: CardProps) {
  const navigate = useNavigate()

  const handleCartClick = () => navigate('/checkout')

  return (
    <>
      {coffeeList.map((coffee) => (
        <S.Card key={coffee.title}>
          <img src={coffee.src} />

          <S.TagContainer>
            {coffee.labels.map((label) => (
              <S.Tag key={label}>{label}</S.Tag>
            ))}
          </S.TagContainer>
          <S.CoffeeName>{coffee.title}</S.CoffeeName>
          <S.CoffeeDesc>{coffee.description}</S.CoffeeDesc>

          <S.CoffeeFooter>
            R$ {coffee.price}
            <AmountFood food={coffee} />
            <S.CartBtn onClick={handleCartClick}>
              <ShoppingCart color="#FFF" weight="fill" />
            </S.CartBtn>
          </S.CoffeeFooter>
        </S.Card>
      ))}
    </>
  )
}
