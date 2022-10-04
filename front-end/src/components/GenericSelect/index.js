import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import * as Styles from './styles';

export default function GenericSelect({
  name,
  domId,
  size,
  data,
  onChange,
  defaultValue }) {
  const { user } = useSelector((state) => state.userAuthReducer);
  return (
    <Styles.LabelGeneric htmlFor={ domId }>
      <p>{name}</p>
      <Styles.GenericSelect
        type="text"
        data-testid={ domId }
        size={ size }
        defaultValue={ defaultValue }
        onChange={ onChange }
      >
        {data
          && data.map(
            user.role === 'customer'
              ? (item) => <option key={ item.id } value={ item.name }>{item.name}</option>
              : (item, index) => <option key={ index } value={ item }>{item}</option>,
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
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  data: PropTypes.object,
}.isRequired;
