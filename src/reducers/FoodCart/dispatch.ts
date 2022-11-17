import { Food } from '@/api/products'
import { FoodCart } from '@/contexts/FoodCartContext'
import { ActionTypes } from './actions'

type PayloadProps = {
  food: Food
}

export type ActionReturnProps = {
  type: string
  payload: PayloadProps
}

export function addOneFoodAction(food: FoodCart): ActionReturnProps {
  return { type: ActionTypes.ADD_ONE_FOOD, payload: { food } }
}

export function removeOneFoodAction(food: FoodCart): ActionReturnProps {
  return { type: ActionTypes.REMOVE_ONE_FOOD, payload: { food } }
}

export function removeAllTypeOfAFoodAction(food: FoodCart): ActionReturnProps {
  return { type: ActionTypes.REMOVE_ALL_TYPE_OF_A_FOOD, payload: { food } }
}
