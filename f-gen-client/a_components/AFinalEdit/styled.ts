import styled from '@emotion/styled';

export const EditWrapper = styled.div`
  display: grid;

  width: 100%;
  max-width: 1024px;

  margin: 0 auto 80px;
`;

export const EditTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  padding: 24px 0;
`;

export const ConfigItem = styled.div`
  display: grid;
  grid-template-columns: 20% auto;

  border: 1px solid #ccc;

  &.names {
    background: #ccc;
  }
`;

export const ConfigItemName = styled.div`
  text-align: right;

  padding: 16px;

  border-right: 1px solid #ccc;
`;

export const ConfigItemValue = styled.div`
  padding: 16px;

  input {
    width: 100%;
  }
`;

export const ConfigItemComponents = styled.div`
  padding: 16px;
`;

export const ComponentItem = styled.div`
  display: grid;

  grid-template-columns: auto 25%;

  border-bottom: 1px solid #ccc;

  &:last-child {
    border: none;
  }
`;

export const ComponentFields = styled.div`
  display: grid;
`;

export const ComponentField = styled.div`
  display: grid;

  padding: 8px;

  grid-template-columns: 20% auto;
`;

export const ComponentFieldName = styled.div``;

export const ComponentFieldValue = styled.div`
  textarea {
    width: 100%;
  }
`;

export const ComponentActions = styled.div`
  padding: 8px;
`;

export const ComponentAction = styled.div`
  padding: 8px;
`;
