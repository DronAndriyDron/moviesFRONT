import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { IAuth } from "core/models";
import { Input, Label, ErrorText } from "ui/common";
import { useAppDispatch } from "core/hooks";
import { signUp } from "core/store/actionCreators/authActionCreator";

import {
  AuthBottom,
  AuthForm,
  AuthInputWrapper,
  AuthTitle,
  AuthWrapper,
  SubmitBtn,
} from "./Auth.styles";

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuth>();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = (data: IAuth) => {
    dispatch(signUp(data));
    navigate("/login");
  };

  return (
    <AuthWrapper>
      <AuthForm action="" method="post" onSubmit={handleSubmit(onSubmit)}>
        <AuthTitle>Sign up</AuthTitle>
        <AuthInputWrapper>
          <Label htmlFor="email">E-Mail</Label>
          <Input
            isError={!!errors.email}
            type="email"
            id="name"
            {...register("email", { required: true })}
          />
          {errors.email && <ErrorText>E-Mail is a required field.</ErrorText>}
        </AuthInputWrapper>
        <AuthInputWrapper>
          <Label htmlFor="password">Password</Label>
          <Input
            isError={!!errors.password}
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <ErrorText>Password is a required field.</ErrorText>
          )}
        </AuthInputWrapper>
        <SubmitBtn type="submit" name="submit">
          Sign up
        </SubmitBtn>
      </AuthForm>
      <AuthBottom>
        Already have an account?
        <Link to="/login">Go to login</Link>
      </AuthBottom>
    </AuthWrapper>
  );
};
