import styled from 'styled-components'

import SVGSprite from '@/components/common/SVGSprite'
import TypeSVG from '@/components/common/TypeSVG'
import { openAnimation } from '@/store/flower'
import { ScheduleItem, SecretWrapper, TitleWrapper } from '@/style/schedule'
import { TYPE } from '@/utils/const'
import bgr1 from '@/assets/images/flowers/background-1.png'
import { useState } from 'react'

const ScheduleItemSecret = styled(ScheduleItem)`
  background-color: var(--purple);
  position: relative;
  .background {
    position: absolute;
    background-image: url(${bgr1});
    background-size: cover;
    background-position: center center;
    bottom: -30px;
    right: 50px;
    width: 100px;
    height: 100px;
    animation: bloom 3s forwards;
  }
  @keyframes bloom {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    50% {
        transform: scale(1.5);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
`

const ScheduleItemData = ({ item }) => {
  const { open } = openAnimation();
  const [openFlower, setOpenFlower] = useState(false);
  if (item.type == TYPE.secret) {
    return (
      <ScheduleItemSecret onClick={open}> 
        <SecretWrapper>
          <span className='title'>{item.content.name}</span>
          <SVGSprite name="custom-security-safe" handler={() => setOpenFlower(true)}/>
        </SecretWrapper>
        {openFlower && <div className="background"></div>}
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