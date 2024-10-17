import { SumaryWrapper, TitleWrapper } from "@/style/sumary"
import SVGSprite from "./common/SVGSprite"

export const Sumary = () => {
  return (
    <SumaryWrapper>
      <TitleWrapper><span className="title">Du lịch Đà Lạt 3 Ngày 2 đêm</span> </TitleWrapper>
      <TitleWrapper>
        <SVGSprite name="custom-clock-outline" color="black"/>&nbsp;
        <span className="content">10/11/2024 ~ 14/11/2024</span>
      </TitleWrapper>
      <TitleWrapper>
        <SVGSprite name="custom-car" color="black"/>&nbsp;
        <span className="content">Phương tiện di chuyển</span>
      </TitleWrapper>
      <TitleWrapper>
        <SVGSprite name="custom-house" color="black"/>&nbsp;
        <span className="content">Khách sạn </span>
      </TitleWrapper>
    </SumaryWrapper>
  )
}
