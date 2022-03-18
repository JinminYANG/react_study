import styled from "styled-components";

export const ContainerClass = styled.div`
    padding: 0;
`;

export const SlideTitle = styled.h2`
    padding: 60px 0 50px 0;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
`;

export const nextArrow = styled.div`
    &:before {
        font-size:50px;
    }
`;

export const leftButton = styled.button`
      border: 0;
      position: absolute;
      top: 50%;
      z-index: 99;
      &:before{
        font-size: 40px;
        color: rgba(0,0,0,1);
      }
`;
