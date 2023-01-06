import styled from '@emotion/styled';

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background: #9f9;

  padding: 24px 48px;
`;

export const SliderTitle = styled.h2`
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;

  padding-bottom: 16px;

  text-align: center;
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
`;

export const SliderItem = styled.div`
  display: flex;
  border: 3px solid #ccc;
`;
