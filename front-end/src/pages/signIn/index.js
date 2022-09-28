/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  GenericButton,
  GenericInput,
} from '../../components';
import { requestLogin } from '../../services/api';
import * as Styles from './styles';
import { userAuth } from '../../redux/actions/userActions';

function SignIn() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fieldsVerify = (data) => {
    const { email, password } = data;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password ? password.length >= Number('6') : '';
    const fields = [email, password];
    const validateFields = fields.every((field) => field !== '');
    const isValid = isPasswordValid && isEmailValid && validateFields;
    return isValid
      ? setButtonDisabled(false)
      : setButtonDisabled(true);
  };

  const handleSubmit = async () => {
    await requestLogin(loginData).then((response) => {
      const result = response.data;
      if (result.user) {
        localStorage.setItem('user', JSON.stringify(result.user));
        dispatch(userAuth(result.user));
        navigate('/customer/products');
      }
    }).catch((err) => {
      setError(err.response.data.message);
    });
  };

  useEffect(() => {
    fieldsVerify(loginData);
  }, [loginData.email, loginData.password, loginData]);

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
          value={ loginData.email }
          onChange={ (event) => setLoginData(
            { ...loginData, email: event.target.value },
          ) }
        />
        <GenericInput
          domId="common_login__input-password"
          name="Senha"
          placeholder="**********"
          size="sm"
          mg="10px"
          type="password"
          value={ loginData.password }
          onChange={ (event) => setLoginData(
            { ...loginData, password: event.target.value },
          ) }
        />
        <GenericButton
          readLine="Login"
          large
          dataTestid="common_login__button-login"
          onClick={ handleSubmit }
          disabled={ buttonDisabled }
        />
        <GenericButton
          readLine="Ainda não tenho conta"
          variant="secondary"
          large
          dataTestid="common_login__button-register"
          onClick={ () => navigate('/register') }
        />
      </Styles.FormContainer>
      {error && (
        <p data-testid="common_login__element-invalid-email">{ error }</p>
      )}
    </Styles.Container>
  );
}

export default SignIn;
