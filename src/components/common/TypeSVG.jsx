import SVG from '@/assets/svg/sprite.svg'
import { TYPE } from '@/utils/const';

const TypeSVG = ({ type, color = "white" }) => {
  const logoName = () => {
    switch (type) {
      case TYPE.food:
        return 'custom-food';
      case TYPE.cofee:
        return 'custom-coffee-outline';
      case TYPE.sightseeing:
        return 'custom-eye';
      case TYPE.secret:
        return 'custom-security-safe';
    }
  }
  return (
    <svg style={{width: "24px", height: "24px"}} color={color} >
      <use xlinkHref={`${SVG}#${logoName()}`} />
    </svg>
  )
}

export default TypeSVG;
