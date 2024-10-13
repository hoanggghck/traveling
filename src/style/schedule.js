import styled from "styled-components";

export const ScheduleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`

export const TimeLineWrapper = styled.div`
  width: 150px;
`

export const ContentWrapper = styled.div`
  width: calc(100% - 150px);
  border-left: 1px solid #F6F6F5;
`

export const ScheduleItem = styled.div`
  background-color: #4DC591;
  padding: 16px;
  border-radius: 16px;
  color: white;
  .title {
    font-weight: 600;
    margin-right: 10px;
  }
`
