import styled from 'styled-components';

export const Label = styled.div`
  max-width: 830px;
  flex: 0;
  margin-left: 70px;

  h2 {
    margin-top: 40px;
  }

  hr {
    max-width: 830px;
  }
`;

export const Info = styled.div`
  display: flex;
  margin-top: 40px;
  padding-left: 70px;
  
  img {
    width: 210px;
    height: 250px;
    border: 1px solid rgba(158, 158, 158, 0.251);
    border-radius: 15px;
  }

  div {
    margin: 15px 30px;
    width: 800vh;
    
    h2{
      font-size: 30px;

    }

    h3 {
      flex: 0;
      margin: 15px 0;
      font-size: 18px;
      font-weight: normal;
    }
  }
`;

export const Presentation = styled.p`
  margin: 50px 70px 0;
  font-size: 16px;
  text-align: justify;  
`;