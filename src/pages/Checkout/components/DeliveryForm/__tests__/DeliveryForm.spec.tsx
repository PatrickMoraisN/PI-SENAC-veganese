import CepAPI from '@/api/cep'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { DeliveryForm } from '../DeliveryForm'
import { RenderWithContext } from '@/test/util/RenderWithContext'

const setDeliveryFormCompletedMock = jest.fn()
const setErrorMock = jest.fn()

const CepAPIResponseMock = {
  logradouro: 'logradouroMock',
  localidade: 'localidadeMock',
  uf: 'ufMock',
  bairro: 'bairroMock',
}

const renderDeliveryForm = () =>
  render(
    <RenderWithContext>
      <DeliveryForm
        setDeliveryFormCompleted={setDeliveryFormCompletedMock}
        setError={setErrorMock}
      />
    </RenderWithContext>,
  )

jest.spyOn(CepAPI, 'getCep').mockResolvedValue(CepAPIResponseMock)

describe('DeliveryForm', () => {
  it('should render correctly', () => {
    const { container } = renderDeliveryForm()

    expect(container).toMatchSnapshot()
  })

  it('should call CepAPI correctly', async () => {
    renderDeliveryForm()

    await userEvent.type(screen.getByTestId('cep'), '22012013')

    const street = screen.getByTestId('street')
    await userEvent.click(street)

    expect(street).toHaveValue(CepAPIResponseMock.logradouro)
    expect(screen.getByTestId('neighb')).toHaveValue(CepAPIResponseMock.bairro)
    expect(screen.getByTestId('city')).toHaveValue(
      CepAPIResponseMock.localidade,
    )
    expect(screen.getByTestId('uf')).toHaveValue(CepAPIResponseMock.uf)
  })
})
