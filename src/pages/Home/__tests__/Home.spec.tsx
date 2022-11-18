import { Home } from '../Home'
import foodAPI from '@/api'
import { foodsMock } from '@/api/products'
import { RenderWithContext } from '@/test/util/RenderWithContext'
import { renderWithRouter } from '@/test'

jest.spyOn(foodAPI, 'getFoods').mockResolvedValue(foodsMock)

const HomeComponent = () => (
  <RenderWithContext>
    <Home />
  </RenderWithContext>
)

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render correctly', () => {
    const { container } = renderWithRouter(<HomeComponent />)

    expect(container).toMatchSnapshot()
  })
})
