import styled from 'styled-components';
import themes from '../themes/themes';

export const InfoTableLine = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
  width: 90%;
  background-color: ${themes.bgPrimary.lightGray};
  border-radius: 8px;

  th {
    font-size: ${themes.typography.textSize.lg};
    padding: 8px;
    margin: auto;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  flex: 1;
`;
