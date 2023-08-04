import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

const TabBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        marginTop: "20px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          sx: { backgroundColor: "#F26B3A", height: "4px", bottom: "2px" },
        }}
        textColor="none"
      >
        <Tab
          label="Params"
          sx={{
            textTransform: ["none", "!important"],
          }}
        />
        <Tab
          label="Headers"
          sx={{
            textTransform: ["none", "!important"],
          }}
        />
        <Tab
          label="Body"
          sx={{
            textTransform: ["none", "!important"],
          }}
        />
      </Tabs>

      <Box
        role="tabpanel"
        hidden={value !== 0}
        id={`simple-tabpanel-${0}`}
        aria-labelledby={`simple-tab-${0}`}
      >
        Params
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 1}
        id={`simple-tabpanel-${1}`}
        aria-labelledby={`simple-tab-${1}`}
      >
        Header
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 2}
        id={`simple-tabpanel-${2}`}
        aria-labelledby={`simple-tab-${2}`}
      >
        Body
      </Box>
    </Box>
  );
};

export default TabBar;
