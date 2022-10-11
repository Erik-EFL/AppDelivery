import styled from 'styled-components';
import themes from '../themes/themes';

export const InfoTableLine = styled.tr`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  border-collapse: collapse;
  background-color: ${themes.bgPrimary.lightGray};
  border-radius: 8px;
  width: 100%;
  max-height: 30px;

  th {
    font-size: ${themes.typography.textSize.lg};
    padding: 8px;
    display: flex;
    align-items: center;
  }

  .id {
    justify-content: center;
    width: 2.8rem;
    background-color: ${themes.bgPrimary.green};
    border-radius: 8px 0 0 8px;
  }

  /* Checkout page */

  .checkoutDescription {
    width: 50rem;
    text-align: left;
  }

  .checkoutQuantity {
    justify-content: center;
    width: 15rem;
    background-color: ${themes.bgPrimary.darkGreen};
    color: ${themes.typography.textColor.white};
  }

  .checkoutUnitPrice {
    justify-content: center;
    width: 15rem;
    background-color: ${themes.bgPrimary.violet};
    color: ${themes.typography.textColor.white};
  }

  .checkoutSubTotal {
    justify-content: center;
    width: 15rem;
    padding: 0;
    background-color: ${themes.bgPrimary.blue};
    color: ${themes.typography.textColor.white};
  }

  .checkoutRemove {
    justify-content: center;
    width: 15rem;
    padding: 0;
    background-color: ${themes.bgPrimary.green};
    color: ${themes.typography.textColor.white};
    border-radius: 0 8px 8px 0;
  }

  .checkoutRemove button {
    justify-content: center;
    width: 18rem;
    padding: 0;
    background-color: ${themes.bgPrimary.green};
    color: ${themes.typography.textColor.white};
    border-radius: 0 8px 8px 0;
  }

  /* Order details page */

  .detailsDescription {
    width: 50rem;
    text-align: left;
  }

  .detailsQuantity {
    justify-content: center;
    width: 20rem;
    background-color: ${themes.bgPrimary.darkGreen};
    color: ${themes.typography.textColor.white};
  }

  .detailsPrice {
    justify-content: center;
    width: 20rem;
    background-color: ${themes.bgPrimary.violet};
    color: ${themes.typography.textColor.white};
  }

  .detailsTotalPrice {
    justify-content: center;
    width: 20rem;
    padding: 0;
    background-color: ${themes.bgPrimary.blue};
    color: ${themes.typography.textColor.white};
    border-radius: 0 8px 8px 0;
  }

  /* ADM Page */

  .admDescription {
    width: 30rem;
    text-align: left;
  }

  .admEmail {
    width: 30rem;
    background-color: ${themes.bgPrimary.darkGreen};
    color: ${themes.typography.textColor.white};
  }

  .admType {
    justify-content: center;
    width: 30rem;
    background-color: ${themes.bgPrimary.violet};
    color: ${themes.typography.textColor.white};
  }

  .admDelete {
    justify-content: center;
    padding: 0;
    background-color: ${themes.bgPrimary.blue};
    color: ${themes.typography.textColor.white};
    border-radius: 0 8px 8px 0;
  }

  .admDelete button {
    justify-content: center;
    width: 15rem;
    background-color: ${themes.bgPrimary.blue};
    color: ${themes.typography.textColor.white};
    border-radius: 0 8px 8px 0;
    padding: 8px;
    font-size: ${themes.typography.textSize.lg};
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  flex: 1;
`;
