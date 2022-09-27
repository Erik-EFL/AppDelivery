import styled from 'styled-components';
import themes from '../themes/themes';

export const ProductCard = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 1px solid  ${themes.bgPrimary.gray};
  box-shadow: 0 .2rem .2rem  ${themes.bgPrimary.blackShadow};
  width: 18rem;
  height: 24rem;

  span {
    position: absolute;
    box-sizing: border-box;
    top: .15rem;
    left: .15rem;
    background-color:  ${themes.bgPrimary.iceWhite};
    font-size: 1.4rem;
    padding: .4rem;
    z-index: 10;
    border-radius: .5rem;
  }
`;

export const BoxImage = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: 17.8rem;
  height: 17.8rem;
  align-items: center;

  img {
  width: 50%;
  }

  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
`;

export const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 6.1rem;
  background-color: ${themes.bgPrimary.lightGray};
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
`;
