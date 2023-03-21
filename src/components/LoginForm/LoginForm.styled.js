import styled from '@emotion/styled';

export const FormLogin = styled.form`
  margin: 20px;
  width: 760px;
  padding: 20px;
  list-style: none;
  align-items: center;
  background-color: #c9bfb9;
  box-shadow: 2px 3px 5px #3d3d3d;
  border-radius: 7px;
`;

export const LabelLogin = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 22px;
`;

export const InputLogin = styled.input`
  max-width: 400px;
  padding: 4px 8px;
  font-size: 22px;
  outline: transparent;
  margin-bottom: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 4px #4d4d4d;
`;

export const ButtonLogin = styled.button`
  margin-top: 20px;
  margin-left: 20px;
  padding: 6px;
  font-size: 18px;
  color: #ffffff;
  width: 200px;
  background: #553e3e;
  border: none;
  border-radius: 7px;
  box-shadow: 2px 3px 5px #3d3d3d;
  cursor: pointer;
  transition: all 100ms ease 0s;
  &:hover,
  &:focus {
    background: #7d5f49;
    box-shadow: 2px 7px 7px #7d5f49;
  }
`;
