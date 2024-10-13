import styled from "styled-components";

export const PickdayWrapper = styled.div`
  display: flex;
  justify-content: end;
`
export const NavBar = styled.ul`
  display: flex;
  list-style: none;
  li {
    margin-right: 8px;
    border-radius: 8px;
    cursor: pointer;
    padding: 4px 16px;
    background-color: #ffaaaa;
    color: #555555;
    opacity: 0.8;
    &.active {
      opacity: 1;
    }
  }
`
