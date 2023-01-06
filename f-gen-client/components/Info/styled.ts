import styled from '@emotion/styled';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background: #0f0;

  padding: 24px 48px;
`;

export const InfoLimiter = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1024px;
  width: 100%;

  margin: 0 auto;
`;

export const InfoTitle = styled.h2`
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;

  padding-bottom: 16px;

  text-align: center;
`;

export const InfoDescription = styled.div``;

export const InfoDescriptionParagraph = styled.p`
  font-size: 18px;
  line-height: 28px;

  padding-bottom: 24px;
`;
