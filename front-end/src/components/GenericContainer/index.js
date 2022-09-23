import PropTypes from 'prop-types';
import React from 'react';
import InfoBar from './Bar';
import * as Styles from './styles';

function GenericContainer({ pageName }) {
  return (
    <Styles.Container>
      <header>{`${pageName}`}</header>
      <main>
        <InfoBar />
      </main>
    </Styles.Container>
  );
}

GenericContainer.propTypes = {
  pageName: PropTypes.string,
}.isRequired;

export default GenericContainer;
