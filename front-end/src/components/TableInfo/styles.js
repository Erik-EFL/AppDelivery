import styled from 'styled-components';
// import themes from '../themes/themes';

export const InfoTableLine = styled.table`
  border: 1px solid black;
  width: 90%;
  margin: 0 auto;
  border-collapse: collapse;
  width: 100%;
  
  th {
    font-size: ${themes.typography.textSize.md};
    text-align: center;
    padding: 8px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  flex: 1;
`;
