import { useEffect, useState } from "react";

import FlowerDrop from "@/animation/FlowerDrop";
import PickDay from "@/components/PickDay";
import ScheduleContent from "@/components/schedule";
import Sumary from "@/components/sumary";
import { openAnimation } from "@/store/flower";
import { BackgroundWrapper, Container, Wrapper } from "@/style";

export const HomePage = () => {
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
      {isOpen &&
        <FlowerDrop />
      }
    </BackgroundWrapper>
  )
}

export default HomePage;
