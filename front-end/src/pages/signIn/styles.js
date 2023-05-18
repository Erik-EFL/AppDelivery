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
  background-color: rgb(240, 230, 215);
`;

export const ImgContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }

  h1 {
    font-size: 2rem;
    color: ${themes.typography.textColor.black};
    margin-top: -20px;
  }
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
