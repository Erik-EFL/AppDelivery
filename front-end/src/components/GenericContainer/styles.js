import styled from 'styled-components';
import themes from '../themes/themes';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  header {
    width: 80%;
    margin: 0 auto;
    padding: 16px;
    font-size: ${themes.typography.textSize.lg};
  }

  main {
    padding: 8px;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 30px;
    height: 708.1px;
    background: ${themes.bgPrimary.white};
    border: 1px solid ${themes.bgPrimary.gray};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Box = styled.div`
  display: flex;
  height: 100%;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
`;
