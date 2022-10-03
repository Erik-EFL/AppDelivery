/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { GenericButton, GenericInput, GenericSelect, Navbar } from '../../components';
import TableContainer from '../../components/GenericTable/TableContainer';
import { getAllUsersByAdm, registerUserByAdm } from '../../services/api';
import * as Styles from './styles';

function Admin() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const types = ['customer', 'seller'];
  const NAME_MIN_LENGTH = 12;
  const PASSWORD_MIN_LENGTH = 6;
  const registerInitialState = {
    name: '',
    email: '',
    password: '',
    // role: '',
    role: types[0],
  };
  const [registerData, setRegisterData] = useState(registerInitialState);

  const fieldsVerify = (data) => {
    // const { name, email, password, role } = data;
    const { name, email, password } = data;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password ? password.length >= PASSWORD_MIN_LENGTH : '';
    const isNameValid = name ? name.length >= NAME_MIN_LENGTH : '';
    const fields = [email, password];
    const validateFields = fields.every((field) => field !== '');
    // const isValidRole = types.includes(role);
    const isValid = isPasswordValid
      && isEmailValid
      && validateFields
      && isNameValid;
    // && isValidRole;
    return isValid
      ? setButtonDisabled(false)
      : setButtonDisabled(true);
  };

  const user = JSON.parse(localStorage.getItem('user'));
  const headers = {
    'Content-Type': 'application/json',
    Authorization: user.token,
  };

  const getUsers = async () => {
    try {
      setLoading(true);
      const result = await getAllUsersByAdm(headers);
      setUsers(result.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await registerUserByAdm(registerData, headers).then((response) => {
      const result = response.data;
      if (result) {
        getUsers();
      }
    }).catch((err) => {
      setError(err.response.data.message);
    });
  };

  useEffect(() => {
    fieldsVerify(registerData);
  }, [registerData]);

  return (
    <Styles.Container>
      <Navbar />
      <h1>Cadastro</h1>
      <Styles.FormContainer>
        <GenericInput
          domId="admin_manage__input-name"
          name="Nome"
          placeholder="Seu nome"
          size="sm"
          // max={11}
          value={registerData.name}
          onChange={(event) => setRegisterData(
            { ...registerData, name: event.target.value },
          )}
        />
        <GenericInput
          domId="admin_manage__input-email"
          name="Email"
          placeholder="email@trybeer.com.br"
          size="sm"
          type="email"
          value={registerData.email}
          onChange={(event) => setRegisterData(
            { ...registerData, email: event.target.value },
          )}
        />
        <GenericInput
          domId="admin_manage__input-password"
          name="Senha"
          placeholder="**********"
          size="sm"
          mg="10px"
          type="password"
          value={registerData.password}
          onChange={(event) => setRegisterData(
            { ...registerData, password: event.target.value },
          )}
        />
        <GenericSelect
          // criar um select para o admin
          domId="admin_manage__select-role"
          name="Tipo"
          value={registerData.role}
          data={types}
          defaultValue="customer"
          onChange={(event) => setRegisterData(
            { ...registerData, role: event.target.value },
          )}
        />
        <GenericButton
          readLine="Cadastrar"
          large
          dataTestid="admin_manage__button-register"
          disabled={buttonDisabled}
          onClick={handleSubmit}
        />
      </Styles.FormContainer>
      {error && (
        <p data-testid="admin_manage__element-invalid-register">{error}</p>
      )}

      <TableContainer pageName="Admin" userRole="admin" />
      {loading && (<span>carregando...</span>)}
      {users.map((item, index) => <span key={index}>{item.name}</span>)}

    </Styles.Container>
  );
}
export default Admin;
