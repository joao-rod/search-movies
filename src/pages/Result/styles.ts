import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.div`
  width: 45rem;

  h2 {
    margin-top: 40px;
    font-weight: normal;
  }

  @media(max-width: 767px) {
    width: 24rem;
  }
`;

export const Info = styled.div`
  display: flex;
  max-width: 44rem;
  margin-top: 40px;
  /* padding-left: 4.5rem; */

  img {
    height: 160px;
    width: 125px;
    border-radius: 5px;
  }

  div {
    margin: 15px 30px;
    
    h2{
      font-size: 30px;
    }

    h3 {
      margin: 15px 0;
      font-size: 18px;
      font-weight: normal;
    }
  }
`;

export const Presentation = styled.p`
  max-width: 45rem;
  margin: 2.5rem 4.5rem 0;
  font-size: 16px;
  text-indent: 40px;
  text-align: justify;  
`;