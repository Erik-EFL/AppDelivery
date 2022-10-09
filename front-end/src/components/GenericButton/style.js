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
      height: ${hgt}vh;
      width: 16.6vw;
    `;
  }
  if (!hgt && wdt) {
    return `
      height: 3vh;
      width: ${wdt}vw;
    `;
  }
  if (wdt && hgt) {
    return `
      height: ${hgt}vh;
      width: ${wdt}vw;
    `;
  }
  if (!hgt && !wdt) {
    return `
      height: 3vh;
      width: 16.6vw;
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
  case 'xxl':
    return `
        ${themes.typography.textSize.xxl}
      `;
  case 'xxxl':
    return `
        ${themes.typography.textSize.xxxl}
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
  cursor: pointer;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  flex: 1;
`;
