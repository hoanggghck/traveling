import SVGSprite from '@/components/common/SVGSprite'
import TypeSVG from '@/components/common/TypeSVG'
import { openAnimation } from '@/store/flower'
import { ScheduleItem, SecretWrapper, TitleWrapper } from '@/style/schedule'
import { TYPE } from '@/utils/const'
import styled from 'styled-components'

const ScheduleItemSecret = styled(ScheduleItem)`
  background-color: var(--purple);
`

const ScheduleItemData = ({ item }) => {
  const { open } = openAnimation()

  if (item.type == TYPE.secret) {
    return (
      <ScheduleItemSecret onClick={open}> 
        <SecretWrapper>
          <span className='title'>{item.content.name}</span>
          <SVGSprite name="custom-security-safe" />
        </SecretWrapper>
      </ScheduleItemSecret>
    )
  }
  return (
    <ScheduleItem>
      <SecretWrapper>
        <div>
          <TitleWrapper>
            <span className='title'>{item.content.name}</span>
          </TitleWrapper>
          <TitleWrapper>
            <SVGSprite color="#ffffff" name="custom-location"/>&nbsp;<span className='title'>{item.content.location}</span>
          </TitleWrapper>
        </div>
        <TypeSVG type={item.type}/>
      </SecretWrapper>
    </ScheduleItem>
  )
}

export default ScheduleItemData