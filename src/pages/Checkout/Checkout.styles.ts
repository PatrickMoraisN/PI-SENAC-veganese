import styled from 'styled-components'

export const Main = styled.main`
  min-height: 110vh;
`
export const ContentWrapper = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  gap: 32px;
`

export const PaymentContent = styled.div`
  margin-top: 15px;
`

export const DeliveryContent = styled.div`
  padding: 40px;
  min-width: 640px;
  min-height: 372px;
  background: #f3f2f2;
  border-radius: 6px;
`

export const MethodContent = styled.div`
  padding: 40px;
  margin-top: 12px;
  min-width: 640px;
  min-height: 207px;
  background: #f3f2f2;
  border-radius: 6px;
`

export const Methods = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 12px;
  justify-content: space-between;
`

type ButtonMethodProps = {
  selected: boolean
}

export const ButtonMethod = styled.button<ButtonMethodProps>`
  cursor: pointer;
  padding: 16px;
  width: 178.67px;
  height: 51px;
  background: ${(props) => (props.selected ? '#ebe5f9' : '#e6e5e5')};
  border-radius: 6px;
  border: ${(props) => (props.selected ? '1px solid #8047F8' : 'none')};
  color: #574f4d;
  font-size: 12px;
  transition: 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const EmptyCheckoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  gap: 30px;
  width: 100%;

  svg {
    transition: 0.3s;
    filter: blur(1px);
    animation: alien 5s infinite;

    &:hover {
      fill: red;
    }
  }

  @keyframes alien {
    0%,
    100% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(10px);
    }
  }
`

export const SelectedCoffees = styled.section`
  padding: 40px;
  width: 448px;
  min-height: 498px;
  background: #f3f2f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px 44px;
  margin-top: 15px;
`

export const CoffeeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  height: 90px;
  padding-bottom: 32px;
  border-bottom: 1px solid #e6e5e5;

  & + & {
    margin-top: 25px;
  }

  img {
    height: 64px;
    width: 64px;
  }
`

export const CoffeeCardTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`

export const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;

  width: 368px;
  height: 46px;

  background: #dbac2c;
  border-radius: 6px;
  margin-top: 30px;
  border: none;
  color: white;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`

export const ErrorMsg = styled.p`
  margin-top: 8px;
  color: red;
`
