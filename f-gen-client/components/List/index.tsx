import { memo, useContext } from 'react';
import { FinalContext } from '../FinalContainer';

import {
  ListWrapper,
  ListLimiter,
  ListTitle,
  ListContainer,
  ListItem,
} from './styled';

function List(): JSX.Element {
  const { list } = useContext(FinalContext);

  return (
    <ListWrapper>
      <ListLimiter>
        <ListTitle>{list.title}</ListTitle>
        <ListContainer>
          {list.points.map((item) => {
            return <ListItem key={item}>{item}</ListItem>;
          })}
        </ListContainer>
      </ListLimiter>
    </ListWrapper>
  );
}

export default memo(List);
