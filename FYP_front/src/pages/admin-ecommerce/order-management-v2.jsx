import { Box, Card, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import AppTextField from "components/input-fields/AppTextField";
import GoogleMapReact from "google-map-react";
import QuillEditor from "page-sections/admin-ecommerce/add-product/QuillEditor";
import { useState } from "react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const OrderManagement2 = () => {
  const [date, setDate] = useState(new Date());

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const handleChangeDescription = (value) => {
    console.log(value);
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
                  <AppTextField label="Product Name" fullWidth />
                </Box>
                <Box py={1}>
                  <AppTextField label="Supplier Dropdown" fullWidth />
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
            <Grid sx={{ my: 1 }} container spacing={2}>
              <Grid item md={6} xs={12}>
                <AppTextField label="Address" fullWidth />
              </Grid>
              <Grid item md={6} xs={12}>
                <AppTextField label="Town" fullWidth />
              </Grid>
              <Grid item md={6} xs={12}>
                <AppTextField label="Mobile Number" fullWidth type="number" />
              </Grid>
              <Grid item md={6} xs={12}>
                <AppTextField label="Item Name" fullWidth type="number" />
              </Grid>
              <Grid item md={6} xs={12}>
                <AppTextField label="Category" fullWidth type="number" />
              </Grid>
              <Grid item md={6} xs={12}>
                <AppTextField label="Cost" fullWidth type="number" />
              </Grid>
              <Grid item md={6} xs={12}>
                <AppTextField label="Quantity" fullWidth type="number" />
              </Grid>
              <Grid item md={6} xs={12}>
                <DatePicker
                  label="Date"
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                  renderInput={(params) => (
                    <AppTextField {...params} fullWidth />
                  )}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <QuillEditor
                  value=""
                  placeholder={"Please share description about Inventory."}
                  onChange={handleChangeDescription}
                />
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
// Items, producer, category, cost, price, quantity, description, Date,
