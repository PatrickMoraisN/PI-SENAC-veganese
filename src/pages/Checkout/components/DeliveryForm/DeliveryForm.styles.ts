import styled from 'styled-components'

export const Form = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  input {
    background: #eeeded;
    border: 1px solid #e6e5e5;
    border-radius: 4px;
    padding: 12px;

    &::placeholder {
      color: #8d8686;
    }
  }
`

export const CepInput = styled.input`
  width: 200px;
`

export const CepError = styled.span`
  color: red;
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`

export const ComplementINput = styled.input`
  width: 100%;
`

export const UFInput = styled.input`
  cursor: not-allowed;
  width: 60px;
`

export const CityInput = styled.input`
  cursor: not-allowed;
  width: 276px;
`
