import styled from 'styled-components';
import themes from '../../components/themes/themes';

export const CheckoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;

  header {
    width: 80%;
    margin: 0 auto;
    padding: 16px;
    font-size: ${themes.typography.textSize.lg};
  }

  .upperTable {
    position: relative;
    height: 46vh;
    width: 80%;
    margin: 0 auto;
    border: 1px solid ${themes.bgPrimary.gray};
    box-shadow: 0px 4px 4px ${themes.bgPrimary.blackShadow};

    .button-container {
      position: absolute;
      right: 20px;
      bottom: 20px;
    }
  }
`;

export const CheckoutInputs = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  height: 150px;
  width: 80%;
  margin: 0 auto;
  background: ${themes.bgPrimary.white};
  border: 1px solid ${themes.bgPrimary.gray};
  box-shadow: 0px 4px 4px ${themes.bgPrimary.blackShadow};
`;

export const CartButtonContainer = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 3rem;
`;

export const Box = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  padding: .5rem;
`;
