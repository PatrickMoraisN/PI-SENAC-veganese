import { RenderWithContext } from '@/test/util/RenderWithContext'
import userEvent from '@testing-library/user-event'
import foodAPI from '@/api'
import { render, screen, waitFor } from '@testing-library/react'
import { foodsMock } from '@/api/products'
import App from '@/App'

jest.spyOn(foodAPI, 'getFoods').mockResolvedValue(foodsMock)

const AppComponent = () => (
  <RenderWithContext>
    <App />
  </RenderWithContext>
)

describe('RemoveBtn', () => {
  it('should remove a coffee from cart', async () => {
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

    expect(screen.getByText(/expresso grains/gi)).toBeInTheDocument()

    await userEvent.click(screen.getAllByText(/remover/gi)[0])

    expect(() => screen.getByText(/tacos/gi)).toThrow()
  })
})
