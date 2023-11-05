import { TabContext, TabList } from "@mui/lab";
import { Button, Tab } from "@mui/material";
import { Box, styled } from "@mui/system";
import AppModal from "components/AppModal";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import IconWrapper from "components/IconWrapper";
import { H5 } from "components/Typography";
import Add from "icons/Add";
import ShoppingBasket from "icons/ShoppingBasket";
import ProductListView from "page-sections/admin-ecommerce/product-list/list-view";
import React, { useState } from "react"; //  styled components
import CreateInventory from "./create-inventory";
import Papa from "papaparse";
import axios from "axios";
import { BASE_URL } from "services/AuthenticationFunctions";
const HeadingWrapper = styled(FlexBetween)(({ theme }) => ({
  gap: 8,
  flexWrap: "wrap",
  [theme.breakpoints.down(453)]: {
    "& .MuiButton-root": {
      order: 2,
    },
    "& .MuiTabs-root": {
      order: 3,
      width: "100%",
      "& .MuiTabs-flexContainer": {
        justifyContent: "space-between",
      },
    },
  },
}));

const InventroyList = () => {
  const [selectTab, setSelectTab] = useState("1");
  const [openModal, setOpenModal] = useState(false);
  const [isUploadCSV, setIsUploadCSV] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);
  const [csvData, setCsvData] = useState(null);

  const uploadCSV = () => {
    axios.post(`${BASE_URL}inventory/csv-data`, csvData);
    // handleCloseModal()
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("e.asda");
    if (file) {
      Papa.parse(file, {
        header: false,
        dynamicTyping: true, // Automatically convert numeric strings to numbers
        skipEmptyLines: true, // Skip empty lines
        complete: (result) => {
          if (result.errors.length > 0) {
            console.error("CSV Parsing Error:", result.errors);
          } else {
            const data = result.data;
            if (data.length > 0) {
              setCsvData(data);
            }
          }
        },
        error: (error) => {
          console.error("CSV Parsing Error:", error);
        },
      });
    }
  };

  console.log("CSV:", csvData);

  return (
    <Box pt={2} pb={4}>
      <TabContext value={selectTab}>
        <HeadingWrapper>
          <FlexBox gap={0.5} alignItems="center">
            <IconWrapper>
              <ShoppingBasket
                sx={{
                  color: "primary.main",
                }}
              />
            </IconWrapper>
            <H5>Inventory</H5>
          </FlexBox>
          <Box>
            <Button
              onClick={() => {
                setOpenModal(true);
                setIsUploadCSV(true);
              }}
              style={{ marginRight: 20 }}
              variant="contained"
              startIcon={<Add />}>
              Import Excell
            </Button>
            <Button
              onClick={() => {
                setOpenModal(true);
                setIsUploadCSV(false);
              }}
              variant="contained"
              startIcon={<Add />}>
              Add Product
            </Button>
          </Box>
        </HeadingWrapper>

        <ProductListView openModal={handleOpenModal} />
      </TabContext>
      {/* modal for adding and editing inventory list */}
      <AppModal open={openModal} handleClose={handleCloseModal}>
        <CreateInventory
          heading={"Create New Inventory"}
          isUploadCSV={isUploadCSV}
          handleFileChange={handleFileChange}
          uploadCSV={uploadCSV}
        />
      </AppModal>
      {/* end modal for adding and editing inventory list end */}
    </Box>
  );
};

export default InventroyList;
// supplier managment mai purana records bhi hona chahya hain. taka uss ko bata sakain ka ka ya supplier kesa hai
// supplier managment ka record order managment sa linked hai drop down jes mai sara spplier progress achi hogi top mai ajaya ga
// inventory local hai jitna order aya ga utna inventory sa subtract hojaya ga
