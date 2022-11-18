import styled from 'styled-components'

export const ConfirmationText = styled.h2`
  color: #c47f17;
  font-size: 32px;
`

export const ContentWrapper = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
`

export const ConfirmationInfo = styled.div`
  margin-top: 41px;
  border: 1px solid transparent;
  border-image-slice: 1;
  border-width: 4px;
  border-radius: 6px 36px;
  padding: 10px transparent;
  display: flex;
  justify-content: center;
  width: 526px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #dbac2c 2.61%, #8047f8 98.76%);
  background-origin: border-box;
  background-clip: content-box, border-box;
`

export const Confirmation = styled.div`
  margin-top: 41px;
  padding: 30px;
  background: #e6e5e5;
  border-radius: 6px 36px;
`

export const AuthorsContainer = styled.div`
  margin-top: 41px;
  display: flex;
  justify-content: space-around;

  a {
    text-decoration: none;
    outline: none;
  }
`

export const Author = styled.div`
  display: flex;
  gap: 3px;
  color: white;
  border-radius: 10px;
  padding: 5px 16px;
  align-items: center;
  background: linear-gradient(270deg, #080808, #717171);
  background-size: 400% 400%;
  -webkit-animation: AnimationName 4s ease infinite;
  -moz-animation: AnimationName 4s ease infinite;
  animation: AnimationName 4s ease infinite;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px black;
  }

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`
