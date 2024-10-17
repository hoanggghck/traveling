import { styled } from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  visibility: ${(props) => props.$active ? 'visible' : 'hidden'};
  opacity: ${(props) => props.$active ? '0.3' : '0'};
  animation: fadeIn 1s;
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 0.3; }
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9001;
  visibility: ${(props) => props.$active ? 'visible' : 'hidden'};
  opacity: ${(props) => props.$active ? '1' : '0'};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

export const ModalDialog = styled.div`
  transform: none;
  transition: transform .3s ease-out;
  position: relative;
  width: auto;
  pointer-events: none;
  margin: 60px auto;
  max-width: calc(100% - 32px);
  display: flex;
  align-items: center;
  min-height: calc(100% - 120px);
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) => props.$maxWidth ? `${props.$maxWidth}px` : 'auto'};
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  padding: 16px;
  outline: 0;
  border-radius: 16px;
  margin: 0 auto;
`;