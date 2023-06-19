import { Button, ButtonBase, Divider, Stack, styled } from "@mui/material";
import AppCheckBox from "components/AppCheckBox";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import AppTextField from "components/input-fields/AppTextField";
import { Small } from "components/Typography";
import Facebook from "icons/Facebook";
import GoogleIcon from "icons/GoogleIcon";
import Twitter from "icons/Twitter";
import AuthenticationLayout from "page-sections/authentication/AuthenticationLayout";
import React from "react";
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

const Login = () => {
  return (
    <AuthenticationLayout
      route="/register"
      description="New Here?"
      title="Sign in to Uko"
      routeName="Create an account">
      <form>
        <Stack gap={2} mt={5}>
          <AppTextField fullWidth label="Email" />
          <AppTextField fullWidth label="Password" />
          <FlexBetween>
            <FlexBox alignItems="center" gap={1}>
              <AppCheckBox defaultChecked />
              <Small fontSize={12}>Remember2 me</Small>
            </FlexBox>

            <Button
              disableRipple
              sx={{
                color: "error.main",
                mb: 2,
              }}>
              Forget Password
            </Button>
          </FlexBetween>

          <Button variant="contained">Sign In</Button>
        </Stack>
      </form>
    </AuthenticationLayout>
  );
};

export default Login;
