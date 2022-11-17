import { Food } from '@/api/products'
import {
  addOneFoodAction,
  cartReducer,
  removeAllTypeOfAFoodAction,
  removeOneFoodAction,
} from '@/reducers'
import { createContext, ReactNode, useReducer } from 'react'

export interface FoodCart extends Food {
  amount?: number
}

export type CartProps = {
  foods: FoodCart[]
}

interface FoodCartContextProps {
  cart: CartProps
  addOneFood: (food: Food) => void
  removeOneFood: (food: Food) => void
  removeAllTypeOfAFood: (food: Food) => void
}

interface FoodCartContextProviderProps {
  children: ReactNode
}

export const FoodCartContext = createContext({} as FoodCartContextProps)

const initialState = { foods: [] }

export function FoodCartContextProvider({
  children,
}: FoodCartContextProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, initialState, () => {
    const storedStateAsJSON = localStorage.getItem('@veganese')

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
    return initialState
  })

  function addOneFood(foodAdded: Food) {
    const cartIsEmpty = cart.foods.length === 0

    const foodExists = cart.foods.find(
      (foo: Food) => foo.id === foodAdded.id,
    ) as FoodCart

    if (cartIsEmpty || !foodExists) {
      const food = {
        ...foodAdded,
        amount: 1,
      }
      dispatch(addOneFoodAction(food))
      return
    }

    if (foodExists) {
      const food = {
        ...foodExists,
        amount: foodExists.amount! + 1,
      }
      dispatch(addOneFoodAction(food))
    }
  }

  function removeOneFood(foodRemoved: Food) {
    const cartIsEmpty = cart.foods.length === 0

    const foodExists = cart.foods.find((foo: Food) => foo.id === foodRemoved.id)

    if (cartIsEmpty || !foodExists) {
      return
    }

    if (foodExists.amount > 0) {
      const food = {
        ...foodExists,
        amount: foodExists.amount - 1,
      }

      dispatch(removeOneFoodAction(food))
    }

    if (foodExists.amount === 1) {
      dispatch(removeAllTypeOfAFoodAction(foodRemoved))
    }
  }

  function removeAllTypeOfAFood(foodRemoved: Food) {
    const cartIsEmpty = cart.foods.length === 0

    const foodExists = cart.foods.find(
      (foo: Food) => foo.id === foodRemoved.id,
    ) as FoodCart

    if (cartIsEmpty || !foodExists) {
      return
    }

    if (foodExists.amount! > 0) {
      dispatch(removeAllTypeOfAFoodAction(foodRemoved))
    }
  }

  return (
    <FoodCartContext.Provider
      value={{
        cart,
        addOneFood,
        removeOneFood,
        removeAllTypeOfAFood,
      }}
    >
      {children}
    </FoodCartContext.Provider>
  )
}
