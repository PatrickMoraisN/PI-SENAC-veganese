import { foodsMock } from '@/api/products'
import { renderWithRouter } from '@/test'
import { RenderWithContext } from '@/test/util/RenderWithContext'
import { Card } from '../Card'

const CardComponent = () => (
  <RenderWithContext>
    <Card coffeeList={foodsMock} />
  </RenderWithContext>
)

describe('Card', () => {
  it('should render correctly', () => {
    const { container } = renderWithRouter(<CardComponent />)

    expect(container).toMatchSnapshot()
  })
})
