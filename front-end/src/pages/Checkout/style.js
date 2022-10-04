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

  .upperTable {
    position: relative;
    height: 46vh;
    width: 80%;
    margin: 0 auto;
    border: 1px solid ${themes.bgPrimary.gray};
    box-shadow: 0px 4px 4px ${themes.bgPrimary.blackShadow};

    .button-container {
      position: absolute;
      right: 3rem;
      bottom: 3rem;
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

  height: 20vh;
  width: 80%;
  margin: 0 auto;
  background: ${themes.bgPrimary.white};
  border: 1px solid ${themes.bgPrimary.gray};
  box-shadow: 0px 4px 4px ${themes.bgPrimary.blackShadow};
`;

export const ScrollContainer = styled.div`
  margin: 0 auto;
  width: 98%;
  height: 65%;
  overflow-y: scroll;
`;

export const CartButtonContainer = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 3rem;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  padding: .5rem;
`;