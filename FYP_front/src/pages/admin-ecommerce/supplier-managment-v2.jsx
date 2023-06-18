// this component is in loop now

import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Divider,
  Grid,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SupplierManagementPrice from "./supplier-managment-price";

const ImageWrapper = styled(Box)(() => ({
  width: 30,
  height: 30,
  overflow: "hidden",
  borderRadius: "50%",
}));

const SupplierManagementV2 = (props) => {
  {
    const { data } = props; // hooks

    return (
      <Card sx={{ margin: 2, p: 2 }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Grid container spacing={1}>
              <Grid item sm={1}>
                {/* <Typography>Hello</Typography> */}
                <ImageWrapper>
                  <img
                    src={data.avatar}
                    alt="User"
                    width="100%"
                    height="100%"
                  />
                </ImageWrapper>
              </Grid>
              <Grid item sm={2}>
                <Typography>{data.name}</Typography>
              </Grid>
              <Grid item sm={3}>
                <Typography>{data.email}</Typography>
              </Grid>
              <Grid item sm={2}>
                <Typography>{data.location}</Typography>
              </Grid>
              <Grid item sm={2}>
                <Typography>{data.phone}</Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Divider sx={{ my: 2 }} />
            <SupplierManagementPrice data={data?.price ?? []} />
          </AccordionDetails>
        </Accordion>
      </Card>
    );
  }
};

export default SupplierManagementV2;
