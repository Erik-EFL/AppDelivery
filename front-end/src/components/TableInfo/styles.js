import styled from 'styled-components';
// import themes from '../themes/themes';

export const InfoTableLine = styled.table`

`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  flex: 1;
`;
