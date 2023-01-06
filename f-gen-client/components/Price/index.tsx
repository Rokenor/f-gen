import { memo, useContext } from 'react';
import { FinalContext } from '../FinalContainer';

import {
  PriceWrapper,
  PriceLimiter,
  PriceTitle,
  PriceContainer,
  PriceItem,
  PriceItemTitle,
  PriceItemCost,
  PriceItemOptions,
  PriceItemOption,
} from './styled';

function Price(): JSX.Element {
  const { price } = useContext(FinalContext);

  return (
    <PriceWrapper>
      <PriceLimiter>
        <PriceTitle>{price.title}</PriceTitle>
        <PriceContainer>
          {price.items.map((item) => {
            return (
              <PriceItem key={item.id}>
                <PriceItemTitle>{item.name}</PriceItemTitle>
                <PriceItemCost>
                  {item.currency} {item.price}
                </PriceItemCost>
                <PriceItemOptions>
                  {item.options.map((option) => {
                    return (
                      <PriceItemOption key={option}>{option}</PriceItemOption>
                    );
                  })}
                </PriceItemOptions>
              </PriceItem>
            );
          })}
        </PriceContainer>
      </PriceLimiter>
    </PriceWrapper>
  );
}

export default memo(Price);
