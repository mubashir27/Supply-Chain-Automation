import ScrollBar from "simplebar-react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "@emotion/styled";

const StyledTableCell = styled(TableCell)(() => ({
  fontSize: 13,
  fontWeight: 600,
  padding: 10,
  "&:first-of-type": {
    paddingLeft: 0,
  },
  "&:last-of-type": {
    paddingRight: 0,
  },
}));

const SupplierManagementPrice = (props) => {
  const { data } = props;

  return (
    <Box sx={{ mt: 3 }}>
      <ScrollBar>
        <Table
          sx={{
            m: "auto",
            minWidth: 600,
            maxWidth: "95%",
          }}>
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ color: "gray" }}>
                Order Placed
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ color: "gray" }}>
                Order Deliverd
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ color: "gray" }}>
                Payment
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ color: "gray" }}>
                Delay
              </StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((m) => (
              <TableRow>
                <StyledTableCell>{m["order-placed"]}</StyledTableCell>
                <StyledTableCell align="center" sx={{ color: "gray" }}>
                  {m["order-deliverd"]}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ color: "gray" }}>
                  {m["payment"]}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ color: "gray" }}>
                  {m["delay"]}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollBar>
    </Box>
  );
};

export default SupplierManagementPrice;
