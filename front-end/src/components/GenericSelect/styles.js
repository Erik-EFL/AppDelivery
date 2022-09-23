import styled from 'styled-components';

const sizeHandleChange = (size) => {
  switch (size) {
  case 'sm':
    return `
        width: 16.25rem;
      `;
  case 'md':
    return `
        width: 39rem;
      `;
  default:
    return `
        width: 18.55rem;
      `;
  }
};

export const GenericSelect = styled.select`
  background: #FFFFFF;
  border: 1px solid #001813;
  border-radius: 5px;
  padding: .55rem;
  color: #001813;

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
