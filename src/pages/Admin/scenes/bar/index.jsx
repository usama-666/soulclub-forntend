import { Box } from "@mui/material";
import BarChart from "../../../../components/admin/BarChart";
import Header from "../../../../components/admin/Header";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
