import { Edit } from "@mui/icons-material";
import { Card, IconButton, Typography } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import { H6, Small, Tiny } from "components/Typography";
import { Fragment, useState } from "react";
import AddCustomerModal from "../AddCustomerModal";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
const CustomerColumnShape = [
  {
    Header: "Supplier Name",
    accessor: "supplier",
    minWidth: 200,
    Cell: ({ row }) => {
      const { avatar, name, position } = row.original;
      return (
        <FlexBox alignItems="center">
          <AppAvatar src={avatar} />
          <FlexBox flexDirection="column" ml={1.5}>
            <H6 color="text.primary">{name}</H6>
          </FlexBox>
        </FlexBox>
      );
    },
  },
  {
    Header: "Location",
    accessor: "location",
    minWidth: 200,
  },
  {
    Header: "Date",
    accessor: "date",
    minWidth: 150,
  },
  {
    Header: "Phone",
    accessor: "phone",
    minWidth: 150,
  },
  {
    Header: "Status",
    accessor: "status",
    minWidth: 130,
    maxWidth: 130,
    Cell: ({ value }) => (
      <Small
        sx={{
          backgroundColor:
            value.toLowerCase() === "active" ? "success.main" : "error.main",
          color: "background.paper",
          borderRadius: 10,
          padding: ".2rem 1rem",
          textAlign: "center",
        }}>
        {value}
      </Small>
    ),
  },
  {
    Header: "Edit",
    accessor: "edit",
    maxWidth: 100,
    Cell: ({ row }) => {
      console.log("row", row);
      const [openModal, setOpenModal] = useState(false);
      // const [openAccrodian, setOpenAccrodian] = useState(false);

      return (
        <Fragment>
          <IconButton onClick={() => setOpenModal(true)}>
            <Edit
              sx={{
                fontSize: 18,
                color: "text.disabled",
              }}
            />
          </IconButton>
          {/* <IconButton onClick={() => setOpenAccrodian(!openAccrodian)}>
            <KeyboardArrowDownRoundedIcon
              sx={{
                my: 1,
                fontSize: 18,
                color: "text.disabled",
              }}
            />
          </IconButton> */}
          {/* want to pass the list of pricing data */}
          {/* {openAccrodian && (
            <Card>
              <Typography>hello</Typography>
            </Card>
          )} */}
          <AddCustomerModal
            edit
            open={openModal}
            data={row.original}
            onClose={() => setOpenModal(false)}
          />
        </Fragment>
      );
    },
  },
];
export default CustomerColumnShape;
