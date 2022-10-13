import styled from 'styled-components';
import themes from '../../components/themes/themes';

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: .5rem;
  flex-direction: column;

  header {
    width: 80%;
    margin: 0 auto;
    padding: 16px;
    font-size: ${themes.typography.textSize.lg};
  }

  main {
    position: relative;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 4rem;
    height: 77vh;
    background: ${themes.bgPrimary.white};
    box-shadow: 0px 4px 4px ${themes.bgPrimary.blackShadow};
  }
`;

export const CartButtonContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  right: 10px;
  bottom: 10px;
  font-size: 3.2rem;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  padding: .5rem;
`;
