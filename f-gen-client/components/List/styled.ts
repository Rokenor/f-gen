import styled from '@emotion/styled';

export const ListWrapper = styled.div`
  display: flex;

  padding: 24px 48px;

  background: #99f;
`;

export const ListLimiter = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1024px;
  width: 100%;

  margin: 0 auto;
`;

export const ListTitle = styled.h2`
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;

  padding-bottom: 16px;

  text-align: center;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;

  align-items: center;

  font-size: 18px;
  line-height: 28px;

  &:before {
    content: '';
    width: 10px;
    height: 10px;
    background: #000;
    display: block;
    margin-right: 8px;
    border-radius: 5px;
  }
`;
