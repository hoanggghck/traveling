import { SumaryWrapper, TitleWrapper } from "@/style/sumary"
import { useState } from "react"
import SVGSprite from "@/components/common/SVGSprite";
import Modal from "@/components/modal";
import { ModalTransport } from "./modal/ModalTransport";
import { ModalTotal } from "./modal/ModalTotal";
import { listSumary } from "@/data/sumary";

const Sumary = () => {
  const [active, setActive] = useState(false);
  const [activeTotal, setActiveTotal] = useState(false);
  return (
    <>
      <SumaryWrapper>
        <div>
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
        </div>
        <div>
          <SVGSprite name="custom-document" color="black" handler={() => setActiveTotal(true)}/>
        </div>
      </SumaryWrapper>
      <Modal active={active} maxwidth={400}>
        <ModalTransport close={() => setActive(false)} />
      </Modal>
      <Modal active={activeTotal} maxwidth={400}>
        <ModalTotal close={() => setActiveTotal(false)} />
      </Modal>
    </>
  )
}
export default Sumary;