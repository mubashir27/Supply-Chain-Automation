import { Add } from "@mui/icons-material";
import { TabContext, TabList } from "@mui/lab";
import { Box, Button, Tab } from "@mui/material";
import SearchInput from "components/input-fields/SearchInput";
import AddCustomerModal from "page-sections/admin-ecommerce/AddCustomerModal";
import CustomerColumnShape from "page-sections/admin-ecommerce/columnShapes/CustomerColumnShape";
import CustomTable from "page-sections/admin-ecommerce/CustomTable";
import { customersFakeData } from "page-sections/admin-ecommerce/fakeData";
import TabLabel from "page-sections/admin-ecommerce/TabLabel";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { searchByName } from "utils/utils";
import { HeadingWrapper } from "./product-management";
import SupplierManagementV2 from "./supplier-managment-v2";

const CustomerManagement = () => {
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState("1");
  const [addCustomer, setAddCustomer] = useState(false); // search input

  const [searchValue, setSearchValue] = useState("");
  const [filteredItem, setFilteredItem] = useState(customersFakeData);
  useEffect(() => {
    const result = searchByName(customersFakeData, searchValue);
    setFilteredItem(result);
  }, [searchValue]); // handle tab item change

  const handleTabChange = (_, newValue) => {
    setCurrentTab(newValue);
  };

  const filteredData = filteredItem.filter(
    (item) =>
      (item.status === "Active" && currentTab === "2") ||
      (item.status === "Blocked" && currentTab === "3") ||
      currentTab === "1"
  );

  const SingleDataElement = () =>
    filteredData.map((m) => <SupplierManagementV2 data={m} />);

  return (
    <Box pt={2} pb={4}>
      <HeadingWrapper justifyContent="space-between" alignItems="center">
        <SearchInput
          bordered={false}
          placeholder="Find Supplier"
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <Button
          variant="contained"
          endIcon={<Add />}
          onClick={() => setAddCustomer(true)}>
          {t("Add Supplier")}
        </Button>

        <AddCustomerModal
          open={addCustomer}
          onClose={() => setAddCustomer(false)}
        />
      </HeadingWrapper>

      <TabContext value={currentTab}>
        <TabList
          onChange={handleTabChange}
          variant="scrollable"
          sx={{
            mb: 1,
          }}>
          {tabs.map(({ value, label, count }) => (
            <Tab
              key={value}
              disableRipple
              value={value}
              label={<TabLabel title={t(label)} total={count} />}
            />
          ))}
        </TabList>
        {/* <CustomTable data={filteredData} columnShape={CustomerColumnShape} /> */}
        {SingleDataElement()}
      </TabContext>
    </Box>
  );
};

const tabs = [
  {
    value: "1",
    label: "All",
    count: 4,
  },
  {
    value: "2",
    label: "Active",
    count: 2,
  },
  {
    value: "3",
    label: "Blocked",
    count: 2,
  },
];
export default CustomerManagement;
