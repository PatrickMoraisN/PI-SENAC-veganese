import React, { useContext } from 'react'
import * as S from './RemoveBtn.styles'
import { Trash } from 'phosphor-react'
import { Food } from '@/api/products'
import { FoodCartContext } from '@/contexts/FoodCartContext'

type RemoveBtnProps = {
  coffee: Food
}

export function RemoveBtn({ coffee }: RemoveBtnProps) {
  const { cart, removeAllTypeOfAFood: removeAllTypeOfACoffee } = useContext(FoodCartContext)

  console.log(cart)
  const handleClick = () => {
    removeAllTypeOfACoffee(coffee)
  }

  return (
    <S.Button onClick={handleClick}>
      <Trash size={16} color="#8047F8" weight="fill" />
      REMOVER
    </S.Button>
  )
}
