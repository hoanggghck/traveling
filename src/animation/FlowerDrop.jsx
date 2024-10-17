import { FlowerDropWrapper } from '@/style/flower'
import { useEffect } from 'react';

const FlowerDrop = () => {
  const createFlower = () => {
    const flowerContainer = document.querySelector('.flower-container');
    const flower = document.createElement('div');
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    flower.classList.add('flower');
    flower.classList.add(`flower${randomNumber}`);

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
    <FlowerDropWrapper className='flower-container' />
  )
}

export default FlowerDrop