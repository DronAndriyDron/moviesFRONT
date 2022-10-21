import styled from "styled-components";

import { theme } from "core/styles";

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const AuthForm = styled.form`
  width: 400px;
  background: white;
  box-shadow: 0 4px 10px #0000001f;
  padding: 25px;
  border-radius: 10px;
  margin: 0 auto 30px;
`;

export const AuthTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin: 0 0 20px;
`;

export const AuthInputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const SubmitBtn = styled.button`
  font-family: Inter, sans-serif;
  width: 100%;
  height: 40px;
  background: ${theme.colors.blue};
  border: none;
  border-radius: 9999px;
  outline: none;
  appearance: none;
  position: relative;
  color: white;
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 1px;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover,
  &:focus {
    background: ${theme.colors.lightBlue};
  }
`;

export const AuthBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${theme.colors.text};
  font-weight: 600;
  transition: all 200ms ease;
  text-align: center;
  line-height: normal;

  & a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${theme.colors.blue};
    font-weight: 700;
    margin-left: 5px;
  }
  & a:hover {
    opacity: 0.8;
  }
`;
