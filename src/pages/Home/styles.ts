import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
`;

export const TitleSearch = styled.span`
  font-size: 32px;
  color: #CEBC7A;
  font-weight: bold;
`;

export const TitleMovies = styled(TitleSearch)`
  color: #7ACE87;
`;

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 730px;
  height: 54px;
  background: rgba(222, 193, 91, 0.51);
  border: solid 1px rgba(222, 193, 91, 0.51);
  border-radius: 10px;

  ::placeholder {
    color: #e5e5e5;
    font-family: cursive, sans-serif;
  }
`;

export const Button = styled.button`
  height: 54px;
  width: 75px;
  margin-left: 20px;

  background: #7ACE87;
  border: solid 1px #7ACE87;
  border-radius: 10px;

  color: #E5E5E5;
  font-weight: bold;
  font-size: 18px;
`;

export const Label = styled.h2`
  margin-top: 40px;
  margin-left: 70px;

  color: #E5E5E5;
`;

export const Line = styled.hr`
  width: 830px;
  margin-left: 70px;
`;

export const PreviewResult = styled.div`
  display: flex;

  margin-top: 25px;
  height: 121px;
  width: 830px;
  margin-left: 70px;

  border-radius: 15px;
  border: solid 1px rgba(158, 158, 158, 0.25);
  background: rgba(158, 158, 158, 0.25);
  color: #E5E5E5;

  img {
    height: 110px;
    width: 100px;
    margin: auto 7px;
    border-radius: 5px;
  }

  h1 {
    flex: 0;
    margin: 10px 15px;
    font-size: 25px;
  }

  p{
    margin: 30px 15px 0;
    font-size: 16px;
  }
  
`;