import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button, Card, Grid } from "@mui/material";
import ImageUpload from "page-sections/admin-ecommerce/add-product/ImageUpload";
import QuillEditor from "page-sections/admin-ecommerce/add-product/QuillEditor";
import FlexBox from "components/flexbox/FlexBox";
import { H5 } from "components/Typography";
import AppTextField from "components/input-fields/AppTextField";
import IconWrapper from "components/IconWrapper";
import ShoppingBasket from "icons/ShoppingBasket";
import { useCallback, useState } from "react";

const CreateInventory = () => {
  const [files, setFiles] = useState([]);

  const handleChangeDescription = (value) => {
    console.log(value);
  };

  const handleDropFile = useCallback((acceptedFiles) => {
    const files = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setFiles(files);
  }, []);

  const handleRemoveImage = (file) => {
    const filteredFiles = files.filter((_file) => _file !== file);
    setFiles(filteredFiles);
  };
  // Items, producer, category, cost, price, quantity, description, Date,

  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FlexBox gap={0.5} alignItems="center">
            <IconWrapper>
              <ShoppingBasket
                sx={{
                  color: "primary.main",
                }}
              />
            </IconWrapper>
            <H5>Create New Inventory</H5>
          </FlexBox>
        </Grid>

        <Grid item md={12} xs={12}>
          <Card
            sx={{
              padding: 3,
            }}>
            <H5 mb={3}>Main Parameters</H5>

            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <AppTextField label="Item" fullWidth />
              </Grid>
              <Grid item sm={6} xs={12}>
                <AppTextField label="Producer" fullWidth />
              </Grid>
              <Grid item sm={6} xs={12}>
                <AppTextField label="Category" fullWidth />
              </Grid>
              <Grid item sm={6} xs={12}>
                <AppTextField label="Cost" fullWidth />
              </Grid>
              <Grid item sm={6} xs={12}>
                <AppTextField label="Quantity" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <AppTextField label="Price" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <AppTextField label="Meta Tags" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <QuillEditor value="" onChange={handleChangeDescription} />
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* <Grid item md={6} xs={12}>
          <Card
            sx={{
              padding: 3,
              height: "100%",
            }}>
            <H5 mb={3}>Prices and Warehouses</H5>

            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <AppTextField label="Cost" fullWidth />
              </Grid>
              <Grid item sm={6} xs={12}>
                <AppTextField label="Extra" fullWidth />
              </Grid>
              <Grid item sm={6} xs={12}>
                <AppTextField label="Price" fullWidth />
              </Grid>
              <Grid item sm={6} xs={12}>
                <AppTextField label="Availability" fullWidth />
              </Grid>

              <Grid item xs={12}>
                <QuillEditor value="" onChange={handleChangeDescription} />
              </Grid>
            </Grid>
          </Card>
        </Grid> */}

        <Grid item xs={12}>
          <ImageUpload
            handleRemoveImage={handleRemoveImage}
            onDrop={handleDropFile}
            files={files}
          />
        </Grid>

        <Grid item xs={12}>
          <FlexBox flexWrap="wrap" gap={2}>
            <Button variant="contained">Create New Product</Button>
            <Button variant="outlined">Cancel</Button>
          </FlexBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateInventory;
// Items, producer, category, cost, price, quantity, description, Date,
