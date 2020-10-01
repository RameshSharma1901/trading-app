import React, { createContext, useState } from 'react'

export const TradeContext = createContext();

export const TradeDetailsProvider = (props) => {

    const [rowData, setRowData] = useState([]);

    return (
        <TradeContext.Provider value={[rowData, setRowData]}>
            {props.children}
        </TradeContext.Provider>
    )

}