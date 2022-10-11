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

export const GenericSelect = styled.select`
  background: ${themes.bgPrimary.white};
  border: 1px solid ${themes.typography.textColor.black};
  border-radius: 5px;
  padding: .55rem;
  color: ${themes.typography.textColor.black};
  max-width: 300px;

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
