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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CreateInventory = (props) => {
  const {
    heading,
    isUploadCSV = false,
    handleFileChange = () => {},
    uploadCSV,
  } = props;
  const [files, setFiles] = useState([]);
  const [date, setDate] = useState(new Date());

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
        {!isUploadCSV && (
          <Grid item xs={12}>
            <FlexBox gap={0.5} alignItems="center">
              <IconWrapper>
                <ShoppingBasket
                  sx={{
                    color: "primary.main",
                  }}
                />
              </IconWrapper>
              <H5>{heading}</H5>
            </FlexBox>
          </Grid>
        )}

        {!isUploadCSV && (
          <>
            <Grid item md={12} xs={12}>
              <Card
                sx={{
                  padding: 3,
                }}>
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
                  <Grid item xs={6}>
                    <AppTextField label="Price" fullWidth />
                  </Grid>
                  <Grid item xs={6}>
                    {/* <AppTextField label="Date" fullWidth /> */}
                    <DatePicker
                      label="Date"
                      value={date}
                      onChange={(newValue) => setDate(newValue)}
                      renderInput={(params) => (
                        <AppTextField {...params} fullWidth />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <AppTextField
                      fullWidth
                      select
                      label="Status"
                      SelectProps={{
                        native: true,
                        IconComponent: KeyboardArrowDown,
                      }}>
                      <option value="done">Done</option>
                      <option value="inProcess">In Process</option>
                      {/* <option value="taka"></option> */}
                    </AppTextField>
                  </Grid>
                  <Grid item xs={12}>
                    <QuillEditor
                      value=""
                      placeholder={"Please share description about Inventory."}
                      onChange={handleChangeDescription}
                    />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <ImageUpload
                handleRemoveImage={handleRemoveImage}
                onDrop={handleDropFile}
                files={files}
              />
            </Grid>
          </>
        )}
        <Grid item xs={12}>
          <ImageUpload
            handleRemoveImage={handleRemoveImage}
            onDrop={handleDropFile}
            files={files}
            onChange={handleFileChange}
            isUploadCSV={isUploadCSV}
          />
        </Grid>
        {/* <input type="file" accept=".csv" onChange={handleFileChange} /> */}
        {!isUploadCSV && (
          <Grid item xs={12}>
            <FlexBox flexWrap="wrap" gap={2}>
              <Button variant="contained">Create New Product</Button>
              <Button variant="outlined">Cancel</Button>
            </FlexBox>
          </Grid>
        )}
        {isUploadCSV && (
          <Grid item xs={12}>
            <FlexBox flexWrap="wrap" gap={2}>
              <Button onClick={uploadCSV} variant="contained">
                Upload
              </Button>{" "}
            </FlexBox>{" "}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default CreateInventory;
