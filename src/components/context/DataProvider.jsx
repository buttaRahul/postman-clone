import { createContext, useState } from "react";

export const DataContext = createContext(null);
const DataProvider = ({ children }) => {



  const [formData, setFromData] = useState({
    url: "",
    type: "POST",
  });

  const [paramData, setParamData] = useState([]);
  const [headerData, setHeaderData] = useState([]);
  const [jsonText,setJsonText] = useState('');


  return (
    <div>
      <DataContext.Provider
        value={{
          formData,
          setFromData,
          jsonText,
          setJsonText,
          paramData,
          setParamData,
          headerData,
          setHeaderData,
        }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default DataProvider;
