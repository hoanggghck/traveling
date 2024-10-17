import styled from "styled-components";
import flower1 from '@/assets/images/flowers/flower1.png'
import flower2 from '@/assets/images/flowers/flower2.png'

export const FlowerDropWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10000000;
  pointer-events: none;
  .flower {
    position: absolute;
    width: 30px;
    height: 30px;
    &.flower1 {
      background-image: url(${flower1});
    }
    &.flower2 {
      background-image: url(${flower2});
    }
    background-size: cover;
    animation: fall 5s linear infinite;
    opacity: 0.8;
  }

  @keyframes fall {
    0% {
        transform: translateY(-100px);
        opacity: 0;
    }
    100% {
        transform: translateY(100vh);
        opacity: 1;
    }
  }
`