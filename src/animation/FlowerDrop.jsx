import { FlowerDropWrapper } from '@/style/flower'
import { useEffect } from 'react';
import flower1 from '@/assets/images/flowers/flower1.png';

const FlowerDrop = () => {
  const createFlower = () => {
    const flowerContainer = document.querySelector('.flower-container');
    const flower = document.createElement('div');
    flower.classList.add('flower');

    // Vị trí ngẫu nhiên cho mỗi bông hoa
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = Math.random() * 3 + 2 + 's'; // Tốc độ rơi ngẫu nhiên

    flowerContainer.appendChild(flower);

    // Xóa bông hoa sau khi rơi hết
    setTimeout(() => {
      flower.remove();
    }, 5000);
  };

  useEffect(() => {
    // Tạo hoa mỗi 300ms
    const interval = setInterval(createFlower, 300);
    return () => clearInterval(interval); // Xóa interval khi component unmount
  }, []);
  return (
    <FlowerDropWrapper className='flower-container' $imageSrc={flower1}>
    </FlowerDropWrapper>
  )
}

export default FlowerDrop