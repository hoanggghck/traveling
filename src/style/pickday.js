import styled from "styled-components";

export const PickdayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  .wrap {
    display: flex;
    align-items: center;
  }
`
export const NavBar = styled.ul`
  display: flex;
  justify-content: space-between;
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

export const BackupWrapper = styled.div`
  height: 80%;
  overflow-y: auto;
  .item {
    border: 1px solid var(--border);
    padding: 10px;
    margin-bottom: 16px;
    border-radius: 16px;
  }
`
