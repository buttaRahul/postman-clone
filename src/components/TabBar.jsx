import { Box, Tab, Tabs } from "@mui/material";
import { useContext, useState } from "react";
import CreateTable from "./CreateTable";
import CreateJsonText from "./CreateJsonText";
import { DataContext } from "./context/DataProvider";

const TabBar = () => {
  const [value, setValue] = useState(0);


  const {paramData,setParamData,headerData,setHeaderData} = useContext(DataContext);

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
        <CreateTable text={"Query Params"} data={paramData} setData = {setParamData} />
        
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 1}
        id={`simple-tabpanel-${1}`}
        aria-labelledby={`simple-tab-${1}`}
      >
        <CreateTable text={"Headers"} data={headerData} setData={setHeaderData}/>
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 2}
        id={`simple-tabpanel-${2}`}
        aria-labelledby={`simple-tab-${2}`}
      >
        <CreateJsonText/>
      </Box>
    </Box>
  );
};

export default TabBar;
