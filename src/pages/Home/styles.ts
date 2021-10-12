import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 50px;

  input {
    width: 35rem;
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
      font-family: Recursive, sans-serif;
    }

    &:hover {
      background: ${shade(0.04, 'rgba(222, 193, 91, 0.51)')};
      transition: background-color 0.3s;
    }

    @media(max-width: 767px) {
      width: 18rem;
    }
  }

  button {
  height: 54px;
  width: 4.7rem;
  margin-left: 20px;

  background: #7ACE87;
  border: solid 1px #7ACE87;
  border-radius: 10px;

  font-weight: bold;
  font-size: 100%;

  &:hover {
    background: ${shade(0.1, '#7ACE87')};
    transition: background-color 0.3s;
  }
}
`;

export const Label = styled.div`
  width: 41rem;

  h2 {
    margin-top: 40px;
    font-weight: normal;
  }

  @media(max-width: 767px) {
    width: 24rem;
  }
`;

export const PreviewResult = styled.div`
  a {
    display: flex;
    margin-top: 25px;
    height: 8em;
    width: 41rem;

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
      padding: auto 0;
    }

    h1 {
      font-size: 24px;
      font-weight: 600;
      width: 100%;
    }

    p{
      margin-top: 5px;
      width: 100%;
    }

    align-items: center;
    svg {
      margin-left: auto;
      margin-right: 25px;
    }

    &:hover {
      transform: translateX(25px);
      transition: transform 0.5s;
    }

    @media(max-width: 767px) {
      width: 24rem;
      svg {
        visibility: hidden;
      }

      &:hover {
        transform: translateX(8px);
        transition: transform 0.8s;
      }
    }
  }
`;

export const EmptyField = styled(Label)`
  p {
    margin-top: 70px;

    font-family: Recursive, sans-serif;
    font-style: italic;
    font-size: 21px;
    text-align: center;
    img {
      height: 30px;
      width: auto;
      padding: 0;
    }
  }

  @media(max-width: 767px) {
    p {
      font-size: 18.5px;
      text-align: left;
    }
  }
`;