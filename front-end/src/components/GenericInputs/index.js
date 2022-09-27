import PropTypes from 'prop-types';
import * as Styles from './styles';

export default function InputGeneric(
  { value, name, domId, placeholder, size, type, onChange },
) {
  return (
    <Styles.LabelGeneric htmlFor={ domId }>
      <p>{name}</p>
      <Styles.GenericInputText
        data-testid={ domId }
        placeholder={ placeholder }
        size={ size }
        type={ type || 'text' }
        value={ value }
        onChange={ onChange }
      />
    </Styles.LabelGeneric>
  );
}

InputGeneric.propTypes = {
  value: PropTypes.string,
  domId: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
