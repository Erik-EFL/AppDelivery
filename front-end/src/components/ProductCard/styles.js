import styled from 'styled-components';

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 359px;
  height: 479px;
`;

export const BoxImage = styled.div`
  display: flex;
  height: 100%;
  border: 1px solid black;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
`;

export const Box = styled.div`
  display: flex;
  height: 100%;
  border: 1px solid black;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
`;
