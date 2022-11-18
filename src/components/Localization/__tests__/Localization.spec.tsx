import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'
import { Localization } from '../Localization'

const setShipping = jest.fn()
const setShippingCalculated = jest.fn()

const renderLocalization = () =>
  render(
    <Localization
      setShipping={setShipping}
      error={null}
      setShippingCalculated={setShippingCalculated}
    />,
  )

describe('Localization', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render correctly', () => {
    const { container } = renderLocalization()

    expect(container).toMatchSnapshot()
  })

  it('should render shipping correctly', async () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementation((success) =>
        Promise.resolve(
          success({
            coords: {
              latitude: 10,
              longitude: 10,
            },
          }),
        ),
      ),
    }
    // @ts-ignore
    navigator.geolocation = mockGeolocation
    renderLocalization()

    await userEvent.click(screen.getByText('Calcular Frete'))

    expect(() => screen.getByText('Calcular Frete')).toThrow()
    expect(screen.getByText('Entrega')).toBeInTheDocument()
  })

  it('should render shipping correctly', async () => {
    const mockGeolocation = {
      getCurrentPosition: jest
        .fn()
        .mockImplementationOnce((_successCallback, errorCallback) => {
          errorCallback(new Error('w'))
        }),
    }

    // @ts-ignore
    navigator.geolocation = mockGeolocation
    renderLocalization()

    await userEvent.click(screen.getByText('Calcular Frete'))

    expect(() => screen.getByText('Calcular Frete')).toThrow()
    await waitFor(() =>
      expect(screen.getByText('Erro ao calcular!')).toBeInTheDocument(),
    )
  })
})
