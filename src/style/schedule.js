import styled from "styled-components";

export const ScheduleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`

export const TimeLineWrapper = styled.div`
  width: 150px;
  text-align: center;
`

export const ContentWrapper = styled.div`
  width: calc(100% - 150px);
  border-left: 1px solid var(--border);
  &.header {
    text-align: center;
  }
`

export const ScheduleItem = styled.div`
  background-color: var(--primary);
  padding: 16px;
  border-radius: 16px;
  color: white;
`
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  .title {
    font-weight: 600;
    margin-right: 10px;
  }
`
