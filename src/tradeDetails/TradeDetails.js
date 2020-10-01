import React, { useContext } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Layout } from 'antd';
import '../mainPage/index.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {TradeContext} from '../tradeContext/TradeContext'

const { Content, Header } = Layout;



export const TradeDetails = () => {
  
    const [rowData, setRowData] = useContext(TradeContext); 

    const gridOptions = {

        columnDefs : [  
            { headerName: "Action", field: "action", sortable: true },  
            { headerName: "Symbol", field: "symbol", sortable: true },  
            { headerName: "Qty", field: "quantity", sortable: true },  
            { headerName: "Order Type", field: "orderType", sortable: true },  
            { headerName: "TIF", field: "tif", sortable: true },  
            { headerName: "Price", field: "price", sortable: true },  
            { headerName: "Stop Price", field: "stopPrice", sortable: true },  
            { headerName: "Comment", field: "comment", sortable: true }  
         
        ],

        defaultColDef: {
            resizable: true,
          }
    }
 

    return (
        <Content>
            <Header>Order Blotter</Header>

        <div className="ag-theme-alpine" style={ { height: 1000 } }>
            <AgGridReact
                rowData={rowData}
                gridOptions= {gridOptions}
                >
            </AgGridReact>
        </div>
        </Content>
    )
}