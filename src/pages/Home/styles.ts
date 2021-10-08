import styled from 'styled-components';
import { shade } from 'polished';

export const Form = styled.form`
  display: flex;
  margin-top: 50px;
  margin-left: 4.5rem;

  input {
    width: 730px;
    height: 54px;
    padding-left: 20px;

    background: rgba(222, 193, 91, 0.51);
    border: solid 1px rgba(158, 158, 158, 0.25);
    border-radius: 10px;

    font-size: 18px;

    &::placeholder {
      color: #E5E5E5;
      font-size: 15px;
      font-weight: normal;
      font-style: italic;
      font-family: cursive, sans-serif;
    }

    &:hover {
      background: ${shade(0.04, 'rgba(222, 193, 91, 0.51)')};
      transition: background-color 0.3s;
    }
  }

  button {
  height: 54px;
  width: 75px;
  margin-left: 20px;

  background: #7ACE87;
  border: solid 1px #7ACE87;
  border-radius: 10px;

  font-weight: bold;
  font-size: 18px;

  &:hover {
    background: ${shade(0.1, '#7ACE87')};
    transition: background-color 0.3s;
  }
}
`;

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

export const PreviewResult = styled.div`
  a {
    display: flex;
    margin-top: 25px;
    height: 121px;
    max-width: 830px;
    margin-left: 4.5rem;

    flex: 1;

    border-radius: 15px;
    border: solid 1px rgba(158, 158, 158, 0.25);
    background: rgba(158, 158, 158, 0.25);
    color: #E5E5E5;
    text-decoration: none;

    img {
      height: 110px;
      width: 100px;
      margin: auto 7px;
      border-radius: 5px;
    }

    div {
      margin: 15px 15px;
    }

    h1 {
      font-size: 24px;
      font-weight: 600;
    }

    p{
      margin-top: 25px;
    }

    align-items: center;
    svg {
      margin-left: auto;
      margin-right: 25px;
      border: solid 1px;
      border-radius: 50%;
    }

    &:hover {
      transform: translateX(25px);
      transition: transform 0.5s;
    }
  }  
`;