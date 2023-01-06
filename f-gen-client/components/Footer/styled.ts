import styled from '@emotion/styled';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 24px 48px;

  background: #fff;
`;

export const FooterLimiter = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1024px;
  width: 100%;

  margin: 0 auto;
`;

export const FooterInfo = styled.div``;

export const FooterInfoParagraph = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: #666;

  padding-bottom: 16px;
`;

export const FooterCopy = styled.p`
  font-size: 16px;
  font-weight: bold;

  text-align: center;
`;
