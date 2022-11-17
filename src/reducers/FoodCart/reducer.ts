import { Food } from '@/api/products'
import { ActionTypes } from './actions'

interface CartPayload {
  food: Food
}

interface CartAction {
  type: string
  payload: CartPayload
}

export function cartReducer(state: any, action: CartAction) {
  switch (action.type) {
    case ActionTypes.ADD_ONE_FOOD: {
      const foodAlreadyAdded = state.foods.find(
        (food: Food) => food.id === action.payload.food.id,
      )
      if (state.foods.length !== 0 && foodAlreadyAdded) {
        return {
          foods: state.foods.map((food: Food) => {
            if (food.id === action.payload.food.id) {
              return { ...action.payload.food }
            }
            return { ...food }
          }),
        }
      }
      return {
        foods: [...state.foods, action.payload.food],
      }
    }

    case ActionTypes.REMOVE_ONE_FOOD: {
      const foodAlreadyAdded = state.foods.find(
        (food: Food) => food.id === action.payload.food.id,
      )
      if (foodAlreadyAdded) {
        return {
          foods: state.foods.map((food: Food) => {
            if (food.id === action.payload.food.id) {
              return { ...action.payload.food }
            }
            return { ...food }
          }),
        }
      }
      return
    }

    case ActionTypes.REMOVE_ALL_TYPE_OF_A_FOOD:
      return {
        foods: state.foods.filter(
          (food: Food) => food.id !== action.payload.food.id,
        ),
      }

    default:
      return state
  }
}
