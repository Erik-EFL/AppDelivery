import styled from 'styled-components';
import themes from '../themes/themes';

const sizeHandleChange = (size) => {
  switch (size) {
  case 'sm':
    return `
      width: 15vw;
    `;
  case 'md':
    return `
      width: 23vw;
        `;
  case 'lg':
    return `
      width: 33vw;
        `;
  default:
    return `
      width: 18vw;
    `;
  }
};

export const GenericInputText = styled.input`
  background: ${themes.bgPrimary.white};
  border: 1px solid ${themes.typography.textColor.black};
  border-radius: .25rem;
  padding: .6rem;
  ${({ size }) => sizeHandleChange(size)}
`;

export const LabelGeneric = styled.label`
  display: flex;
  flex-direction: column;

   p {
    padding: .25rem;
    margin-left: .4rem;
    font-size: 1.1rem;
   }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  flex: 1;
`;
