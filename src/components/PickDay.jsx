import { NavBar, PickdayWrapper } from '@/style/pickday'
import SVGSprite from './common/SVGSprite'
import { useState } from 'react'
import Modal from './modal';

const PickDay = ({ activeDay, setActiveDay }) => {
  const [active, setActive] = useState(false);
  const renderActiveDay = [
    {name: 'Day 1', id: 1},
    {name: 'Day 2', id: 2},
    {name: 'Day 3', id: 3}
  ]
  const renderNav = renderActiveDay.map((item) => {
    return (
      <li key={item.id} className={activeDay == item.id ? 'active' : ''} onClick={() => setActiveDay(item.id)}>
        {item.name}
      </li>
    )
  })
  return (
    <PickdayWrapper>
      <div className="wrap" onClick={() => setActive(true)}>
        <SVGSprite name="custom-document-text" color="#4f3842"/>&nbsp;
        Danh sách dự phòng
      </div>
      <NavBar>
        {renderNav}
      </NavBar>
      { active &&
        <Modal active={active} maxwidth={700}>
          <div>AAAAA</div>
          <button className="btn-custom" type="button" onClick={() => setActive(false)}>Đóng</button>
        </Modal>

      }
    </PickdayWrapper>
  )
}

export default PickDay
