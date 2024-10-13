import { ContentWrapper, ScheduleItem, ScheduleWrapper, TimeLineWrapper } from '@/style/schedule'
import styled from 'styled-components'

const ContentWrapper2 = styled(ContentWrapper)`
  padding: 16px;
`
const TimeLineWrapper2 = styled(TimeLineWrapper)`
  padding: 16px;
  .time-start {
    font-weight: bold;
  }
`
const ContentSchedule = (props) => {
  const { item } = props;
  return (
    <ScheduleWrapper>
      <TimeLineWrapper2>
        <p className="time-start">{item.timeStart}</p>
        <p className="time-end">{item.timeEnd}</p>
      </TimeLineWrapper2>
      <ContentWrapper2>
        <ScheduleItem>
          <p><span className='title'>Tiêu đề:</span>{item.content.name}</p>
          <p><span className='title'>Loại:</span>{item.content.type}</p>
          <p><span className='title'>Địa chỉ:</span>{item.content.location}</p>
        </ScheduleItem>
      </ContentWrapper2>
    </ScheduleWrapper>
  )
}

export default ContentSchedule
