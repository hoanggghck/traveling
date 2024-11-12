import SVGSprite from '@/components/common/SVGSprite'
import TypeSVG from '@/components/common/TypeSVG'
import { ScheduleItem, SecretWrapper, TitleWrapper } from '@/style/schedule'
import { TYPE } from '@/utils/const'

const ScheduleItemData = ({ item }) => {

  const renderBgr = () => {
    switch (item.type) {
      case TYPE.food:
        return 'secondary';
      case TYPE.cofee:
        return 'darker';
      case TYPE.secret:
        return 'purple';
      default:
        return 'primary'
    }
  }

  const openNewTab = () => {
    if (item.content.url !== '#') {
      window.open(item.content.url);
    }
  }
  return (
    <ScheduleItem $bgr={renderBgr}>
      <SecretWrapper onClick={openNewTab}>
        <div>
          <TitleWrapper>
            <span className='title'>{item.content.name}</span>
          </TitleWrapper>
          { item.content.location &&
            <TitleWrapper>
              <SVGSprite color="#ffffff" name="custom-location"/>&nbsp;<span className='title'>{item.content.location}</span>
            </TitleWrapper>
          }
        </div>
        <TypeSVG type={item.type}/>
      </SecretWrapper>
    </ScheduleItem>
  )
}

export default ScheduleItemData
