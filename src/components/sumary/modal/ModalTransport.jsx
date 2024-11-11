import { listSumary } from "@/data/sumary"
import { toCommas } from "@/utils/helpers";
import styled from "styled-components"

const Wrapper = styled.div`
  .content {
    display: block;
  }
`

export const ModalTransport = ({ close }) => {
  const sum = listSumary.transport.taxi + listSumary.transport.limouse + listSumary.transport.bike;
  return (
    <Wrapper>
      <p>Tiền taxi: {toCommas(listSumary.transport.taxi*1000)}</p>
      <p>Tiền Limouse: {toCommas(listSumary.transport.limouse*1000)}</p>
      <p>Tiền thuê xe máy: {toCommas(listSumary.transport.bike*1000)}</p>
      <hr />
      <p>Tổng tiền: {toCommas(sum*1000)}</p>
      <button className="btn-custom" type="button" onClick={close}>Đóng</button>
    </Wrapper>
  )
}
