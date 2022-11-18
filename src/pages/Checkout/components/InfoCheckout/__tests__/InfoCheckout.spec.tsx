import { render } from '@testing-library/react'
import { InfoCheckout } from '../InfoCheckout'

const setShippingMock = jest.fn()
const setErrorMock = jest.fn()
const totalItensValueMock = 29.943

const renderInfoCheckout = () =>
  render(
    <InfoCheckout
      totalItensValue={totalItensValueMock}
      setShippingCalculated={setShippingMock}
      error={null}
      setError={setErrorMock}
    />,
  )

describe('InfoCheckout', () => {
  it('should render correcly', () => {
    const { container } = renderInfoCheckout()

    expect(container).toMatchSnapshot()
  })
})
