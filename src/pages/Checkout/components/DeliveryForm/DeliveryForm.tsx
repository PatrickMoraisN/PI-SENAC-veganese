import React, {
  ChangeEventHandler,
  useContext,
  useEffect,
  useState,
} from 'react'
import * as S from './DeliveryForm.styles'
import CepAPI from '@/api/cep'
import { UserInfoContext } from '@/contexts/UserInfoContext'

type CepInfoProps = {
  street: string
  city: string
  uf: string
  neighb: string
}

type DeliveryFormProps = {
  setDeliveryFormCompleted: (value: boolean) => void
  setError: (value: null) => void
}

interface EventProps extends ChangeEventHandler {
  target: HTMLInputElement
}

export function DeliveryForm({
  setDeliveryFormCompleted,
  setError,
}: DeliveryFormProps) {
  const [cepInfo, setCepInfo] = useState<null | CepInfoProps>(null)
  const [numberStreet, setNumberStreet] = useState('')
  const [complement, setComplement] = useState('')
  const [cepError, setCepError] = useState<null | string>(null)
  const { setUserInfo } = useContext(UserInfoContext)

  const formCompleted =
    cepInfo?.city && cepInfo.neighb && cepInfo.street && cepInfo.uf

  const getInfos = async (cep: string) => {
    try {
      if (cepError) {
        setCepError(null)
      }
      if (!cepInfo) {
        const cepResponse = await CepAPI.getCep(cep)
        setCepInfo({
          street: cepResponse.logradouro,
          city: cepResponse.localidade,
          uf: cepResponse.uf,
          neighb: cepResponse.bairro,
        })
      }
    } catch {
      setCepError('O CEP informado está incorreto! Informe um CEP válido.')
    }
  }

  const handleNumberChange = (e: EventProps | any) => {
    setError(null)
    setNumberStreet(e.target.value)
  }

  const handleComplementChange = (e: EventProps | any) => {
    setError(null)
    setComplement(e.target.value)
  }

  useEffect(() => {
    if (formCompleted) {
      const { street, city, uf, neighb } = cepInfo
      setDeliveryFormCompleted(true)
      setUserInfo((state: any) => ({ ...state, street, city, uf, neighb }))
    }
  }, [cepInfo])

  return (
    <>
      <h3>Endereço de Entrega</h3>
      <p>Informe o endereço onde deseja receber seu pedido</p>

      <S.Form>
        <S.CepInput
          type="number"
          placeholder="CEP"
          data-testid="cep"
          onBlur={(e) => getInfos((e.target as HTMLInputElement).value)}
        />
        {cepError && <S.CepError>{cepError}</S.CepError>}

        <input
          type="text"
          style={{ cursor: 'not-allowed' }}
          placeholder="Rua"
          disabled
          value={cepInfo ? cepInfo.street : ''}
          data-testid="street"
        />

        <S.InputWrapper>
          <S.CepInput
            type="number"
            placeholder="Número"
            onChange={handleNumberChange}
            value={numberStreet}
          />
          <S.ComplementINput
            type="text"
            placeholder="Complemento"
            value={complement}
            onChange={handleComplementChange}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.CepInput
            type="text"
            placeholder="Bairro"
            style={{ cursor: 'not-allowed' }}
            disabled
            value={cepInfo ? cepInfo.neighb : ''}
            data-testid="neighb"
          />
          <S.CityInput
            type="text"
            placeholder="Cidade"
            disabled
            value={cepInfo ? cepInfo.city : ''}
            data-testid="city"
          />
          <S.UFInput
            type="text"
            placeholder="UF"
            disabled
            value={cepInfo ? cepInfo.uf : ''}
            data-testid="uf"
          />
        </S.InputWrapper>
      </S.Form>
    </>
  )
}
