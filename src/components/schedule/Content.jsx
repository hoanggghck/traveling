import { ContentWrapper, ScheduleItem, ScheduleWrapper, TimeLineWrapper } from '@/style/schedule'
import styled from 'styled-components'
import SVGSprite from '../common/SVGSprite'
import { TitleWrapper } from '@/style/schedule'
import TypeSVG from '../common/TypeSVG'

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
        <ScheduleItem>
          <TitleWrapper>
            <TypeSVG type={item.content.type}/>&nbsp;
            <span className='title'>{item.content.name}</span>
          </TitleWrapper>
          <TitleWrapper>
            <SVGSprite color="#ffffff" name="custom-location"/>&nbsp;<span className='title'>{item.content.location}</span>
          </TitleWrapper>
        </ScheduleItem>
      </ContentWrapper2>
    </ScheduleWrapper>
  )
}

export default ContentSchedule
