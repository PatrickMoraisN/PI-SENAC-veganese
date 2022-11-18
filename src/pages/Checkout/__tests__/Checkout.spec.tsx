import { renderWithRouter } from '@/test'
import { RenderWithContext } from '@/test/util/RenderWithContext'
import userEvent from '@testing-library/user-event'
import foodAPI from '@/api'
import { render, screen, waitFor } from '@testing-library/react'
import { Checkout } from '../Checkout'
import { foodsMock } from '@/api/products'
import App from '@/App'

jest.spyOn(foodAPI, 'getFoods').mockResolvedValue(foodsMock)

const CheckoutComponent = () => (
  <RenderWithContext>
    <Checkout />
  </RenderWithContext>
)

const AppComponent = () => (
  <RenderWithContext>
    <App />
  </RenderWithContext>
)

describe('Checkout', () => {
  it('should redirect to home correctly', async () => {
    renderWithRouter(<CheckoutComponent />)

    await userEvent.click(screen.getByTestId('logo'))

    expect(window.location.pathname).toBe('/')
  })

  it('should render correctly when has an empty cart', () => {
    renderWithRouter(<CheckoutComponent />)

    expect(screen.getByText(/seu carrinho está vazio!/gi)).toBeInTheDocument()
  })

  it('should render correctly when has an cart', async () => {
    render(<AppComponent />)

    await waitFor(() => {
      expect(screen.getByText(/expresso grains/gi)).toBeInTheDocument()
    })

    const arrOfAdds = screen.getAllByTestId('plus')
    await userEvent.click(arrOfAdds[1])
    await userEvent.click(arrOfAdds[1])
    await userEvent.click(arrOfAdds[2])

    await userEvent.click(screen.getByTestId('cart'))

    await waitFor(() => {
      screen.findByText(/complete seu pedido/gi)
    })

    expect(screen.getByText(/tacos/gi)).toBeInTheDocument()
    expect(screen.getByText(/expresso grains/gi)).toBeInTheDocument()
    expect(screen.getByText(/Confirmar pedido/gi)).toBeInTheDocument()
    expect(screen.getByText(/59.90/gi)).toBeInTheDocument()
  })
})
