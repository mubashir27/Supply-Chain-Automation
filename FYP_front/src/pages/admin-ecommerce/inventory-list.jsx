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
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);
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
              }}
              style={{ marginRight: 20 }}
              variant="contained"
              startIcon={<Add />}>
              Import Excell
            </Button>
            <Button
              onClick={() => {
                setOpenModal(true);
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
        <CreateInventory heading={"Create New Inventory"} />
      </AppModal>
      {/* end modal for adding and editing inventory list end */}
    </Box>
  );
};

export default InventroyList;
