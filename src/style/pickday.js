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
    background-color: none;
    border: 1px solid var(--border);
    &.active {
      border: 1px solid var(--secondary);
      color: white;
      background-color: var(--secondary);
    }
  }
`
