import { RenderWithContext } from '@/test/util/RenderWithContext'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { AmountFood } from '../AmountFood'

const coffee = {
  id: 1,
  title: 'Expresso Tradicional',
  description: 'O tradicional café feito com água quente e grãos moídos',
  labels: ['TRADICIONAL'],
  src: 'src/assets/coffees/tradicional.png',
  price: '9,90',
}

const renderAmountFood = () => {
  render(
    <RenderWithContext>
      <AmountFood food={coffee} />
    </RenderWithContext>,
  )
}

describe('AmountFood', () => {
  it('should increase and decrese quantity when we click on add and remove', async () => {
    renderAmountFood()

    expect(screen.getByText('0')).toBeInTheDocument()

    await userEvent.click(screen.getByTestId('plus'))
    await userEvent.click(screen.getByTestId('plus'))

    expect(screen.getByText('2')).toBeInTheDocument()

    await userEvent.click(screen.getByTestId('remove'))
    await userEvent.click(screen.getByTestId('remove'))

    expect(screen.getByText('0')).toBeInTheDocument()
  })
})
