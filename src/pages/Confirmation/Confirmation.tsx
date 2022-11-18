import { Header } from '@/components/Header'
import { UserInfoContext } from '@/contexts/UserInfoContext'
import { GithubLogo } from 'phosphor-react'
import React, { useContext, useEffect } from 'react'
import { NavLink as a, useNavigate } from 'react-router-dom'
import * as S from './Confirmation.styles'

type PaymentMethodProps = 'credito' | 'debito' | 'dinheiro'

export function Confirmation() {
  const { userInfo } = useContext(UserInfoContext)

  const navigate = useNavigate()

  const getPaymentMessage = (paymentMethod: PaymentMethodProps) => {
    if (paymentMethod === 'credito') return <span>Cartão de Crédito</span>
    if (paymentMethod === 'debito') return <span>Cartão de Débito</span>
    if (paymentMethod === 'dinheiro') return <span>Dinheiro</span>
  }

  console.log('aaa' + Object.values(userInfo).length)

  useEffect(() => {
    if (!Object.values(userInfo).length) {
      navigate('/')
    }
  }, [])

  return (
    <>
      <Header />
      <S.ContentWrapper>
        <div>
          <S.ConfirmationText>Uhu! Pedido confirmado</S.ConfirmationText>
          <p>Agora é só aguardar que logo a comida chegará até você</p>
        </div>

        <S.Confirmation>
          <div>
            <div>
              <p style={{ fontWeight: 'bold' }}>Entrega em {userInfo.street}</p>
              <p>
                {userInfo.neighb} - {userInfo.city}, {userInfo.uf}
              </p>
            </div>
            <br></br>

            <div>
              <p style={{ fontWeight: 'bold' }}>Previsão de entrega</p>
              <p>20 min - 30 min </p>
            </div>
            <br></br>

            <div>
              <p style={{ fontWeight: 'bold' }}>Pagamento na entrega</p>
              <p>{getPaymentMessage(userInfo.paymentMethod)}</p>
            </div>
            <br></br>
          </div>
        </S.Confirmation>
        <br></br>
        <br></br>

        <h3>Grupo Projeto Integrador - SENAC</h3>
        <S.AuthorsContainer>
          <a
            href="https://github.com/PatrickMoraisN"
            target="_blank"
            rel="noreferrer"
          >
            <S.Author>
              <GithubLogo size={32} color="#FFF" />
              Patrick Morais
            </S.Author>
          </a>

          <a
            href="https://github.com/LEANDRO-DV"
            target="_blank"
            rel="noreferrer"
          >
            <S.Author>
              <GithubLogo size={32} color="#FFF" />
              Leandro Lopes
            </S.Author>
          </a>

          <a
            href="https://github.com/Miguel-Lima"
            target="_blank"
            rel="noreferrer"
          >
            <S.Author>
              <GithubLogo size={32} color="#FFF" />
              Miguel Oliveira
            </S.Author>
          </a>

          <a
            href="https://github.com/PatrickMoraisN"
            target="_blank"
            rel="noreferrer"
          >
            <S.Author>
              <GithubLogo size={32} color="#FFF" />
              Roberto Santuche
            </S.Author>
          </a>
        </S.AuthorsContainer>
      </S.ContentWrapper>
    </>
  )
}
