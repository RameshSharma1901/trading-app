import React, { useContext } from 'react';
import { Layout } from 'antd';
import './index.css';
import Grid from '@material-ui/core/Grid';
import { Typography } from 'antd';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';
import { TradeContext } from '../tradeContext/TradeContext'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import { red } from '@material-ui/core/colors';
import { Alert } from 'antd';
import { Spin } from 'antd';
import LoadingOverlay from 'react-loading-overlay';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Modal, Space } from 'antd';
import AlertDialog from './AlertDialog';

const { Option } = Select;
const { Content, Header } = Layout;
const { Text } = Typography;

var currentCount = 1;

export const TradeInput = () => {
    const { rowDataParam, timeStampParam } = useContext(TradeContext);
    const [count, setCount] = React.useState(1);
    const [rowData, setRowData] = rowDataParam;
    const [timeStamp, setTimeStamp] = timeStampParam;

    const [action, setAction] = React.useState('Buy');
    const [symbol, setSymbol] = React.useState('');
    const [quantity, setQuantity] = React.useState(0);
    const [price, setPrice] = React.useState(0);
    const [orderType, setOrderType] = React.useState('');
    const [spinner, setSpinner] = React.useState(false);
    const [tif, setTif] = React.useState('');
    const [stopPrice, setStopPrice] = React.useState(0);
    const [comment, setComment] = React.useState('');
    const [open, setOpen] = React.useState(false);



    const submitTradeEntry = e => {
        console.log({ currentCount })
        if (count === 10) {
            setOpen(true);
            currentCount = 1;
            setCount(1)
        } else {
            setOpen(false);
            currentCount = currentCount + 1;
            setCount(currentCount)
            setSpinner(true)
            setTimeout(function () {

                setRowData(prevRowData => [...prevRowData,
                {
                    action: action,
                    symbol: symbol,
                    quantity: quantity,
                    price: price,
                    orderType: orderType,
                    tif: tif,
                    stopPrice: stopPrice,
                    comment: comment
                }])
                setTimeStamp((new Date()).toUTCString());
                setSpinner(false)
            }, 2000)
        }
    }


    const searchValues = [
        'AAPL', 'MSFT', 'GOOGL', 'VZ', 'MMM', 'NFLX', 'FB', 'TWTR', 'AMZN', 'EBAY'
    ]

    return (
        <Content>
            {open && <AlertDialog open={open} />}
            <Header>
                <Text type="secondary" style={{ color: 'antiquewhite' }}><i>Ext Trader</i></Text> <Text style={{ color: 'white' }}>Order Entry</Text>
            </Header>

            <div className='grid'>
                <LoadingOverlay active={spinner} text='Please wait..' spinner>

                    <Grid container spacing={1} >

                        <Grid item xs={3}>
                            <Grid container>
                                <Grid item xs={12}><Text> Action</Text></Grid>
                                <Grid item xs={6}>
                                    <NativeSelect
                                        name="action"
                                        inputProps={{ 'aria-label': 'age' }}
                                        value={action}
                                        className={action === 'Sell' ? 'action-sell-styles' : 'action-buy-styles'}
                                        onChange={(e) => setAction(e.target.value)}>
                                        <option value='Buy'>Buy</option>
                                        <option value='Sell'>Sell</option>
                                    </NativeSelect>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item xs={3}>
                            <Grid item xs={12}>
                                <Autocomplete
                                    id="symbol"
                                    options={searchValues}
                                    getOptionLabel={(option) => option}
                                    style={{ width: '70%' }}
                                    renderInput={(params) => <TextField {...params} label="Symbol" variant="outlined" />}
                                />

                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid item xs={12}>
                                <TextField
                                    id="filled-number"
                                    label="Qty"
                                    type="number"
                                    name='quantity'
                                    InputProps={{ inputProps: { max: 999 } }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid item xs={12}>
                                <TextField
                                    id="filled-number"
                                    label="Price"
                                    type="number"
                                    InputProps={{ inputProps: { step: 0.01 } }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <div style={{ marginTop: '2%' }}>
                        <Grid container>
                            <Grid item xs={3}>
                                <Grid container>
                                    <Grid item xs={12}><Text>Order Type</Text></Grid>
                                    <Grid item xs={6}>
                                        <NativeSelect
                                            name="Order Type"
                                            inputProps={{ 'aria-label': 'age' }}
                                            onChange={(e) => setOrderType(e.target.value)}

                                        >

                                            <option value='Day'>Market</option>
                                            <option value='Limit'>Limit</option>
                                        </NativeSelect>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3}>
                                <Grid container>
                                    <Grid item xs={12}><Text>TIF</Text></Grid>
                                    <Grid item xs={6}>
                                        <NativeSelect
                                            name="tif"
                                            inputProps={{ 'aria-label': 'age' }}
                                            onChange={(e) => setTif(e.target.value)}
                                        >

                                            <option value='GTC'>GTC</option>
                                            <option value='DAY'>DAY</option>
                                            <option value='FOK'>FOK</option>
                                            <option value='IOC'>IOC</option>
                                        </NativeSelect>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} />
                            <Grid item xs={3}>
                                <TextField
                                    id="filled-number"
                                    label="Stop Price"
                                    type="number"
                                    onChange={(e) => setStopPrice(e.target.value)}
                                    InputProps={{ inputProps: { step: 0.01 } }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{ marginTop: '2%' }}>

                        <Grid container>
                            <Grid item xs={5} >
                                <TextareaAutosize onChange={(e) => setComment(e.target.value)} aria-label="minimum height"
                                 rowsMin={5} placeholder="<COMMENT>" style={{ width: '100%' }} 
                                 />

                            </Grid>
                            <Grid item xs={5} />
                            <Grid item xs={2} >
                                <Button variant="contained" color="primary" style={{ marginTop: '50px' }} onClick={submitTradeEntry}>
                                    Submit
                            </Button>
                            </Grid>
                        </Grid>
                    </div>
                </LoadingOverlay>
            </div>
        </Content>
    )
}