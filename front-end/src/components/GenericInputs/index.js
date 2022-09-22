import PropTypes from 'prop-types';
import { useState } from 'react';
import * as Styles from './styles';

export default function InputGeneric({ name, domId, value, placeholder }) {
  const [search, setSearch] = useState('');

  console.log(search);
  return (
    <label htmlFor={ domId }>
      {name}
      <Styles.GenericInputText
        type="text"
        id={ domId }
        value={ value }
        placeholder={ placeholder }
        onChange={ (event) => setSearch(event.target.value) }
      />
    </label>
  );
}

InputGeneric.propTypes = {
  name: PropTypes.string,
  domId: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
}.isRequired;
