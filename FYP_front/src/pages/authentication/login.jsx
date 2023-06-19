import { Button, ButtonBase, Divider, Stack, styled } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import AppTextField from "components/input-fields/AppTextField";
import { RegistrationContext } from "context/RegistrationContext";
import useRegistration from "hooks/useRegistration";
import AuthenticationLayout from "page-sections/authentication/AuthenticationLayout";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentAPI, LoginAPI } from "services/AuthenticationFunctions";

const Login = () => {
  const navigate = useNavigate();
  useRegistration();
  const { setRegister } = useContext(RegistrationContext);
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  const onSubmit = () => {
    LoginAPI(loginUser)
      .then((resp) => {
        console.log("res of login", resp);
        const { data } = resp;
        CurrentAPI(data?.accessToken).then((response) => {
          console.log("current body", response);
          setRegister(response);
          localStorage.setItem("user", response.data.email);
          navigate("/dashboard");
        });
      })
      .catch((err) => console.log("Login Error", err));
  };

  return (
    <AuthenticationLayout
      route="/register"
      description="New Here?"
      title="Sign in to Uko"
      routeName="Create an account">
      <form>
        <Stack gap={2} mt={5}>
          <AppTextField
            onChange={handleChange}
            fullWidth
            label="Email"
            name="email"
            value={loginUser.email}
          />
          <AppTextField
            onChange={handleChange}
            fullWidth
            label="Password"
            name="password"
            value={loginUser.password}
          />
          <FlexBetween>
            <FlexBox alignItems="center" gap={1}></FlexBox>

            <Button
              disableRipple
              sx={{
                color: "error.main",
                mb: 2,
              }}>
              Forget Password
            </Button>
          </FlexBetween>
          <Button variant="contained" onClick={() => onSubmit()}>
            Sign In
          </Button>
        </Stack>
      </form>
    </AuthenticationLayout>
  );
};

export default Login;
