import { memo, useContext } from 'react';
import { FinalContext } from '../FinalContainer';

import {
  InfoWrapper,
  InfoLimiter,
  InfoTitle,
  InfoDescription,
  InfoDescriptionParagraph,
} from './styled';

function Info(): JSX.Element {
  const { info } = useContext(FinalContext);

  return (
    <InfoWrapper>
      <InfoLimiter>
        <InfoTitle>{info.title}</InfoTitle>
        <InfoDescription>
          {info.description.map((paragraph) => {
            return (
              <InfoDescriptionParagraph key={paragraph}>
                {paragraph}
              </InfoDescriptionParagraph>
            );
          })}
        </InfoDescription>
      </InfoLimiter>
    </InfoWrapper>
  );
}

export default memo(Info);
