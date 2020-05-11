import React, { Component } from 'react';
import { Typography, Button, FormLabel, Icon, Input, InputLabel, Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import './device.scss'
import RegisteredAddress from './registeredAddressDetail'
import DeviceTariff from './deviceTariffDetail'

class DeviceDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deviceData: {},
            editFlag: false,
            formData: {
                deviceData: {},
                sharedAccess: {
                    email: 'johndoe@gmail.com',
                    sharedEmail: ['abc123@gmail.com', 'matt123@gmail.com']
                },
                username: 'John doe',
                email: 'johndoe@gmail.com',
                streetAddress: '13th Merchant Place ',
                town_city: 'Albany',
                country: 'United States',
                state: 'New York',
                postcode: '10001',

                distributor: 'ABC Distributor',
                retailer: 'XYZ Retailer',
                weekday: {
                    peak: '10.00-12.00 ',
                    peakTime: '09.00-11.00',
                    offPeak: '10.00-12.00',
                    offTime: '09.00-11.00',
                    shoulder: '10.0-11.01',
                    shoulderTime: '09:00-11:00',
                    dailyCharge: '$10',
                    discount: '5%'
                },
                weekend: {
                    peak: '10.00-12.00 ',
                    peakTime: '09.00-11.00',
                    offPeak: '10.00-12.00',
                    offTime: '09.00-11.00',
                    shoulder: '10.0-11.01',
                    shoulderTime: '09:00-11:00',
                    dailyCharge: '$8',
                    discount: '7%'
                }
            }

        }

    }


    editToggle = (item) => {
        this.setState({
            editFlag: !this.state.editFlag
        })
    }


    handleInputChange(text, key) {
        let { formData } = this.state;
        if (key == 'weekday') {
            formData.weekday[text.target.name] = text.target.value;
        } else if (key == 'weekend') {
            formData.weekend[text.target.name] = text.target.value;
        } else {
            formData[text.target.name] = text.target.value;
        }
        this.setState({
            formData
        })

    }

    render() {
        const { editFlag, formData: { username, email, streetAddress, town_city, country, state, postcode,
            distributor, retailer, weekday, weekend, sharedAccess } } = this.state
        return (
            <div className="p-16 sm:p-24 max-w-2xl w-full">
                <div className='deviceRoot'>
                    <Paper className='deviceCol'>
                        <div className='p-16'>
                            <div className='flex justify-end'>
                                <Tooltip title="Edit" placement="bottom" className='cursor-pointer' >
                                    <Icon onClick={this.editToggle} style={{color:editFlag?'red':'black'}} >edit</Icon>
                                </Tooltip>
                            </div>
                            <div className="pb-16 flex items-center">
                                <Typography className="h2 borderBtm" color="default">Device Data</Typography>
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
                                <Typography className="h2 borderBtm" color="default">Device Access</Typography>
                            </div>

                            <Typography className='w-full' variant='subtitle1'>
                                <div className='w-auto m-16' >
                                    {editFlag ?
                                        <Input className='w-1/4' name='email' value={sharedAccess.email} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div className='w-1/4'>{sharedAccess.email}</div>
                                    }
                                </div>
                                <div className='w-auto m-16'>
                                    <InputLabel className='pb-8'>Access Shares</InputLabel>
                                    {sharedAccess.sharedEmail.map((item, index) => {
                                        return (<div className='py-4'>
                                            {editFlag ?
                                                <Input className='w-1/4' name='sharedEmail' value={item} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                                : <div className='w-1/4'>{item}</div>
                                            }
                                        </div>)
                                    })}
                                </div>
                            </Typography>
                        </div>
                        <Divider />

                        {/*--------- -------------------------------------Registered Address ------------------------------------------------------- */}

                        <div className='p-16'>
                            <div className="pb-16 flex items-center items-center">
                                <Typography className="h2 borderBtm" >Registered Address</Typography>
                            </div>
                            <Typography className='w-full items-center' variant='subtitle1'>
                                <div className=' flex items-center  m-16' >
                                    <FormLabel className='w-224' >Name </FormLabel>
                                    {editFlag ?
                                        <Input className='w-1/4' name='username' value={username} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div className='w-1/4'>{username}</div>
                                    }

                                </div>
                                <div className='flex items-center  m-16'>
                                    <FormLabel className='w-224'>Email </FormLabel>
                                    {editFlag ?
                                        <Input className='w-1/4' name='email' value={email} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div className='w-1/4'>{email}</div>
                                    }
                                </div>
                                <div className='flex items-center  m-16'>
                                    <FormLabel className='w-224'>Street Address</FormLabel>
                                    {editFlag ?
                                        <Input className='w-1/4' name='streetAddress' value={streetAddress} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div className='w-1/4'>{streetAddress}</div>
                                    }
                                </div>
                                <div className='flex items-center  m-16'>
                                    <FormLabel className='w-224'>Town/City </FormLabel>
                                    {editFlag ?
                                        <Input className='w-1/4' outlined name='town_city' value={town_city} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div className='w-1/4'>{town_city}</div>
                                    }
                                </div>
                                <div className='flex items-center  m-16'>
                                    <FormLabel className='w-224'>Country </FormLabel>
                                    {editFlag ?
                                        <Input className='w-1/4' name='country' value={country} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div className='w-1/4'>{country}</div>
                                    }
                                </div>
                                <div className='flex items-center   m-16'>
                                    <FormLabel className='w-224'>State </FormLabel>
                                    {editFlag ?
                                        <Input className='w-1/4' name='state' value={state} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div className='w-1/4'>{state}</div>
                                    }
                                </div>
                                <div className='flex items-center  m-16'>
                                    <FormLabel className='w-224'>Postcode</FormLabel>
                                    {editFlag ?
                                        <Input className='w-1/4' name='postcode' value={postcode} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div className='w-1/4'>{postcode}</div>
                                    }
                                </div>
                            </Typography>
                        </div>
                        <Divider />

                        {/* -----------------------------------------House Details Container---------------------------------------------- */}
                        <div className='p-16' >
                            <div className="pb-16 flex items-center">
                                <Typography className="h2 borderBtm" color="default">House Details</Typography>
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

                        {/* --------------------------------------------------------Device Tariff Details----------------------------------------- */}
                        {/* <DeviceTariff /> */}
                        <div className='p-16'>
                            <div className="pb-16 flex items-center items-center">
                                <Typography className="h2 borderBtm" >Tariff Details</Typography>
                            </div>
                            <Typography className='flex w-full items-center' variant='subtitle1'>
                                <div className='w-1/4 m-16' >
                                    <InputLabel >Electricity distributor</InputLabel>
                                    {editFlag ?
                                        <Input name='distributor' value={distributor} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div className='pt-8' >{distributor}</div>
                                    }
                                </div>
                                <div className='w-1/4 m-16'>
                                    <InputLabel>Electricity Retailer</InputLabel>
                                    {editFlag ?
                                        <Input name='retailer' value={retailer} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div className='pt-8' >{retailer}</div>
                                    }
                                </div>
                            </Typography>

                            <Typography variant='subtitle1'>
                                <div className='mb-4 mx-16' style={{ color: '#00A78D' }}>Weekday </div>
                            </Typography>

                            <Typography className='w-full flex items-start' variant='subtitle1'>
                                <div className='mx-16'>
                                    <div >Peak </div>
                                    <div className=' flex items-center' >
                                        <FormLabel className='w-88' >Rate </FormLabel>
                                        <div className='w-auto'>{weekday.peak}</div>

                                    </div>
                                    <div className='flex items-center'>
                                        <FormLabel className='w-88'>Time </FormLabel>
                                        <div className='w-auto'>{weekday.peakTime}</div>
                                    </div>
                                </div>

                                <div className='mx-16'>
                                    <div >Off Peak </div>
                                    <div className=' flex items-center' >
                                        <FormLabel className='w-88' >Rate </FormLabel>
                                        <div className='w-auto'>{weekday.offPeak}</div>

                                    </div>
                                    <div className='flex items-center'>
                                        <FormLabel className='w-88'>Time </FormLabel>
                                        <div className='w-auto'>{weekday.offTime}</div>
                                    </div>
                                </div>

                                <div className='mx-16'>
                                    <div >Shoulder </div>
                                    <div className=' flex items-center' >
                                        <FormLabel className='w-88' >Rate </FormLabel>
                                        <div className='w-auto'>{weekday.shoulder}</div>

                                    </div>
                                    <div className='flex items-center'>
                                        <FormLabel className='w-88'>Time </FormLabel>
                                        <div className='w-auto'>{weekday.shoulderTime}</div>
                                    </div>
                                </div>
                                <div className='mx-16'>
                                    <div >Daily charge </div>
                                    {editFlag ?
                                        <Input className='w-88' name='dailyCharge' value={weekday.dailyCharge} onChange={(e) => this.handleInputChange(e, 'weekday')} inputProps={{ 'aria-label': 'description' }} />
                                        : <FormLabel className='w-64' >{weekday.dailyCharge}</FormLabel>
                                    }
                                </div>
                                <div className='mx-16'>
                                    <div >Discount </div>
                                    {editFlag ?
                                        <Input className='w-88' name='discount' value={weekday.discount} onChange={(e) => this.handleInputChange(e, 'weekday')} inputProps={{ 'aria-label': 'description' }} />
                                        : <FormLabel className='w-64' >{weekday.discount}</FormLabel>
                                    }
                                </div>
                            </Typography>


                            <Typography variant='subtitle1'>
                                <div className='mb-4 mx-16' style={{ color: '#00A78D' }}>Weekend </div>
                            </Typography>

                            <Typography className='w-full flex items-start' variant='subtitle1'>
                                <div className='mx-16'>
                                    <div >Peak </div>
                                    <div className=' flex items-center' >
                                        <FormLabel className='w-88' >Rate </FormLabel>
                                        {editFlag ?
                                            <Input className='w-128' name='peak' value={weekend.peak} onChange={(e) => this.handleInputChange(e, 'weekend')} inputProps={{ 'aria-label': 'description' }} />
                                            : <div className='w-auto'>{weekend.peak}</div>
                                        }

                                    </div>
                                    <div className='flex items-center'>
                                        <FormLabel className='w-88'>Time </FormLabel>
                                        {editFlag ?
                                            <Input className='w-128' name='peakTime' value={weekend.peakTime} onChange={(e) => this.handleInputChange(e, 'weekend')} inputProps={{ 'aria-label': 'description' }} />
                                            : <div className='w-auto'>{weekend.peakTime}</div>
                                        }
                                    </div>
                                </div>

                                <div className='mx-16'>
                                    <div >Off Peak </div>
                                    <div className=' flex items-center' >
                                        <FormLabel className='w-88' >Rate </FormLabel>
                                        {editFlag ?
                                            <Input className='w-128' name='offPeak' value={weekend.offPeak} onChange={(e) => this.handleInputChange(e, 'weekend')} inputProps={{ 'aria-label': 'description' }} />
                                            : <div className='w-auto'>{weekend.offPeak}</div>
                                        }

                                    </div>
                                    <div className='flex items-center'>
                                        <FormLabel className='w-88'>Time </FormLabel>
                                        {editFlag ?
                                            <Input className='w-128' name='offTime' value={weekend.offTime} onChange={(e) => this.handleInputChange(e, 'weekend')} inputProps={{ 'aria-label': 'description' }} />
                                            : <div className='w-auto'>{weekend.offTime}</div>
                                        }
                                    </div>
                                </div>

                                <div className='mx-16'>
                                    <div > Shoulder </div>
                                    <div className=' flex items-center' >
                                        <FormLabel className='w-88' >Rate </FormLabel>
                                        {editFlag ?
                                            <Input className='w-128' name='shoulder' value={weekend.shoulder} onChange={(e) => this.handleInputChange(e, 'weekend')} inputProps={{ 'aria-label': 'description' }} />
                                            : <div className='w-auto'>{weekend.shoulder}</div>
                                        }

                                    </div>
                                    <div className='flex items-center'>
                                        <FormLabel className='w-88'>Time </FormLabel>
                                        {editFlag ?
                                            <Input className='w-128' name='shoulderTime' value={weekend.shoulderTime} onChange={(e) => this.handleInputChange(e, 'weekend')} inputProps={{ 'aria-label': 'description' }} />
                                            : <div className='w-auto'>{weekend.shoulderTime}</div>
                                        }
                                    </div>
                                </div>

                                <div className='mx-16'>
                                    <div  >Daily charge </div>
                                    {editFlag ?
                                        <Input className='w-88' name='dailyCharge' value={weekend.dailyCharge} onChange={(e) => this.handleInputChange(e, 'weekend')} inputProps={{ 'aria-label': 'description' }} />
                                        : <FormLabel className='w-auto' >{weekend.dailyCharge}</FormLabel>
                                    }
                                </div>
                                <div className='mx-16'>
                                    <div >Discount </div>
                                    {editFlag ?
                                        <Input className='w-88' name='discount' value={weekend.discount} onChange={(e) => this.handleInputChange(e, 'weekend')} inputProps={{ 'aria-label': 'description' }} />
                                        : <FormLabel className='w-auto' >{weekend.discount}</FormLabel>
                                    }
                                </div>
                            </Typography>
                        </div>

                        {/*--------- ----------------------------------------Submit buttons------------------------------------------=------------ */}
                        <Typography>
                            <div className="flex justify-end">
                                <Link className="font-medium" to="/devices">
                                    <Button className="w-128 my-16 " variant="outlined" color="primary" >Back</Button>
                                </Link>

                                <Button className="w-128 m-16 " variant="contained" color="secondary" >Save</Button>
                            </div>
                        </Typography>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default DeviceDetailPage; 