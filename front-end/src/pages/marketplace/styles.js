import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  gap: 5rem;

  position: relative;

`;

export const MarketContainer = styled.div`
  max-width: 900px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem 3rem;
  align-self: center;

`;

export const CartButtonContainer = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 3rem;
`;
