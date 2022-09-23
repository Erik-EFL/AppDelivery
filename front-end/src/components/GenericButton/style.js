import styled from 'styled-components';
import themes from '../themes/themes';

const simpleButtonVariant = (variant) => {
  switch (variant) {
  case 'primary':
    return `
      background-color:${themes.bgPrimary.green};
      color:${themes.typography.textColor.white}
      `;
  case 'secondary':
    return `
      background-color:${themes.bgPrimary.white};
      color:${themes.typography.textColor.darkGreen};
      border: 2px solid ${themes.bgPrimary.darkGreen};
    `;
  default:
    return `
      background-color:${themes.bgPrimary.darkGreen};
      color:${themes.typography.textColor.white}
      `;
  }
};

const simpleButtonSizes = (bs, lt) => `${bs}px ${lt}px`;
const simpleButtonFontSizes = (sz) => `font-size: ${sz}px`;

export const GenericButton = styled.button`
  border-radius: 10px;
  border: none;
  font-weight: 400;
  padding: ${(props) => simpleButtonSizes(props.bs, props.lt)};
  ${(props) => simpleButtonFontSizes(props.sz)};
  ${(props) => simpleButtonVariant(props.variant)}
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  flex: 1;
`;
