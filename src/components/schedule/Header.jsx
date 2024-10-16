import { ContentWrapper, ScheduleWrapper, TimeLineWrapper } from '@/style/schedule'

const HeaderSchedule = () => {
  return (
    <ScheduleWrapper style={{ paddingBottom: "16px"}}>
      <TimeLineWrapper className="header text-bold">
        Thời gian
      </TimeLineWrapper>
      <ContentWrapper className="header text-bold" style={{ padding: "0 16px", borderLeft: "none"}}>
        Lịch trình
      </ContentWrapper>
    </ScheduleWrapper>
  )
}

export default HeaderSchedule
