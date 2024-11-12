import styled from "styled-components";

export const PickdayWrapper = styled.div`
  display: flex;
  @media only screen and (min-width: 600px) {
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  padding: 0 16px;
  .wrap {
    display: flex;
    align-items: center;
  }
`
export const NavBar = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
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
