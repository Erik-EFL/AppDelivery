import styled from 'styled-components';
import theme from '../themes/themes';

const StatusButtonProps = (status) => {
  switch (status) {
  case 'ENTREGUE':
    return `
      background-color: ${theme.bgPrimary.lightBlue}
    `;
  case 'PREPARANDO':
    return `
      background-color: ${theme.bgPrimary.lemonGreen}
  `;
  default:
    return `
      background-color: ${theme.bgPrimary.gold}
  `;
  }
};

export const StatusButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 40px 20px;
  width: 290px;
  ${(props) => StatusButtonProps(props.status)}
`;

export const StatusButtonText = styled.p`
  font-size: 36px;
  font-weight: 700;
`;
