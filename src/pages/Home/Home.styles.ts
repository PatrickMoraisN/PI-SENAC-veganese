import styled from 'styled-components'

export const main = styled.main`
  min-height: 110vh;
`

export const OurCoffees = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  h2 {
    padding: 0 32px;
    margin-bottom: 40px;
  }
`

export const IntroContainer = styled.div`
  width: 100%;
  height: 544px;
  background-image: url('src/assets/Background.svg');
`

export const IntroWrapper = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
  width: 100%;
  display: flex;
  gap: 56px;

  img {
    width: 50%;
    margin-top: 94px;
    max-width: 476px;
    max-height: 360px;
  }
`

export const IntroText = styled.div`
  width: 50%;
  height: 192px;
  margin-top: 94px;
  top: 234px;

  div {
    margin-bottom: 66px;
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  gap: 20px;
  height: 84px;
  flex-wrap: wrap;

  div {
    display: flex;
    margin: 0;
    gap: 8px;

    p {
      flex-wrap: wrap;
      width: 100%;
    }
  }
`

export const CoffeesListWrapper = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
`
