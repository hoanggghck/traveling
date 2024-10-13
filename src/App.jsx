import PickDay from '@/components/PickDay'
import { Sumary } from '@/components/Sumary'
import { BackgroundWrapper, Container, Wrapper } from './style'
import { useState } from 'react'
import ScheduleContent from './components/schedule';

function App() {
  const [activeDay, setActiveDay] = useState(1);
  return (
    <BackgroundWrapper>
      <Container>
        <Wrapper>
          <Sumary />
          <PickDay
            activeDay={activeDay}
            setActiveDay={setActiveDay}
          />
          <ScheduleContent />
        </Wrapper>
      </Container>
    </BackgroundWrapper>
  )
}

export default App
