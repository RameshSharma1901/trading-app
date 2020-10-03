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

const { Option } = Select;
const { Content, Header } = Layout;
const { Text } = Typography;


export const TradeInput = () => {
    const [rowData, setRowData] = useContext(TradeContext);

    const [action, setAction] = React.useState('Buy');
    const [symbol, setSymbol] = React.useState('');
    const [quantity, setQuantity] = React.useState(0);
    const [price, setPrice] = React.useState(0);
    const [orderType, setOrderType] = React.useState('');
    const [tif, setTif] = React.useState('');
    const [stopPrice, setStopPrice] = React.useState(0);
    const [comment, setComment] = React.useState('');

    const submitTradeEntry = e => {
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

    }

    const searchValues = [
        'AAPL', 'MSFT', 'GOOGL', 'VZ', 'MMM', 'NFLX', 'FB', 'TWTR', 'AMZN', 'EBAY'
    ]

    return (
        <Content>
            <Header>
                <Text type="secondary" style={{ color: 'antiquewhite' }}><i>Ext Trader</i></Text> <Text style={{ color: 'white' }}>Order Entry</Text>
            </Header>

            <div className='grid'>
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
                            <TextareaAutosize onChange={(e) => setComment(e.target.value)} aria-label="minimum height" rowsMin={5} placeholder="<COMMENT>" style={{ width: '100%' }} />

                        </Grid>
                        <Grid item xs={5} />
                        <Grid item xs={2} >
                            <Button variant="contained" color="primary" style={{ marginTop: '50px' }} onClick={submitTradeEntry}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Content>
    )
}