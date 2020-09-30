import React from 'react'
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css'
import { TradeDetails } from '../tradeDetails/TradeDetails';
import { TradeInput } from '../tradeInput/TradeInput'
import { Layout } from 'antd';
import './index.css';

export const LandingPage = () =>
    <div>
        <Layout>
                <SplitterLayout vertical false>
                    <TradeInput />
                    <TradeDetails />
                </SplitterLayout>
        </Layout>
    </div>