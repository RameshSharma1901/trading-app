import React from 'react';
import { Layout } from 'antd';
import './index.css';
import Grid from '@material-ui/core/Grid';
import { Typography } from 'antd';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';




const { Content, Header } = Layout;
const { Text } = Typography;


export const TradeInput = () => {
    const [action, setAction] = React.useState('Buy');

    const handleChange = event => {
        console.log(event.target.value)
        setAction(event.target.value);
    };

    return (
        <Content>
            <Header>
                <Text type="secondary"><i>Ext Trader</i></Text> <Text>Order Entry</Text>
            </Header>

            <div class='grid'>
                <Grid container spacing={1} >
                    <Grid item xs={3}>
                        <Grid container>
                            <Grid item xs={12}><Text> Action</Text></Grid>
                            <Grid item xs={6}>
                                <NativeSelect

                                    name="action"
                                    inputProps={{ 'aria-label': 'age' }}
                                >

                                    <option value='Day'>Buy</option>
                                    <option value='Sell'>Sell</option>
                                </NativeSelect>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={3}>

                        <Grid item xs={12}>

                            <TextField id="standard-basic" label="Symbol" />
                        </Grid>

                    </Grid>
                    <Grid item xs={3}>
                        <Grid item xs={12}>
                            <TextField
                                id="filled-number"
                                label="Qty"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>

                    </Grid>
                    <Grid item xs={3}>
                        <Grid item xs={12}>
                            <TextField
                                id="filled-number"
                                label="Price"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
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

                                        name="market"
                                        inputProps={{ 'aria-label': 'age' }}
                                    >

                                        <option value='Day'>Market</option>
                                        <option value='Sell'>Sell</option>
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
                                    >

                                        <option value='Day'>Day</option>
                                        <option value='Sell'>Sell</option>
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
                            <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="<COMMENT>" style={{ width: '100%' }} />

                        </Grid>
                        <Grid item xs={5} />
                        <Grid item xs={2} >
                            <Button variant="contained" color="primary" style={{ marginTop: '50px' }}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Content>
    )
}