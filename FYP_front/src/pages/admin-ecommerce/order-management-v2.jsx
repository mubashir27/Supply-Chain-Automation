import { Box, Card, Grid } from "@mui/material";
import AppTextField from "components/input-fields/AppTextField";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const OrderManagement2 = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item lg={12} md={7} sm={7} xs={12}>
          <Card
            sx={{
              padding: 3,
            }}>
            <Grid container spacing={3}>
              <Grid item xs={7}>
                <Box py={1}>
                  <AppTextField label="Name" fullWidth />
                </Box>
                <Box py={1}>
                  <AppTextField label="Opening Time" fullWidth />
                </Box>
                <Box py={1}>
                  <AppTextField label="Closing Time" fullWidth />
                </Box>
              </Grid>
              <Grid item xs={5}>
                <img
                  alt=""
                  src="/static/illustration/payment-page.svg"
                  style={{
                    padding: 10,
                    display: "block",
                    marginLeft: "auto",
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <AppTextField label="Address" fullWidth />
              </Grid>
              <Grid item md={6} xs={12}>
                <AppTextField label="Town" fullWidth />
              </Grid>
              <Grid item md={6} xs={12}>
                <AppTextField label="Mobile Number" fullWidth type="number" />
              </Grid>
              <Grid item md={6} xs={12}></Grid>
            </Grid>
          </Card>
          <Card style={{ height: "100vh", width: "100%" }} sx={{ my: 2 }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}>
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderManagement2;
