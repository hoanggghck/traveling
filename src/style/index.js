import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #4DC591;
    --secondary: #ff7649;
    --dark: #ff9362;
    --border: #ecedef;
  }
  .text-bold {
    font-weight: bold;  
  }
  .btn-link {
    background-color: none;
    margin: 0;
    height: 22px;
    width: auto;
  }
`

export const BackgroundWrapper = styled.div`
  min-height: 100vh;
  background-image: url(${props => props.coverImage});
  background-size: cover;
  overflow-y: hidden;
`

export const Container =  styled.div`
  max-width: 950px;
  @media only screen and (max-width: 600px) {
    max-width: 95%;
  }
  margin: 0 auto;
  padding: 40px 0;
`

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 16px;
  @media only screen and (max-width: 600px) {
    padding: 8px;
  }
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 600px) {
    height: calc(100vh - 80px);
  }
  min-height: calc(100vh - 80px);
`;
