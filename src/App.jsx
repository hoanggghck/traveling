import PickDay from '@/components/PickDay'
import { BackgroundWrapper, Container, GlobalStyle, Wrapper } from './style'
import { useEffect, useState } from 'react'
import ScheduleContent from '@/components/schedule';
import coverimage from '@/assets/images/cover.jpg';
import Sumary from './components/sumary';
import FlowerDrop from './animation/FlowerDrop';
import { openAnimation } from './store/flower';

function App() {
  const [activeDay, setActiveDay] = useState(1);
  const { isOpen, close } = openAnimation();
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        close();
      }, 5000);
    }
  }, [close, isOpen])
  return (
    <>
      <GlobalStyle />
      <BackgroundWrapper $coverImage={coverimage.toString()}>
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
        {isOpen && 
          <FlowerDrop />
        }
      </BackgroundWrapper>
    </>
  )
}

export default App
