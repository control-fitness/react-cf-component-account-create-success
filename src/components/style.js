import styled, { keyframes } from 'styled-components';

const foldUp = keyframes`
  from {  
    transform: rotateX(0deg);
  }
  to {  
    transform:rotateX(180deg);
    z-index: 0;
  }  
`;

const noti = keyframes`
  from {  
    opacity: 0;
  }
  to {  
    opacity: 1;
  }  
`;

const paperUp = keyframes`
  from {  
    height: 75px;
  } 60% {
    height: 130px;
  } 70% {
    height: 110px;
  } 80% {
    height: 130px;
  } 90% {
    height: 120px;
  } 100% {
    height: 130px;
  }  
`;

export const Body = styled.div`
  position: absolute;
  overflow: hidden;
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  padding: 100px 0;
`;

export const PrimaryText = styled.p`
  font-weight: bold;
  color: #232323;
  text-align: center;
`;

export const SecondaryText = styled.p`
  color: #969696;
`;

export const FooterText = styled.p`
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  text-align: center;
`;

export const AnimationContainer = styled.div`
  width: 130px;
  margin: 20px auto;
  text-align: center;
  position: relative;
`;

export const Envelope = styled.div`
  background: #ffffff;
  width: 100%;
  height: 80px;
  position: relative;
  box-shadow: 0 5px 0 #333333;
  margin: 85px 0 30px 0;
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border-bottom: 0px solid transparent;
    border-top: 80px solid transparent;
    border-right: 130px solid #00a1e6;
    z-index: 1;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0; 
    left: 0;
    border-bottom: 0px solid transparent;
    border-top: 80px solid transparent;
    border-left: 130px solid #008fcc;  
    z-index: 1;
  }
`;

export const Open = styled.div`
  border-right: 65px solid transparent;
  border-top: 40px solid #006b99;
  border-left: 65px solid transparent;  
  position: absolute;
  z-index: 9999;
  left: 0;
  top: 0;
  transform-origin: 0% 0%;
  animation: ${foldUp} 1s ease-in-out; 
  animation-fill-mode: forwards;
`;

export const Paper = styled.div`
  width: 110px;
  height: 75px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -55px;
  background: #f2f2f2;
  z-index: 0;
  animation: ${paperUp} 1.5s ease-in-out; 
  animation-fill-mode: forwards;
  animation-delay: 1s; /* W3C and Opera */ 
  &:before {
    content: "";
    position: absolute;
    width: 110px;
    height: 75px;
    background: rgba(177,177,177,0.1);
    bottom: 0;
    left: 0;
  }
`;

export const Noti = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 35px;
  height: 35px;
  border-radius: 35px;
  color: #fff;
  font: bold 20px/36px "Helvetica";
  text-align: center;
  background: #2ecc71;
  box-shadow: 0 4px 0 rgba(216,217,216, 0.7);
  opacity: 0;
  animation: ${noti} 0.5s ease-in-out; 
  animation-fill-mode: forwards;
  animation-delay: 2s; /* W3C and Opera */
`;

export const Ul = styled.ul`
  margin: 25px auto 0 auto;
  padding: 0;
  display: block;
  width: 80%;
`;

export const Li = styled.li`
  list-style: none;
  background: #d3d3d3;
  width: 100%;
  height: 5px;
  &:nth-child(1) {
    width: 50%;
  }
  &:nth-child(2) {
    margin-bottom: 20px;  
    width: 20%;
  }
`;
