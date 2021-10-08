import styled from 'styled-components';

export const Label = styled.div`
  max-width: 830px;
  flex: 0;
  margin-left: 4.5rem;

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
  padding-left: 4.5rem;
  
  img {
    height: 200px;
    border: 1px solid rgba(158, 158, 158, 0.251);
    border-radius: 15px;
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
  margin: 50px 4.5rem 0;
  font-size: 16px;
  text-indent: 40px;
  text-align: justify;  
`;