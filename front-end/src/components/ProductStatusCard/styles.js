import styled from 'styled-components';
import themes from '../themes/themes';

export const ProductStatusCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${themes.bgPrimary.lightGray};
  width: fit-content;
  height: fit-content;
  padding-right: 10px;
  gap: 10px;
  border: 1px solid #B1C2BE;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

export const OrderIdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themes.bgPrimary.white};
  flex-direction: column;
  padding: ${({ userRole }) => (userRole === 'seller' ? '60px 50px' : '40px 50px')};
`;

export const OrderCardText = styled.p`
  font-size: ${({ fontSize }) => (fontSize === 'md' ? '24px' : '36px')};
  color: ${themes.typography.textColor.black};
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  text-align: center;
`;

export const OrderInfoContainer = styled.div`
  border-radius: 10px;
  background-color: #F2FFFCBF;
  padding: 10px 20px;
`;

export const AdressText = styled.p`
  font-size: 24px;
  text-align: right;
`;

export const Box = styled.div`
  display: flex;
  height: 100%;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  gap: ${({ gap }) => gap};
  padding: ${({ pd }) => pd}
`;
