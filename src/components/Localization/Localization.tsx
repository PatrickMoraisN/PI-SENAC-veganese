import { calcCrow } from '@/api/shipping'
import { sede } from '@/enums/sede'
import React, { useState } from 'react'
import * as S from './Localization.styles'

type LocalizationErrorProps = string | null

type CoordsProps = {
  latitude: number
  longitude: number
}

type PositionCoordsProps = {
  coords: CoordsProps
}

type LocalizationProps = {
  setShipping: (value: number) => void
  setShippingCalculated: (value: boolean) => void
  error: string | null
}

export function Localization({
  setShipping,
  setShippingCalculated,
  error,
}: LocalizationProps) {
  const [coords, setCoords] = useState<CoordsProps | null>(null)
  const [localizationError, setLocalizationError] =
    useState<LocalizationErrorProps>(null)

  async function getLocation() {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
      } else {
        setLocalizationError('Geolocation is not supported by this browser.')
      }
    } catch (err) {
      setLocalizationError('Error.')
    }
  }

  function showPosition(position: PositionCoordsProps) {
    setCoords({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    })
  }

  function calculateShip() {
    const { latitude, longitude } = sede
    const { latitude: l2, longitude: lo2 } = coords
    const distance = calcCrow(latitude, longitude, Number(l2), Number(lo2))
    return distance
  }

  function getShipping() {
    const shipping = calculateShip() * 2
    setShipping(shipping)
    setShippingCalculated(true)
    return shipping.toFixed(2)
  }

  function shippingError() {
    return error === 'O Frete não está calculado'
  }

  return (
    <>
      {!coords && !localizationError && (
        <S.Button onClick={getLocation} error={shippingError()}>
          Calcular Frete
        </S.Button>
      )}
      {localizationError && <p>Erro ao calcular!</p>}
      {coords && !localizationError && (
        <>
          <p>Entrega</p>
          <p>R$ {getShipping()}</p>
        </>
      )}
    </>
  )
}
