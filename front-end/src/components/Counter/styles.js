import styled from 'styled-components';
import themes from '../themes/themes';

export const CountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const CountTitle = styled.p`
  font-size: 24px;
`;

export const CountButton = styled.button`
  display: flex;
  background-color: ${themes.bgPrimary.darkGreen};
  height: 51.25px;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  border-radius: ${({ max }) => (!max ? '10px 0 0 10px' : '0 10px 10px 0')};
`;

export const CountInput = styled.input`
  text-align: right;
  padding: 10px;
  font-size: 24px;
  width: 40px;
  outline: none;
  border: 1px solid black;
`;

export const Box = styled.div`
  display: flex;
  height: 100%;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
`;
