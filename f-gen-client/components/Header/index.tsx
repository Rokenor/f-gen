import { memo, useContext } from 'react';
import { FinalContext } from '../FinalContainer';

import { FinalComponentPropertiesType } from '../../types/final';

import {
  HeaderWrapper,
  HeaderTitle,
  HeaderSubtitle,
  HeaderFinalDefault,
  HeaderFinalNtrl,
} from './styled';

function Header({
  properties,
}: {
  properties: FinalComponentPropertiesType;
}): JSX.Element {
  const { header } = useContext(FinalContext);

  console.log(properties);

  return (
    <HeaderWrapper>
      <HeaderTitle>{header.title}</HeaderTitle>
      <HeaderSubtitle>{header.subtitle}</HeaderSubtitle>
      {properties && (
        <>
          {properties.type === 'default' && (
            <HeaderFinalDefault>custom: default</HeaderFinalDefault>
          )}

          {properties.type === 'ntrl' && (
            <HeaderFinalNtrl>custom: ntrl</HeaderFinalNtrl>
          )}
        </>
      )}
    </HeaderWrapper>
  );
}

export default memo(Header);
