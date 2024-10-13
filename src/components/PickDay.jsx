import { NavBar, PickdayWrapper } from '@/style/pickday'

const PickDay = ({ activeDay, setActiveDay }) => {
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
      <NavBar>
        {renderNav}
      </NavBar>
    </PickdayWrapper>
  )
}

export default PickDay
