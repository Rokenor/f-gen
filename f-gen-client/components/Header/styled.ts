import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 62px 48px;

  background: #f0f;

  text-align: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 62px;
  font-weight: bold;
  text-transform: uppercase;

  padding-bottom: 16px;
`;

export const HeaderSubtitle = styled.p`
  font-size: 42px;
`;

export const HeaderFinalDefault = styled.div`
  display: flex;
  width: 150px;
  height: 50px;

  justify-content: center;
  align-items: center;

  margin: 24px auto;

  background: #fff;

  border: 3px solid #000;
  border-radius: 9px;
`;

export const HeaderFinalNtrl = styled.div`
  display: flex;
  width: 120px;
  height: 120px;

  justify-content: center;
  align-items: center;

  margin: 24px auto;

  background: #0f0;

  border: 3px solid #000;
  border-radius: 60px;
`;
