/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  GenericButton,
  GenericInput,
  GenericSelect,
  Navbar,
  TableInfo,
  ScrollContainer } from '../../components';
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
    getUsers();
  }, []);

  useEffect(() => {
    fieldsVerify(registerData);
  }, [registerData]);

  return (
    <Styles.Container>
      <Navbar />
      <header style={ {} }>
        <h1>Cadastrar novo usuário</h1>
      </header>
      <Styles.CheckoutInputs>
        <Styles.Box direction="row">
          <GenericInput
            size="sm"
            domId="admin_manage__input-name"
            name="Nome"
            placeholder="Seu nome"
            value={ registerData.name }
            onChange={ (event) => setRegisterData(
              { ...registerData, name: event.target.value },
            ) }
          />
          <GenericInput
            size="sm"
            name="Email"
            domId="admin_manage__input-email"
            placeholder="email@trybeer.com.br"
            type="email"
            value={ registerData.email }
            onChange={ (event) => setRegisterData(
              { ...registerData, email: event.target.value },
            ) }
          />
          <GenericInput
            domId="admin_manage__input-password"
            name="Senha"
            placeholder="**********"
            size="sm"
            mg="10px"
            type="password"
            value={ registerData.password }
            onChange={ (event) => setRegisterData(
              { ...registerData, password: event.target.value },
            ) }
          />
          <GenericSelect
            // criar um select para o admin
            domId="admin_manage__select-role"
            size="sm"
            name="Tipo"
            value={ registerData.role }
            data={ types }
            defaultValue="customer"
            onChange={ (event) => setRegisterData(
              { ...registerData, role: event.target.value },
            ) }
          />

          <section
            style={ {
              marginTop: '1.7rem',
            } }
          >
            <GenericButton
              readLine="CADASTRAR"
              dataTestid="admin_manage__button-register"
              disabled={ buttonDisabled }
              onClick={ handleSubmit }
            />
          </section>
        </Styles.Box>
      </Styles.CheckoutInputs>
      {
        error && (
          <p data-testid="admin_manage__element-invalid-register">{error}</p>
        )
      }

      <section className="upperTable">
        <header><h1>Lista de usuários</h1></header>
        <TableContainer pageName="admin" userRole="adminitrator" />
        <ScrollContainer>
          {loading && (<span>carregando...</span>)}
          {users?.length > 0
            && users.map((item, index) => (
              <TableInfo
                userId={ index + 1 }
                key={ index }
                name={ item.name }
                userType={ item.role }
                email={ item.email }
                pageName="Cadastrar novo usuário"
              />
            ))}
        </ScrollContainer>
      </section>
    </Styles.Container>
  );
}
export default Admin;
