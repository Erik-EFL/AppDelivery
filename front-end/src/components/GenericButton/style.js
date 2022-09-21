import styled from 'styled-components';
import themes from '../themes/themes';

const simpleButtonVariant = (variant) => {
  switch (variant) {
  case 'primary':
    return `
      background-color:${themes.bgPrimary.green};
      color:${themes.text.whit}
      `;
  case 'secondary':
    return `
      background-color:${themes.bgPrimary.white};
      color:${themes.text.darkGreen};
      border: 2px solid ${themes.bgPrimary.darkGreen};
    `;
  default:
    return `
      background-color:${themes.bgPrimary.darkGreen};
      color:${themes.text.whit}
      `;
  }
};

export const GenericButton = styled.button`
  border-radius: 10px;
  border: none;
  font-size: 28px;
  font-weight: 400;
  height: 59px;
  width: 332px;

  ${(props) => simpleButtonVariant(props.variant)}
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  flex: 1;
`;
