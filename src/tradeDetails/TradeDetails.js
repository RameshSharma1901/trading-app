import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { Layout } from 'antd';
import '../mainPage/index.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const { Content, Header } = Layout;



export const TradeDetails = () => {
  
    const [rowData] = useState([
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
    ]);

    return (
        <Content>
            <Header>Order Blotter</Header>

        <div className="ag-theme-alpine" style={{ height: 400, width: 600}}>
            <AgGridReact
                rowData={rowData}  
                >
                <AgGridColumn field="make"></AgGridColumn>
                <AgGridColumn field="model"></AgGridColumn>
                <AgGridColumn field="price"></AgGridColumn>
            </AgGridReact>
        </div>
        </Content>
    )
}