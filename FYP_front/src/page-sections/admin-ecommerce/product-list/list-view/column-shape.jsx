import { IconButton } from "@mui/material";
import AppModal from "components/AppModal";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import { H6 } from "components/Typography";
import Delete from "icons/Delete";
import Edit from "icons/Edit";
import CreateInventory from "pages/admin-ecommerce/create-inventory";
import { useState } from "react";
const ColumnShape = [
  {
    Header: "Items",
    accessor: "items",
    Cell: ({ row: { original } }) => {
      return (
        <FlexBox alignItems="center" gap={1}>
          <AppAvatar
            src={original.image}
            sx={{
              borderRadius: "10%",
              width: 50,
              height: 50,
            }}
          />
          <H6>{original.name}</H6>
        </FlexBox>
      );
    },
  },
  {
    Header: "Producer",
    accessor: "producer",
  },
  // {
  //   Header: "ID",
  //   accessor: "id"
  // },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Cost",
    accessor: "cost",
    Cell: ({ value }) => <H6 fontSize={12}>${value}</H6>,
  },
  {
    Header: "Quantity",
    accessor: "quantity",
    Cell: ({ value }) => <H6 fontSize={12}>{value}</H6>,
  },
  {
    Header: "Price",
    accessor: "price",
    Cell: ({ value }) => <H6 fontSize={12}>${value}</H6>,
  },
  //  {
  //   Header: "Priority",
  //   accessor: "priority"
  // },
  {
    Header: "Edit",
    accessor: "edit",
    Cell: ({ row }) => {
      const [openModal, setOpenModal] = useState(false);
      const handleCloseModal = () => setOpenModal(false);
      const style = {
        fontSize: 19,
        transition: "color 0.3s",
        color: row.isSelected ? "white" : "text.disabled",
      };
      return (
        <FlexBox justifyContent="center">
          <IconButton onClick={() => setOpenModal(true)}>
            <Edit sx={style} />
          </IconButton>
          <IconButton>
            <Delete sx={style} />
          </IconButton>
          <AppModal open={openModal} handleClose={handleCloseModal}>
            <CreateInventory heading="Edit Inventory" />
          </AppModal>
        </FlexBox>
      );
    },
  },
];
export default ColumnShape;
