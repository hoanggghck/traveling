import HeaderSchedule from '@/components/schedule/Header'
import ContentSchedule from '@/components/schedule/Content'
import { ScheduleWrapper } from '@/style/schedule'
import styled from 'styled-components'
import { listDay1, listDay2, listDay3 } from '@/data/listSchedule'

const Wrapper = styled.div`
  @media only screen and (min-width: 600px) {
    height: calc(100vh - 340px);
  }
  overflow-y: auto;
  width: 100%;
`

const ScheduleContent = ({ activeDay }) => {
  const dataShow = {
    1: listDay1,
    2: listDay2,
    3: listDay3
  }
  const listRender = dataShow[activeDay].map((item, index) => {
    return (
      <ContentSchedule key={index} item={item} />
    )
  })

  return (
    <ScheduleWrapper>
      <HeaderSchedule />
      <Wrapper>
        {listRender}
      </Wrapper>
    </ScheduleWrapper>
  )
}

export default ScheduleContent
