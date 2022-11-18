import React, { useEffect, useState } from 'react'
import { Header } from '@/components/Header'
import Delivery from '@/assets/delivery.svg'
import * as S from './Home.styles'
import foodAPI from '@/api'
import { Card } from './components/Card'
import { FoodsListProps } from '@/api/products/mocks'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  const [coffeeList, setCoffeeList] = useState<FoodsListProps>([])

  const getFoods = async () => {
    const coffees = await foodAPI.getFoods()
    setCoffeeList(coffees)
  }

  useEffect(() => {
    getFoods()
  }, [])
  return (
    <S.main>
      <Header />
      <S.IntroContainer>
        <S.IntroWrapper>
          <S.IntroText>
            <div>
              <h1>
                Encontre a refeição vegana perfeita para qualquer hora do dia
              </h1>
              <br></br>
              <p>
                Com o Vegane-se você recebe sua comida saudável onde estiver, a
                qualquer hora
              </p>
            </div>
            <S.ItemsContainer>
              <div>
                <ShoppingCart size={17} color="#030303" weight="fill" />
                <p>Compra simples e segura</p>
              </div>

              <div>
                <Package size={17} color="#030303" weight="fill" />
                <p>Embalagem mantém a comida intacta</p>
              </div>

              <div>
                <Timer size={17} color="#030303" weight="fill" />
                <p>Entrega rápida e rastreada</p>
              </div>

              <div>
                <Coffee size={17} color="#030303" weight="fill" />
                <p>A comida chega fresquinha</p>
              </div>
            </S.ItemsContainer>
          </S.IntroText>

          <img src={Delivery} />
        </S.IntroWrapper>
      </S.IntroContainer>

      <S.OurCoffees>
        <h2>Nossas comidas</h2>
      </S.OurCoffees>

      {!!coffeeList.length && (
        <S.CoffeesListWrapper>
          <Card coffeeList={coffeeList} />
        </S.CoffeesListWrapper>
      )}
    </S.main>
  )
}
