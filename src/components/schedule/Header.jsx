import { ContentWrapper, ScheduleWrapper, TimeLineWrapper } from '@/style/schedule'

const HeaderSchedule = () => {
  return (
    <ScheduleWrapper>
      <TimeLineWrapper>
        Thời gian
      </TimeLineWrapper>
      <ContentWrapper style={{ padding: "0 16px"}}>
        Lịch trình
      </ContentWrapper>
    </ScheduleWrapper>
  )
}

export default HeaderSchedule
