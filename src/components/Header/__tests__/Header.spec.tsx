import { Header } from '../Header'
import { renderWithRouter } from '@/test'
import { RenderWithContext } from '@/test/util/RenderWithContext'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'

const HeaderComponent = () => (
  <RenderWithContext>
    <Header />
  </RenderWithContext>
)

describe('Header', () => {
  it('Should render correctly', () => {
    renderWithRouter(<HeaderComponent />)

    expect(screen.getByText(/senac/gi)).toBeInTheDocument()
  })

  it('Should redirect to /checkout and back home correctly', async () => {
    renderWithRouter(<HeaderComponent />)

    await userEvent.click(screen.getByTestId('cart'))
    expect(window.location.pathname).toBe('/checkout')

    await userEvent.click(screen.getByTestId('logo'))
    expect(window.location.pathname).toBe('/')
  })
})
