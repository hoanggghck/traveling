import PickDay from '@/components/PickDay'
import { Sumary } from '@/components/Sumary'
import { BackgroundWrapper, Container, GlobalStyle, Wrapper } from './style'
import { useState } from 'react'
import ScheduleContent from './components/schedule';
import coverImage from './assets/images/cover.jpg';

function App() {
  const [activeDay, setActiveDay] = useState(1);
  return (
    <>
      <GlobalStyle />
      <BackgroundWrapper coverImage={coverImage}>
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
    </>
  )
}

export default App
