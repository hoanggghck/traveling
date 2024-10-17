import { SumaryWrapper, TitleWrapper } from "@/style/sumary"
import { useState } from "react"
import SVGSprite from "@/components/common/SVGSprite";
import Modal from "@/components/modal";
import { ModalTransport } from "./modal/ModalTransport";
import { listSumary } from "@/data/sumary";

const Sumary = () => {
  const [active, setActive] = useState(false);
  return (
    <SumaryWrapper>
      <TitleWrapper><span className="title">{listSumary.title}</span> </TitleWrapper>
      <TitleWrapper>
        <SVGSprite name="custom-clock-outline" color="black"/>&nbsp;
        <span className="content">{listSumary.time}</span>
      </TitleWrapper>
      <TitleWrapper className="cursor-pointer" onClick={() => setActive(true)}>
        <SVGSprite name="custom-car" color="black"/>&nbsp;
        <span className="content">Phương tiện di chuyển</span>
      </TitleWrapper>
      <TitleWrapper>
        <SVGSprite name="custom-house" link={listSumary.hotel.maps} color="black"/>&nbsp;
        <span className="content">Khách sạn: {listSumary.hotel.name} </span>
      </TitleWrapper>
      <Modal active={active} maxwidth={400}>
        <ModalTransport close={() => setActive(false)} />
      </Modal>
    </SumaryWrapper>
  )
}
export default Sumary;