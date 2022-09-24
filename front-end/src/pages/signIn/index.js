import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GenericButton,
  GenericInput,
} from '../../components';
import * as Styles from './styles';

function SignIn() {
  const error = false;

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('login feito com sucesso');
  };

  return (
    <Styles.Container>
      <h1>&lt;Nome do seu app&gt;</h1>
      <Styles.FormContainer>
        <GenericInput
          domId="common_login__input-email"
          name="Login"
          placeholder="email@trybeer.com.br"
          size="sm"
          type="email"
        />
        <GenericInput
          domId="common_login__input-password"
          name="Senha"
          placeholder="**********"
          size="sm"
          mg="10px"
          type="password"
        />
        <GenericButton
          readLine="Login"
          large
          id="common_login__button-login"
          onClick={ handleSubmit }
        />
        <GenericButton
          readLine="Ainda não tenho conta"
          variant="secondary"
          large
          id="common_login__button-register"
          onClick={ () => navigate('/register') }
        />
      </Styles.FormContainer>
      {error && (
        <p id="common_login__element-invalid-email">Mensagem de erro</p>
      )}
    </Styles.Container>
  );
}

export default SignIn;
