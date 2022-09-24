import styled from 'styled-components';
import themes from '../../components/themes/themes';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100vw;
  height: 100vh;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  background-color: ${themes.bgPrimary.lightGray};
  box-shadow: 0px 4px 4px 0px #00000040;
`;
