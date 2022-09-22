import styled from 'styled-components';

const sizeHandleChange = (size) => {
  switch (size) {
  case 'sm':
    return `
        width: 371px;
      `;
  case 'md':
    return `
        width: 778px
      `;
  default:
    return `
        width: 325px;
      `;
  }
};

export const GenericInputText = styled.input`
  background: #FFFFFF;
  border: 1px solid #001813;
  border-radius: 5px;
  padding: 12px;

  ::placeholder {
    color: #828282;
  }

  ${({ size }) => sizeHandleChange(size)}
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  flex: 1;
`;
