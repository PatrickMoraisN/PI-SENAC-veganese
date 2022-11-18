import React, { useContext } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { FoodCart, FoodCartContext } from '@/contexts/FoodCartContext'
import * as S from './AmountFood.styles'

interface AmountFoodProps {
  food: FoodCart
}

export function AmountFood({ food: coffee }: AmountFoodProps) {
  const {
    addOneFood: addOneCoffee,
    removeOneFood: removeOneCoffee,
    cart,
  } = useContext(FoodCartContext)

  const getQuantity = (food: FoodCart) => {
    if (cart.foods.length === 0) {
      return 0
    }

    const quantityExists = cart.foods.find((foo) => foo.id === food.id)

    if (quantityExists) {
      return quantityExists.amount
    }
    return 0
  }

  return (
    <S.AmountFood>
      <button onClick={() => removeOneCoffee(coffee)} data-testid="remove">
        <Minus size={14} color="#030303" weight="fill" />
      </button>
      {getQuantity(coffee)}
      <button onClick={() => addOneCoffee(coffee)} data-testid="plus">
        <Plus size={14} color="#030303" weight="fill" />
      </button>
    </S.AmountFood>
  )
}
