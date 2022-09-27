import styled from 'styled-components';
import themes from '../themes/themes';

export const CountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const CountTitle = styled.p`
  font-size: 1.2rem;
`;

export const CountButton = styled.button`
  display: flex;
  background-color: ${themes.bgPrimary.darkGreen};
  height: 2.6rem;
  padding: 0.5rem 1rem;
  align-items: center;
  justify-content: center;
  border-radius: ${({ maximum }) => (
    !maximum ? '0.5rem 0 0 0.5rem' : '0 0.5rem 0.5rem 0'
  )};
`;

export const CountInput = styled.input`
  text-align: right;
  padding: 0.5rem 0;
  padding-left: 1rem;
  font-size: 1.2rem;
  width: 2.5rem;
  outline: none;
  border: 1px solid ${themes.bgPrimary.black};
`;

export const Box = styled.div`
  display: flex;
  height: 100%;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
`;
