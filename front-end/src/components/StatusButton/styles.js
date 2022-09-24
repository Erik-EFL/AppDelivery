import styled from 'styled-components';
import theme from '../themes/themes';

const StatusButtonProps = (status) => {
  switch (status) {
  case 'ENTREGUE':
    return `
      background-color: ${theme.bgPrimary.lightBlue}
    `;
  case 'PREPARANDO':
    return `
      background-color: ${theme.bgPrimary.lemonGreen}
  `;
  default:
    return `
      background-color: ${theme.bgPrimary.gold}
  `;
  }
};

const simpleButtonSize = (hgt, wdt) => {
  if (!wdt && hgt) {
    return `
      height: ${hgt}rem;
      width: 14.5rem;
    `;
  }
  if (!hgt && wdt) {
    return `
      height: 7.5rem;
      width: ${wdt}rem;
    `;
  }
  if (wdt && hgt) {
    return `
      height: ${hgt}rem;
      width: ${wdt}rem;
    `;
  }
  if (!hgt && !wdt) {
    return `
      padding: 2rem 1rem;
      width: 14.5rem;
    `;
  }
};

const simpleButtonFontSize = (fs) => {
  switch (fs) {
  case 'sm':
    return `
        ${theme.typography.textSize.sm}
    `;
  case 'md':
    return `
        ${theme.typography.textSize.md}
      `;
  case 'lg':
    return `
        ${theme.typography.textSize.lg}
      `;
  case 'xl':
    return `
        ${theme.typography.textSize.xl}
      `;
  default:
    return `
      ${theme.typography.textSize.xl}
    `;
  }
};

export const StatusButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .5rem;
  ${(props) => simpleButtonSize(props.hgt, props.wdt)}
  ${(props) => StatusButtonProps(props.status)}
`;

export const StatusButtonText = styled.p`
  font-size: ${(props) => simpleButtonFontSize(props.fs)};
  font-weight: 700;
`;
