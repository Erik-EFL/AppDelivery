import PropTypes from 'prop-types';
import React from 'react';
import * as Styles from './style';

function SimpleButton(
  { disabled,
    bold,
    large,
    onClick,
    dataTestid,
    children,
    readLine,
    variant,
    wdt,
    hgt,
    fs,
  },
) {
  return (
    <Styles.GenericButton
      data-testid={ dataTestid }
      wdt={ wdt }
      hgt={ hgt }
      fs={ fs }
      variant={ variant }
      onClick={ onClick }
      disabled={ disabled }
      large={ large }
      bold={ bold }
    >
      {readLine}
      {children}
    </Styles.GenericButton>
  );
}

SimpleButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  wdt: PropTypes.number,
  fs: PropTypes.number,
  dataTestid: PropTypes.string,
  hgt: PropTypes.number,
  readLine: PropTypes.string,
  variant: PropTypes.string,
  large: PropTypes.bool,
  bold: PropTypes.bool,
}.isRequired;

export default SimpleButton;
