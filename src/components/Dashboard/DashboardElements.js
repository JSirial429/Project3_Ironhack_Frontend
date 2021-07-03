import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DashboardContainer = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        rgba(1, 147, 86, 1) 0%,
        rgba(10, 201, 122, 1) 100%
    );
`;

export const TableWrap = styled.div`
height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`

export const Icon = styled(Link)`
margin-left: 32px;
  margin-top: 40px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const DashH1 = styled.div`
    color: #fff;
    font-size: 48px;
    text-align: center;


  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const DashP = styled.div`
    margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
        
`;

export const TableContent = styled.div`
    height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`

export const Table = styled.div`
    background: #010101;
    max-width: 1050px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
    padding: 32px 32px;
}
`
export const ReactBootStrap = styled.div`
  
`
