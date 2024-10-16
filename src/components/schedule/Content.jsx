import { ContentWrapper, ScheduleItem, ScheduleWrapper, TimeLineWrapper } from '@/style/schedule'
import styled from 'styled-components'
import SVGSprite from '../common/SVGSprite'
import { TitleWrapper } from '@/style/sumary'
import TypeSVG from '../common/TypeSVG'

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
          <TitleWrapper>
            <span className='title'>{item.content.name}</span>
            <TypeSVG type={item.content.type}/>
          </TitleWrapper>
          <TitleWrapper>
            <span className='title'>Địa chỉ:</span>{item.content.location}<SVGSprite color="#ffffff" link="#" name="custom-location"/>
          </TitleWrapper>
        </ScheduleItem>
      </ContentWrapper2>
    </ScheduleWrapper>
  )
}

export default ContentSchedule
