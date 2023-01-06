import styled from '@emotion/styled';

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 24px 48px;

  background: #f00;
`;

export const PriceLimiter = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1024px;
  width: 100%;

  margin: 0 auto;
`;

export const PriceTitle = styled.h2`
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;

  padding-bottom: 16px;

  text-align: center;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PriceItem = styled.div`
  display: flex;
  flex-direction: column;

  width: 320px;

  border: 3px solid #c00;

  border-radius: 9px;

  padding: 24px;
  margin: 0 16px;

  text-align: center;

  background: #fff;

  cursor: pointer;

  &:hover {
    background: #1ff;
  }
`;

export const PriceItemTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;

  padding-bottom: 16px;
`;

export const PriceItemCost = styled.p`
  font-size: 42px;
  font-weight: bold;

  padding-bottom: 16px;
`;

export const PriceItemOptions = styled.ul``;

export const PriceItemOption = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;

  font-size: 16px;
  line-height: 20px;

  padding-bottom: 8px;

  &:before {
    content: '';
    min-width: 6px;
    height: 6px;
    background: #000;
    display: block;
    border-radius: 3px;
    margin-right: 8px;
  }
`;
