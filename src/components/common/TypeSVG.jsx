import SVG from '@/assets/svg/sprite.svg'

const TypeSVG = ({ type, color = "white" }) => {
  const logoName = () => {
    switch (type) {
      case 'food':
        return 'custom-food';
      case 'coffe':
        return 'custom-coffee-outline';
      case 'travel':
        return 'custom-star-outline';
    }
  }
  return (
    <svg style={{width: "24px", height: "24px"}} color={color} >
      <use xlinkHref={`${SVG}#${logoName()}`} />
    </svg>
  )
}

export default TypeSVG;