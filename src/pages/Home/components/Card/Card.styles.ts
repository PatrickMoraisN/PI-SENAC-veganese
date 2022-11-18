import styled from 'styled-components'

export const Card = styled.div`
  background: #f3f2f2;
  border-radius: 6px 36px;
  width: 256px;
  height: 310px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 20px;

  img {
    height: 120px;
    width: 120px;
    margin-top: -30px;
    border-radius: 16px;
    object-fit: cover;
  }
`

export const TagContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const Tag = styled.div`
  background: #f1e9c9;
  font-size: 10px;
  padding: 4px 6px;
  color: #c47f17;
  font-weight: 700;
  margin-top: 12px;
  margin-bottom: 16px;
`

export const CoffeeName = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 8px;
`

export const CoffeeDesc = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #8d8686;
  padding: 0 20px;
  margin-bottom: 33px;
`

export const CoffeeFooter = styled.p`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
`

export const CartBtn = styled.button`
  width: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  border: none;
  background: #4b2995;
  cursor: pointer;
`
