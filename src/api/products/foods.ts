import { FoodsListProps, foodsMock } from './mocks'

const foodAPI = {
  getFoods(): Promise<FoodsListProps> {
    return new Promise((resolve, _reject) => {
      window.setTimeout(() => {
        return resolve(foodsMock)
      }, Math.random() * 2000 + 1000)
    })
  },
}

export default foodAPI
