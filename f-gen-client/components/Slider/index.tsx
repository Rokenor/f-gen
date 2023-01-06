import Image from 'next/image';
import { memo, useContext } from 'react';
import { FinalContext } from '../FinalContainer';

import {
  SliderWrapper,
  SliderTitle,
  SliderContainer,
  SliderItem,
} from './styled';

function Slider(): JSX.Element {
  const { slider } = useContext(FinalContext);

  return (
    <SliderWrapper>
      <SliderTitle>{slider.title}</SliderTitle>
      <SliderContainer>
        {slider.gallery.map((item) => {
          return (
            <SliderItem key={item.id}>
              <Image
                src={item.image}
                alt={item.name}
                width={320}
                height={480}
              />
            </SliderItem>
          );
        })}
      </SliderContainer>
    </SliderWrapper>
  );
}

export default memo(Slider);
