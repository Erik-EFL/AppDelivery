import styled from 'styled-components';
import themes from '../themes/themes';

const simpleButtonVariant = (variant) => {
  switch (variant) {
  case 'primary':
    return `
      background-color:${themes.bgPrimary.green};
      color:${themes.typography.textColor.iceWhite}
      `;
  case 'secondary':
    return `
      background-color: transparent;
      color:${themes.typography.textColor.darkGreen};
      border: 2px solid ${themes.bgPrimary.darkGreen};
    `;
  default:
    return `
      background-color:${themes.bgPrimary.darkGreen};
      color:${themes.typography.textColor.iceWhite}
      `;
  }
};

const simpleButtonSize = (hgt, wdt) => {
  if (!wdt && hgt) {
    return `
      height: ${hgt}rem;
      width: 16.6rem;
    `;
  }
  if (!hgt && wdt) {
    return `
      height: 3rem;
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
      height: 3rem;
      width: 16.6rem;
    `;
  }
};

const simpleButtonFontSize = (fs) => {
  switch (fs) {
  case 'sm':
    return `
        ${themes.typography.textSize.sm}
    `;
  case 'md':
    return `
        ${themes.typography.textSize.md}
      `;
  case 'lg':
    return `
        ${themes.typography.textSize.lg}
      `;
  case 'xl':
    return `
        ${themes.typography.textSize.xl}
      `;
  default:
    return `
      ${themes.typography.textSize.md}
    `;
  }
};

export const GenericButton = styled.button`
  border-radius: .5rem;
  border: none;
  font-size: ${(props) => simpleButtonFontSize(props.fs)};
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  ${(props) => simpleButtonSize(props.hgt, props.wdt)};
  ${(props) => simpleButtonVariant(props.variant)};
  width: ${({ large }) => (large ? '100%' : '')};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  flex: 1;
`;
