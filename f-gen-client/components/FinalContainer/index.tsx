import { createContext } from 'react';
import { FinalDataType } from '../../types/final';
import { FinalContainerWrapper } from './styled';

export const FinalContext = createContext<FinalDataType>({});

function FinalContainer({
  children,
  finalData,
}: {
  children: React.ReactNode;
  finalData: FinalDataType;
}): JSX.Element {
  return (
    <FinalContext.Provider value={finalData}>
      <FinalContainerWrapper>{children}</FinalContainerWrapper>
    </FinalContext.Provider>
  );
}

export default FinalContainer;
