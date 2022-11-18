import styled from 'styled-components'

type ButtonProps = {
  error: boolean
}

export const Button = styled.button<ButtonProps>`
  padding: 8px;
  background: #e6e5e5;
  border-radius: 6px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #574f4d;
  cursor: pointer;
  transition: 0.3s;
  border: ${(props) => props.error && '3px solid red'};

  &:hover {
    filter: brightness(0.9);
  }
`
