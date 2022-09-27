import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  position: relative;
`;

export const MarketContainer = styled.div`
  align-self: center;
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem 2rem;
`;

export const CartButtonContainer = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 3rem;
`;
