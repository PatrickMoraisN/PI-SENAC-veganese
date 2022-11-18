import { Header } from '@/components/Header'
import * as S from './Checkout.styles'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FoodCartContext } from '@/contexts/FoodCartContext'
import { Alien } from 'phosphor-react'
import { DeliveryForm, InfoCheckout, RemoveBtn } from './components'
import { AmountFood } from '@/components'
import { UserInfoContext } from '@/contexts/UserInfoContext'

export function Checkout() {
  const [methodSelected, setMethodSelected] = useState<null | string>(null)
  const [isDeliveryFormCompleted, setDeliveryFormCompleted] = useState(false)
  const [isShippingCalculated, setShippingCalculated] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { cart } = useContext(FoodCartContext)
  const { setUserInfo } = useContext(UserInfoContext)

  const navigate = useNavigate()

  const totalItensValue = cart.foods.reduce((acc, elem) => {
    return (
      Number(acc) + Number(elem.price.replace(',', '.')) * Number(elem.amount)
    )
  }, 0)

  const handleConfirmDelivery = () => {
    if (!isDeliveryFormCompleted || !methodSelected) {
      setError('O Formulário não está completo! Revise os dados.')
      return
    }

    if (!isShippingCalculated) {
      setError('O Frete não está calculado')
      return
    }

    navigate('/confirmation')
  }

  useEffect(() => {
    if (methodSelected) {
      setUserInfo((state: any) => ({ ...state, paymentMethod: methodSelected }))
    }
  }, [methodSelected])

  return (
    <S.Main>
      <Header />

      {cart.foods.length ? (
        <S.ContentWrapper>
          <section>
            <h2>Complete seu pedido</h2>

            <S.PaymentContent>
              <S.DeliveryContent>
                <DeliveryForm
                  setDeliveryFormCompleted={setDeliveryFormCompleted}
                  setError={setError}
                />
              </S.DeliveryContent>

              <S.MethodContent>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>

                <S.Methods>
                  <S.ButtonMethod
                    onClick={() => setMethodSelected('credito')}
                    selected={methodSelected === 'credito'}
                  >
                    CARTÃO DE CRÉDITO
                  </S.ButtonMethod>
                  <S.ButtonMethod
                    onClick={() => setMethodSelected('debito')}
                    selected={methodSelected === 'debito'}
                  >
                    CARTÃO DE DÉBITO
                  </S.ButtonMethod>
                  <S.ButtonMethod
                    onClick={() => setMethodSelected('dinheiro')}
                    selected={methodSelected === 'dinheiro'}
                  >
                    DINHEIRO
                  </S.ButtonMethod>
                </S.Methods>
              </S.MethodContent>
            </S.PaymentContent>
          </section>

          <section>
            <h2>Comidas selecionadas</h2>

            <S.SelectedCoffees>
              {cart.foods.map((coffee) => (
                <S.CoffeeCard key={coffee.title}>
                  <img src={coffee.src} alt={coffee.title} />

                  <S.CoffeeCardTitle>
                    <p>{coffee.title}</p>
                    <div>
                      <AmountFood food={coffee} />
                      <RemoveBtn coffee={coffee} />
                    </div>
                  </S.CoffeeCardTitle>

                  <p>
                    R$ {coffee.price}{' '}
                    {coffee.amount! > 1 && <span>x {coffee.amount}</span>}
                  </p>
                </S.CoffeeCard>
              ))}

              <InfoCheckout
                totalItensValue={totalItensValue}
                setShippingCalculated={setShippingCalculated}
                error={error}
                setError={setError}
              />
              <S.ConfirmButton onClick={handleConfirmDelivery}>
                CONFIRMAR PEDIDO
              </S.ConfirmButton>
              {error && (
                <S.ErrorMsg>
                  {'->'} {error}
                </S.ErrorMsg>
              )}
            </S.SelectedCoffees>
          </section>
        </S.ContentWrapper>
      ) : (
        <S.ContentWrapper>
          <S.EmptyCheckoutWrapper>
            <Alien size={52} color="#030303" weight="fill" />
            <h2>Seu Carrinho está vazio!</h2>
          </S.EmptyCheckoutWrapper>
        </S.ContentWrapper>
      )}
    </S.Main>
  )
}
