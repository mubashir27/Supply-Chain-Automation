import { Button, Grid, ButtonBase, Stack, styled } from "@mui/material";
import AuthenticationLayout from "page-sections/authentication/AuthenticationLayout";
import AppTextField from "components/input-fields/AppTextField";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CurrentAPI,
  LoginAPI,
  RegisterAPI,
} from "services/AuthenticationFunctions";
import { RegistrationContext } from "context/RegistrationContext";
import useRegistration from "hooks/useRegistration";

const Register = () => {
  const navigate = useNavigate();
  useRegistration();
  const [registeredUser, setRegisteredUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { setRegister } = useContext(RegistrationContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisteredUser({
      ...registeredUser,
      [name]: value,
    });
  };

  const onSubmit = () => {
    const body = {
      email: registeredUser?.email,
      password: registeredUser?.password,
    };

    let data = {};

    RegisterAPI({
      ...body,
      firstName: registeredUser?.firstName,
      lastName: registeredUser?.lastName,
    })
      .then((res) => {
        data = res;
        console.log("DATAIS", res);
        LoginAPI(body).then((resp) => {
          console.log("res of login", resp);
          const { data } = resp;
          CurrentAPI(data?.accessToken).then((response) => {
            console.log("current body", response);
            setRegister(response);
            localStorage.setItem("user", response.data.email);
            navigate("/dashboard");
          });
        });
      })
      .catch((err) => console.log("BASE_URL1", err));
  };

  return (
    <AuthenticationLayout
      route="/"
      routeName="Login"
      title="Sign Up to Uko"
      description="Have an account?">
      <form>
        <Stack gap={2} mt={5}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <AppTextField
                onChange={handleChange}
                fullWidth
                label="First Name"
                name="firstName"
                value={registeredUser.firstName}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <AppTextField
                onChange={handleChange}
                fullWidth
                label="Last Name"
                name="lastName"
                value={registeredUser.lastName}
              />
            </Grid>

            <Grid item xs={12}>
              <AppTextField
                onChange={handleChange}
                fullWidth
                label="Email"
                name="email"
                value={registeredUser.email}
              />
            </Grid>

            <Grid item xs={12}>
              <AppTextField
                onChange={handleChange}
                fullWidth
                label="Password"
                name="password"
                value={registeredUser.password}
              />
            </Grid>

            <Grid item xs={12}>
              <Button onClick={() => onSubmit()} variant="contained" fullWidth>
                Sign Up
              </Button>

              {/* <Small fontSize={12} color="text.disabled" mt={2}>
                By signing up, I agree to UI Lib{" "}
                <NavLink
                  to="#"
                  style={{
                    fontWeight: 600,
                  }}>
                  Terms of Service & Privacy Policy
                </NavLink>
              </Small> */}
            </Grid>
          </Grid>
        </Stack>
      </form>
    </AuthenticationLayout>
  );
};

export default Register;
