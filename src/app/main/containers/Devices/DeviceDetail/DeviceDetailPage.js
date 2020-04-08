import React, { Component } from 'react';
import { Typography, InputLabel, Button, InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import './device.scss'
import RegisteredAddress from './registeredAddressDetail'
import DeviceTariff from './deviceTariffDetail'
import { CustomSaveBtn } from '../../../../../styles/customCss'

class DeviceDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deviceData: []
        }

    }

    render() {
        return (
            <div className="p-16 sm:p-24 max-w-2xl w-full">
                <div className='deviceRoot'>
                    <Paper className='deviceCol'>
                        <div className='p-16'>
                            <div className="pb-16 flex items-center">
                                <Typography className="h2 deviceBorderBtm" color="default">Device Data</Typography>
                            </div>
                            <Typography className='flex w-full items-start' variant='subtitle1'>
                                <div className='w-128 m-16' >
                                    <InputLabel >Device Type</InputLabel>
                                    <span>Device 1</span>
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel>Device ID</InputLabel>
                                    <span>564387</span>
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel>Passcode</InputLabel>
                                    <span>Device 1</span>
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel>Installation Company</InputLabel>
                                    <span>Device 1</span>
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel>Date Installed</InputLabel>
                                    <span>Device 1</span>
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel>Installation Agent</InputLabel>
                                    <span>abc123@gmail.com</span>
                                </div>
                            </Typography>
                            <Typography className='flex w-full items-start mt-2' variant='subtitle1'>
                                <div className='w-128 m-16'>
                                    <InputLabel>NMI</InputLabel>
                                    <span>Device 1</span>
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel>Postcode</InputLabel>
                                    <span>Device 1</span>
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel>Customer</InputLabel>
                                    <span>john@gmail.com</span>
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel>Premium</InputLabel>
                                    <span>Device 1</span>
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel>Premium Validity</InputLabel>
                                    <span>Device 1</span>
                                </div>
                            </Typography>
                        </div>
                        <Divider />

                        {/* ------------------------------------Device Access detail container--------------------------------------------- */}
                        <div className='p-16' >
                            <div className="pb-16 flex">
                                <Typography className="h2 deviceBorderBtm" color="default">Device Access</Typography>
                            </div>

                            <Typography className='w-full' variant='subtitle1'>
                                <div className='w-auto m-16' >
                                    <span>johndoe@gmail.com</span>
                                </div>
                                <div className='w-auto m-16'>
                                    <InputLabel className='pb-8'>Access Shares</InputLabel>
                                    <div>abc123@gmail.com</div>
                                    <div>xyz123@gmail.com</div>
                                </div>
                            </Typography>
                        </div>
                        <Divider />
                        <RegisteredAddress />
                        <Divider />

                        {/* -----------------------------------------House Details Container---------------------------------------------- */}
                        <div className='p-16' >
                            <div className="pb-16 flex items-center">
                                <Typography className="h2 deviceBorderBtm" color="default">House Details</Typography>
                            </div>
                            <Typography className='flex w-full items-center' variant='subtitle1'>
                                <div className='w-128 m-16' >
                                    <InputLabel >No. of adults</InputLabel>
                                    <span>2</span>
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel>No. of child</InputLabel>
                                    <span>2</span>
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel>Floors</InputLabel>
                                    <span>3</span>
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel>Rooms</InputLabel>
                                    <span>4</span>
                                </div>
                            </Typography>
                            <Typography className='flex w-full items-center mt-2' variant='subtitle1'>
                                <div className='w-128 m-16'>
                                    <InputLabel>Solar</InputLabel>
                                    <span>5 KW</span>
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel>HWS</InputLabel>
                                    <span>90</span>
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel>AC</InputLabel>
                                    <span>3</span>
                                </div>
                            </Typography>
                        </div>
                        <Divider />
                        <DeviceTariff />

                        <Typography>
                            <div className="flex justify-end">
                                <Link className="font-medium" to="/devices">
                                    <Button className="w-128 my-16 " variant="outlined" >Back</Button>
                                </Link>

                                <CustomSaveBtn>
                                    <Button className="w-128 m-16 " variant="contained" color="secondary" >Save</Button>
                                </CustomSaveBtn>
                            </div>
                        </Typography>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default DeviceDetailPage; 