import PropTypes from 'prop-types';
import { useState } from 'react';
import * as Styles from './styles';

export default function GenericSelect({ name, domId, value }) {
  const [search, setSearch] = useState('');

  console.log(search);
  return (
    <label htmlFor={ domId }>
      {name}
      <Styles.GenericSelect
        type="text"
        id={ domId }
        value={ value }
        onChange={ (event) => setSearch(event.target.value) }
      >
        <option value="Test">Test</option>
        {/*         {data
          && data.map(
            (item) => <option key={ item.id } value={ item.name }>{item.name}</option>,
          )}
        ; */}
      </Styles.GenericSelect>
    </label>
  );
}

GenericSelect.propTypes = {
  name: PropTypes.string,
  domId: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
}.isRequired;
