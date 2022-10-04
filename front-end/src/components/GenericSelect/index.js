import PropTypes from 'prop-types';
import React from 'react';
import * as Styles from './styles';

export default function GenericSelect({ name, domId, value, size, data, onChange }) {
  return (
    <Styles.LabelGeneric htmlFor={ domId }>
      <p>{name}</p>
      <Styles.GenericSelect
        type="text"
        data-testid={ domId }
        value={ value }
        size={ size }
        onChange={ onChange }
      >
        {data
          && data.map(
            (item) => <option key={ item.id } value={ item.name }>{item.name}</option>,
          )}
        ;
      </Styles.GenericSelect>
    </Styles.LabelGeneric>
  );
}

GenericSelect.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string,
  domId: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
