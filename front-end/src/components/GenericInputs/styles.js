import styled from 'styled-components';

const sizeHandleChange = (size) => {
  switch (size) {
  case 'sm':
    return `
        width: 325px;
      `;
  case 'md':
    return `
        width: 778px
      `;
  default:
    return `
        width: 345px;
      `;
  }
};

export const GenericInputText = styled.input`
  background: #FFFFFF;
  border: 1px solid #001813;
  border-radius: 5px;
  padding: 12px;

  ${({ size }) => sizeHandleChange(size)}
`;

export const LabelGeneric = styled.label`
  display: flex;
  flex-direction: column;

   p {
    padding: 5px;
    margin-left: 8px;
   }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  flex: 1;
`;
