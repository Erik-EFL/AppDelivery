import PropTypes from 'prop-types';
import React from 'react';
import * as Styles from './style';

function SimpleButton({
  disabled,
  onClick,
  dataTestid,
  readLine,
  variant,
  wdt,
  hgt,
  fs,
}) {
  return (
    <Styles.GenericButton
      data-testid={dataTestid}
      wdt={wdt}
      hgt={hgt}
      fs={fs}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {readLine}
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
}.isRequired;

export default SimpleButton;
