import {
  Button,
  Grid,
  ButtonBase,
  Divider,
  Stack,
  styled,
} from "@mui/material";
import AuthenticationLayout from "page-sections/authentication/AuthenticationLayout";
import { Small } from "components/Typography";
import AppTextField from "components/input-fields/AppTextField";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Facebook from "icons/Facebook";
import GoogleIcon from "icons/GoogleIcon";
import Twitter from "icons/Twitter";
import { RegisterAPI } from "services/AuthenticationFunctions";
const StyledButton = styled(ButtonBase)(({ theme }) => ({
  width: "100%",
  padding: 12,
  marginBottom: 16,
  borderRadius: "8px",
  fontWeight: "500",
  border: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down(454)]: {
    width: "100%",
    marginBottom: 8,
  },
}));

const Register = () => {
  const [registeredUser, setRegisteredUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisteredUser({
      ...registeredUser,
      [name]: value,
    });
  };

  const onSubmit = () => {
    const body = {
      firstName: registeredUser?.firstName,
      lastName: registeredUser?.lastName,
      email: registeredUser?.email,
      password: registeredUser?.password,
    };

    let data = {};

    RegisterAPI(body)
      .then((res) => {
        data = res;
        console.log("DATAIS", res);
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
