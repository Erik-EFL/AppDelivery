import styled from 'styled-components';
import themes from '../themes/themes';

export const InfoTableLine = styled.tr`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-collapse: collapse;
  width: 100%;
  background-color: ${themes.bgPrimary.lightGray};
  border-radius: 8px;


  th {
    font-size: ${themes.typography.textSize.lg};
    padding: 8px;
    margin: auto;
    border-collapse: collapse;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  flex: 1;
`;
