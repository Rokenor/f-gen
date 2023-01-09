import styled from '@emotion/styled';

export const AddWrapper = styled.div`
  display: grid;

  width: 100%;
  max-width: 1024px;

  margin: 0 auto 80px;
`;

export const AddTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  padding: 24px 0;
`;

export const AddOptions = styled.div`
  display: grid;
`;

export const AddItem = styled.div`
  display: grid;

  grid-template-columns: 20% 40% 40%;

  border: 1px solid #ccc;

  &.names {
    background: #ccc;
  }

  &.subnames {
    background: #eee;
  }
`;

export const AddName = styled.div`
  text-align: right;

  padding: 16px;
`;

export const AddComponentFields = styled.div``;

export const AddValue = styled.div`
  padding: 16px;

  input {
    width: 100%;
  }
`;

export const AddProperties = styled.div`
  padding: 8px;
`;

export const AddAction = styled.div``;

export const AddSaveButton = styled.div`
  display: flex;

  width: auto;
  max-width: 250px;

  margin: 24px 0 24px auto;
  padding: 16px 24px;

  background: #0f0;
  border-radius: 9px;

  color: #000;

  cursor: pointer;
`;
