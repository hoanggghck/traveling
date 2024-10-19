import { listSumary } from "@/data/sumary"
import { toCommas } from "@/utils/helpers";
import styled from "styled-components"

const Wrapper = styled.div`
  .content {
    display: block;
  }
  button {
    width: 150px;
    background-color: var(--secondary);
    border: none;
    border-radius: 16px;
    color: white;
    cursor: pointer;
    display: block;
    margin: 8px auto;
    padding: 8px 16px;
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
      <button type="button" onClick={close}>Đóng</button>
    </Wrapper>
  )
}
