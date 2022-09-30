import styled from 'styled-components';
import themes from '../../components/themes/themes';

export const CheckoutContainer = styled.section`
  display: flex;
  flex-direction: column;

  header {
    width: 80%;
    margin: 0 auto;
    padding: 16px;
    font-size: ${themes.typography.textSize.lg};
  }

  .UpperTable {
    height: 46vh;
    position: relative;
    width: 80%;
    margin: 0 auto;
    background: ${themes.bgPrimary.white};
    border: 1px solid ${themes.bgPrimary.gray};
    box-shadow: 0px 4px 4px ${themes.bgPrimary.blackShadow};
  }
`;

export const CheckoutInputs = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  height: 20vh;
  position: relative;
  width: 80%;
  margin: 0 auto;
  background: ${themes.bgPrimary.white};
  border: 1px solid ${themes.bgPrimary.gray};
  box-shadow: 0px 4px 4px ${themes.bgPrimary.blackShadow};
`;

export const Box = styled.form`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 90%;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  padding: .5rem;
`;
