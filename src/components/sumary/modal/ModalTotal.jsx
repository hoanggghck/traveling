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

export const ModalTotal = ({ close }) => {
  const sum = listSumary.transport.taxi + listSumary.transport.limouse + listSumary.transport.bike;
  return (
    <Wrapper>
      <p>Tiền di chuyển: {sum}</p>
      <p>Tiền thuê khách sạn: {listSumary.transport.bike}</p>
      <p>Tiền ăn: 122</p>
      <p>Tiền cafe: 341</p>
      <p>Tiền du lịch: 1234</p>
      <hr />
      <p>Tổng tiền: ...</p>
      <button type="button" onClick={close}>Đóng</button>
    </Wrapper>
  )
}