import { Localization } from '@/components/Localization/Localization'
import React, { useEffect, useState } from 'react'
import * as S from './InfoCheckout.styles'

interface InfoCheckoutProps {
  totalItensValue: number
  setShippingCalculated: (value: boolean) => void
  setError: (value: null) => void
  error: string | null
}

export function InfoCheckout({
  totalItensValue,
  setShippingCalculated,
  error,
  setError,
}: InfoCheckoutProps) {
  const [shipping, setShipping] = useState(0)

  const total = shipping + totalItensValue

  useEffect(() => {
    if (shipping) {
      setError(null)
    }
  }, [shipping])

  return (
    <S.InfoCheckoutContainer>
      <S.InfoWrapper>
        <p>Total de itens</p>
        <p>R$ {totalItensValue.toFixed(2)}</p>
      </S.InfoWrapper>
      <S.InfoWrapper>
        <Localization
          setShipping={setShipping}
          error={error}
          setShippingCalculated={setShippingCalculated}
        />
      </S.InfoWrapper>
      <S.InfoWrapper>
        {!!shipping && (
          <>
            <S.TotalText>Total</S.TotalText>
            <S.TotalText>R$ {total.toFixed(2)}</S.TotalText>
          </>
        )}
      </S.InfoWrapper>
    </S.InfoCheckoutContainer>
  )
}
