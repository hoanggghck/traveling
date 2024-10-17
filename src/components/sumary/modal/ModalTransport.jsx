import { listSumary } from "@/data/sumary"
import styled from "styled-components"

const Wrapper = styled.div`
  .content {
    display: block;
  }
  button {
    width: 150px;
    background-color: var(--primary);
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
      <p>Tiền taxi: {listSumary.transport.taxi}</p>
      <p>Tiền Limouse: {listSumary.transport.limouse}</p>
      <p>Tiền thuê xe máy: {listSumary.transport.bike}</p>
      <p>Tổng tiền: {sum}</p>
      <button type="button" onClick={close}>Đóng</button>
    </Wrapper>
  )
}