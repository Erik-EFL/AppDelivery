import styled from 'styled-components';

export const ProductCard = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 1px solid #B1C2BE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 359px;
  height: 479px;

  span {
    position: absolute;
    box-sizing: border-box;
    top: 3px;
    left: 3px;
    background-color: rgba(242, 255, 252, 0.75);
    font-size: 28px;
    padding: 8px;
    z-index: 10;
    border-radius: 10px;
  }
`;

export const BoxImage = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: 357px;
  height: 357px;
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
  height: 122px;
  background-color: #EAF1EF;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
`;
