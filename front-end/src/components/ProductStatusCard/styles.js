import styled from 'styled-components';
import themes from '../themes/themes';

export const ProductStatusCardContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  background-color: ${themes.bgPrimary.lightGray};
  max-width: 470px;
  min-width: 470px;
  height: fit-content;
  padding-right: .5rem;
  gap: .5rem;
  border: 1px solid ${themes.bgPrimary.gray};
  box-shadow: 0 .2rem .2rem 0 ${themes.bgPrimary.blackShadow};
`;

export const OrderIdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  background-color: ${themes.bgPrimary.white};
  flex-direction: column;
  padding: ${({ userRole }) => (userRole === 'seller' ? '4.1rem 3rem' : '2.6rem 3rem')};
`;

export const OrderCardText = styled.p`
  font-size: ${({ fontSize }) => (fontSize === 'md' ? '1.2rem' : '1.8rem')};
  color: ${themes.typography.textColor.black};
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  text-align: center;
`;

export const OrderInfoContainer = styled.div`
  border-radius: .5rem;
  margin-left: 12px;
  background-color: ${themes.bgPrimary.iceWhite};
  padding: .5rem 1rem;
`;

export const AddressText = styled.p`
  font-size: 1.2rem;
  text-align: right;
`;

export const Box = styled.div`
  display: flex;
  height: 100%;
  color: ${themes.typography.textColor.black};
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  gap: ${({ gap }) => gap};
  padding: ${({ pd }) => pd}
`;
