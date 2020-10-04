import React, { createContext, useState } from 'react'

export const TradeContext = createContext();

export const TradeDetailsProvider = (props) => {

    const [rowData, setRowData] = useState([]);
    const [timeStamp, setTimeStamp] = useState();

    return (
        <TradeContext.Provider value={{rowDataParam:[rowData, setRowData], timeStampParam:[timeStamp, setTimeStamp]}}>
            {props.children}
        </TradeContext.Provider>
    )

}