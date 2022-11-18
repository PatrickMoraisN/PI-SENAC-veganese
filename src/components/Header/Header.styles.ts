import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1120px;
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 32px;
`

export const HeaderText = styled.h1`
  color: #4b4395;
  font-family: 'Roboto', sans-serif;
`

export const CartContainer = styled.div`
  display: flex;
  gap: 12px;
`

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px;
  background: ${(props) => props.theme['purple-100']};
  border-radius: 6px;
`

export const Cart = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  padding: 8px;
  gap: 4px;
  width: 38px;
  height: 38px;
  background: ${(props) => props.theme['yellow-100']};
  border-radius: 6px;
  cursor: pointer;

  span {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
    color: white;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
