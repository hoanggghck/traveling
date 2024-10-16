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
  background-image: url('/assets/images/cover.jpg');
  background-size: cover;
  height: 100vh;
  width: 100%;
  overflow-y: hidden;
`

export const Container =  styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 40px 0;
`

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 16px;
  width: 100%;
  height: 100%;
`;
