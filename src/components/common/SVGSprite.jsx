import SVG from '@/assets/svg/sprite.svg'

const SVGSprite = (props) => {
  return (
    <a className="btn-link" href="#" target="_blank">
      <svg style={{width: "22px", height: "22px"}} color={props.color} >
        <use xlinkHref={`${SVG}#${props.name}`} />
      </svg>
    </a>
  )
}

export default SVGSprite;