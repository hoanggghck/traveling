import { listDay1 } from "@/data/listSchedule";
import { listSumary } from "@/data/sumary"
import { TYPE } from "@/utils/const";
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
const getData = () => {
  const sumTransport = listSumary.transport.taxi + listSumary.transport.limouse + listSumary.transport.bike;
  let sumFood = 0;
  let sumCoffe = 0;
  const sumHotel = listSumary.hotel.price;
  let sumTravel = 0;
  listDay1.forEach(item => {
    const price = item.content.price;
    if (item.type == TYPE.food) {
      sumFood += price;
    }
    if (item.type == TYPE.cofee) {
      sumCoffe += price;
    }
    if (item.type == TYPE.sightseeing) {
      sumTravel += price;
    }
  })
  return { sumTransport, sumFood, sumCoffe, sumHotel, sumTravel };
}
export const ModalTotal = ({ close }) => {
  const {sumTransport, sumFood, sumCoffe, sumHotel, sumTravel} = getData();
  return (
    <Wrapper>
      <p>Tiền di chuyển: {toCommas(sumTransport*1000)}</p>
      <p>Tiền thuê khách sạn: {toCommas(sumHotel*1000)}</p>
      <p>Tiền ăn: {toCommas(sumFood*1000)}</p>
      <p>Tiền cafe: {toCommas(sumCoffe*1000)}</p>
      <p>Tiền ngắm cảnh: {toCommas(sumTravel*1000)}</p>
      <hr />
      <p>Tổng tiền: {toCommas((sumTransport + sumFood + sumCoffe + sumHotel + sumTravel)*1000)}</p>
      <button className="btn-custom" type="button" onClick={close}>Đóng</button>
    </Wrapper>
  )
}
