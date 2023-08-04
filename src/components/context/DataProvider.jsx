import { createContext, useState } from "react"



export const DataContext = createContext(null);
const DataProvider = ({children}) => {

    const [formData,setFromData] = useState({
        url:'',
        type:'POST',
    });

    // const [paramData,setParamData] = useState();

  return (
    <div>
        <DataContext.Provider value={{
            formData,
            setFromData
        }}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default DataProvider;