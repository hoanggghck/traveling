import SVG from '@/assets/svg/sprite.svg'

const SVGSprite = (props) => {
  if (props.link) {
    return (
      <a className="btn-link" href={props.link} target="_blank">
        <svg style={{width: "22px", height: "22px"}} color={props.color} >
          <use xlinkHref={`${SVG}#${props.name}`} />
        </svg>
      </a>
    )
  }
  return (
    <svg style={{width: "22px", height: "22px"}} color={props.color} >
      <use xlinkHref={`${SVG}#${props.name}`} />
    </svg>
  )
}

export default SVGSprite;