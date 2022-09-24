import React from 'react';
import {
  GenericButton,
  GenericInput,
} from '../../components';
import * as Styles from './styles';

function SignUp() {
  const error = false;

  const handleSubmit = () => {
    console.log('login feito com sucesso');
  };

  return (
    <Styles.Container>
      <h1>Cadastro</h1>
      <Styles.FormContainer>
        <GenericInput
          domId="common_register__input-name"
          name="Nome"
          placeholder="Seu nome"
          size="sm"
        />
        <GenericInput
          domId="common_register__input-email"
          name="Email"
          placeholder="email@trybeer.com.br"
          size="sm"
          type="email"
        />
        <GenericInput
          domId="common_register__input-password"
          name="Senha"
          placeholder="**********"
          size="sm"
          mg="10px"
          type="password"
        />
        <GenericButton
          readLine="Cadastrar"
          large
          id="common_register__button-register"
          onClick={ handleSubmit }
        />
      </Styles.FormContainer>
      {error && (
        <p id="common_register__element-invalid_register">Mensagem de erro</p>
      )}
    </Styles.Container>
  );
}

export default SignUp;
