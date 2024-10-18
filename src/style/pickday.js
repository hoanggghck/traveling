import styled from "styled-components";

export const PickdayWrapper = styled.div`
  display: flex;
`
export const NavBar = styled.ul`
  display: flex;
  justify-content: end;
  list-style: none;
  li {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    cursor: pointer;
    padding: 4px 16px;
    background-color: var(--border);
    &.active {
      color: white;
      background-color: var(--secondary);
    }
  }
`
