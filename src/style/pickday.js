import styled from "styled-components";

export const PickdayWrapper = styled.div`
  display: flex;
`
export const NavBar = styled.ul`
  display: flex;
  justify-content: end;
  list-style: none;
  border-top: 1px solid var(--border);
  li {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    cursor: pointer;
    padding: 4px 16px;
    border-left: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    border-right: 1px solid var(--border);
    &.active {
      color: white;
      background-color: var(--secondary);
    }
  }
`
