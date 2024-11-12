import { BackupWrapper, NavBar, PickdayWrapper } from '@/style/pickday'
import SVGSprite from './common/SVGSprite'
import { useState } from 'react'
import Modal from './modal';
import { listBackup } from '@/data/listBackup';

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

  const openNewTab = (url) => {
    window.open(url);
  }
  return (
    <>
    <PickdayWrapper>
      <div className="wrap" onClick={() => setActive(true)}>
        <SVGSprite name="custom-document-text" color="#4f3842"/>&nbsp;
        Danh sách dự phòng
      </div>
      <NavBar>
        {renderNav}
      </NavBar>
    </PickdayWrapper>
    { active &&
      <Modal active={active} maxwidth={700}>
        <BackupWrapper>
          { listBackup.map((item, index) => {
            return (
              <div className='item' key={index} onClick={() => openNewTab(item.url)}>
                {item.name}
              </div>
            )
          })

          }
        </BackupWrapper>
        <button className="btn-custom" type="button" onClick={() => setActive(false)}>Đóng</button>
      </Modal>
    }
    </>
  )
}

export default PickDay
