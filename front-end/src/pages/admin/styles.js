import styled from 'styled-components';
import themes from '../../components/themes/themes';

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  padding-bottom: 4rem;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  background-color: ${themes.bgPrimary.lightGray};
  box-shadow: 0px 4px 4px 0px #00000040;

  & > :last-child {
    margin-top: 10px;
  }
`;

export const UsersContainer = styled.section`
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
    height: 40vh;
    width: 80%;
    margin: 0 auto;
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
  justify-content: center;
  gap: 1rem;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  padding: .5rem;
`;
