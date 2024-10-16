import { TitleWrapper } from "@/style/sumary"
import SVGSprite from "./common/SVGSprite"

export const Sumary = () => {
  return (
    <>
      <TitleWrapper><span className="title">Tên chuyến đi:</span> Du lịch Đà Lạt 3 Ngày 2 đêm</TitleWrapper>
      <TitleWrapper><span className="title">Thời gian:</span> 10/11/2024 ~ 14/11/2024</TitleWrapper>
      <TitleWrapper>
        <span className="title">Phương tiện di chuyển:</span>
        <span className="content">Xe giường nằm <SVGSprite link="#" name="custom-link2" color="black"/></span>
      </TitleWrapper>
      <TitleWrapper>
        <span className="title">Nơi ở:</span>
        <span className="content">Khách sạn <SVGSprite link="#" name="custom-house" color="black"/></span>
      </TitleWrapper>
    </>
  )
}
