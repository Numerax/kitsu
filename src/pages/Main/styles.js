import styled, { keyframes } from 'styled-components';
import loaderImage from '../../assets/loader.png'

const wr = "764px";

export const Title = styled.h1`
  font-size: 27px;
  color: #D42026;
  opacity: 100%;
  font-family: Roboto, sans-serif;
  @media (max-width: ${wr}) {
    font-size: 16px;
  }

  subtitle{
    font-size: 27px;
    color: #D42026;
    opacity: 100%;
    font-family: Roboto, sans-serif;
    font-weight: 300;
    @media (max-width: ${wr}) {
      font-size: 16px;
    }
  }

  cdt{
    float: right;
    font-family: Roboto, sans-serif;
    font-weight: 300;
    @media (max-width: ${wr}) {
      display: none;
    }
  }
`;

export const BarUnderTitle = styled.div`
  width: 54px;
  height: 4px;
  background-color: #D42026;
`;

export const InputSearch = styled.input`
  width: 400px;
  height: 31px;
  border: 1px solid #A5A5A5;
  border-radius: 5px;
  placeholder: 'Nome do Personagem';
  padding-left: 10px;
  padding-right: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-weight: 400; 
  padding-top: 34px;
  padding-bottom: 2px; 
  color: #D42026;
  font-size: 16px;
  font-family: Roboto, sans-serif;
`;

export const MainContainer = styled.div`
  display: flex;
  min-height: fit-content;
  height: 100%;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  /*height: 500px;*/
  margin-top: 34px;
`;

export const TableRow = styled.div`
  display: grid;
  grid-gap: 10px;  
  background: #FFFFFF;
  height: ${props => props.fixed ? "40px" : "112px"};
  grid-template-columns: 0.25fr 0.75fr;
  border-bottom: ${props => props.fixed ? "0px" : "3px"} solid #F6D2D4;
  @media (max-width: ${wr}) {
    grid-template-columns: 1fr;
  }
  :hover {
    background: #FAE8E9;
    cursor: pointer;
  }
`;

export const TableCellFixed = styled.div`
  background: #D42026;
  height: 40px;
  line-height: 40px;
  color: #FFFFFF;
  padding-left: 10px;
  font-size: 16px;
  font-family: Robot, sans-serif;
  font-weight: 400;
  @media (max-width: ${wr}){
    display: ${props => props.fct ? "none" : "block"};
  }
`;

export const TableCell = styled.div`
  color: #4E4E4E;
  font-size: 21px;
  font-family: Robot, sans-serif;
  font-weight: 400;
  align-self: center;
  @media (max-width: ${wr}) {
    display: ${props => props.mb ? "block" : "none"};
  }
`;

export const PersonCell = styled.div`
  display: flex;
`;

export const Avatar = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 58px;
  margin-left: 10px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  flex-shrink: 0;
`;

export const HeroName = styled.div`
  font-size: 21px;
  margin-left: 25px;
  font-weight: 400;
  font-family: Roboto, sans-serif;
  color: #4E4E4E;
  align-self: center;
`;

export const Description = styled.p`
  font-weight: 400; 
  color: #4E4E4E;
  font-size: 21px;
  font-family: Roboto, sans-serif;
  padding-left: 10px;
`;

export const Bullets = styled.div`
  width: 32px;
  height: 32px;
  padding-top: 4px;
  border-radius: 32px;
  font-family: Roboto, sans-serif;
  font-size: 21px;
  text-align: center;
  border: 1px solid #D42026;
  background: ${props => props.active ? "#D42026" : "#FFFFFF"};
  color: ${props => props.active ? "#FFFFFF" : "#D42026"};
  align-self: center;
  margin-left: 20px;
  cursor: pointer;
`;

export const PaginationBar = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const LeftArrow = styled.div`
  width: 0; 
  height: 0; 
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent; 
  border-right:10px solid #D20A0A;
  opacity: ${props => props.browse ? "1" : "0.35"}; 
  margin-left: 20px;
  align-self: center;
  cursor: pointer;
`;

export const TitleWindow = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 29px;
  font-weight: 900;
  color: #D42026;
`;

export const TextWindow = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #4E4E4E;
`;

export const RightArrow = styled.div`
  width: 0; 
  height: 0; 
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #D20A0A;
  opacity: ${props => props.browse ? "1" : "0.35"}; 
  margin-left: 20px;
  align-self: center;
  cursor: pointer;
`;


const rotateAnimation = keyframes`   
 from {
   transform: rotate(0deg); 
 } to {
   transform: rotate(360deg)
 }
`

export const LoaderContainer = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Loader = styled.div`
  background-image: url(${loaderImage});
  background-size: cover;
  background-position: center center;
  width: 200px;
  height: 200px;  
  opacity: 0.5;
  animation: ${rotateAnimation} 3.5s infinite linear;
`;