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
      background-color: transparent;
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

export const GenericButton = styled.button`
  border-radius: .5rem;
  border: none;
  font-size: 1.4rem;
  font-weight: 400;
  height: 3rem;
  width: ${({ large }) => (large ? '100%' : '16.6rem')};

  ${(props) => simpleButtonVariant(props.variant)}
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  flex: 1;
`;
