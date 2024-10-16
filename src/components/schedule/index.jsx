import HeaderSchedule from '@/components/schedule/Header'
import ContentSchedule from '@/components/schedule/Content'
import { ScheduleWrapper } from '@/style/schedule'
import styled from 'styled-components'

const Wrapper = styled.div`
  overflow-y: auto;
  width: 100%;
`

const ScheduleContent = () => {
  const listSchedule = [
    {
      timeStart: '11: 20',
      timeEnd: '12: 30',
      content: {
        name: 'Ăn bún bò',
        type: 'food',
        location: '123 Nguyễn Ảnh Thủ',
        url: '#'
      }
    },
    {
      timeStart: '13: 30',
      timeEnd: '14: 30',
      content: {
        name: 'Cafe',
        type: 'coffe',
        location: '124 Nguyễn Ảnh Thủ',
        url: '#'
      }
    },
    {
      timeStart: '17: 30',
      timeEnd: '18: 30',
      content: {
        name: 'Ăn bánh tráng nướng  + sữa đậu nành',
        type: 'food',
        location: 'Chợ đà lạt',
        url: '#'
      }
    },
    {
      timeStart: '17: 30',
      timeEnd: '18: 30',
      content: {
        name: 'Ăn bánh tráng nướng  + sữa đậu nành',
        type: 'food',
        location: 'Chợ đà lạt',
        url: '#'
      }
    },
    {
      timeStart: '17: 30',
      timeEnd: '18: 30',
      content: {
        name: 'Ăn bánh tráng nướng  + sữa đậu nành',
        type: 'food',
        location: 'Chợ đà lạt',
        url: '#'
      }
    },
    {
      timeStart: '17: 30',
      timeEnd: '18: 30',
      content: {
        name: 'Ăn bánh tráng nướng  + sữa đậu nành',
        type: 'food',
        location: 'Chợ đà lạt',
        url: '#'
      }
    },
  ]
  const listRender = listSchedule.map((item, index) => {
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
