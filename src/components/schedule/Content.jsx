import styled from 'styled-components'

import { ContentWrapper, ScheduleWrapper, TimeLineWrapper } from '@/style/schedule'
import ScheduleItemData from './item'

const ContentWrapper2 = styled(ContentWrapper)`
  padding: 16px;
  @media only screen and (max-width: 600px) {
    padding: 8px;
  }
`
const TimeLineWrapper2 = styled(TimeLineWrapper)`
  padding: 16px;
  @media only screen and (max-width: 600px) {
    padding: 8px;
  }
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
        <ScheduleItemData item={item}/>
      </ContentWrapper2>
    </ScheduleWrapper>
  )
}

export default ContentSchedule
