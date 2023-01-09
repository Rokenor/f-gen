import styled from '@emotion/styled';

export const ListWrapper = styled.div`
  display: grid;

  max-width: 1024px;
  width: 100%;

  margin: 0 auto;
`;

export const ListTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  padding: 24px 0;
`;

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: 10% auto 25% 10% 10%;

  border: 1px solid #ccc;

  padding: 16px;

  &.names {
    background: #ccc;
  }

  &.add {
    border: none;
  }
`;

export const ListItemId = styled.div``;

export const ListItemCId = styled.div``;

export const ListItemName = styled.div``;

export const ListItemSlug = styled.div``;

export const ListItemEdit = styled.div``;

export const ListItemDelete = styled.div``;
