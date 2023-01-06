import { memo, useContext } from 'react';
import { FinalContext } from '../FinalContainer';

import {
  FooterWrapper,
  FooterLimiter,
  FooterInfo,
  FooterInfoParagraph,
  FooterCopy,
} from './styled';

function Footer(): JSX.Element {
  const { footer } = useContext(FinalContext);

  return (
    <FooterWrapper>
      <FooterLimiter>
        <FooterInfo>
          {footer.info.map((paragraph) => {
            return (
              <FooterInfoParagraph key={paragraph}>
                {paragraph}
              </FooterInfoParagraph>
            );
          })}
        </FooterInfo>
        <FooterCopy>{footer.copyright}</FooterCopy>
      </FooterLimiter>
    </FooterWrapper>
  );
}

export default memo(Footer);
