import React, { Component } from 'react';
import { Typography, Button, FormLabel, Icon, Input, InputLabel, Tooltip, Switch, FormGroup, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import './device.scss'

class DeviceDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deviceData: {},
            editFlag: false,
            formData: {
                deviceData: {
                    type: 'Device 1',
                    deviceId: '564387',
                    passcode: 43221,
                    company: 'Dolore magna',
                    installationDate: '2020-10-04',
                    agent: 'jack123@gmail.com',
                    nmi: 764301,
                    postcode: 4765,
                    customer: 'jill51@gmail.com',
                    premium: true,
                    premiumValidity: '2020-11-12'
                },
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
                addressPostcode: '10001',
                houseDetail: {
                    adults: 4,
                    child: 2,
                    floors: 2,
                    rooms: 4,
                    solar: '90 KW',
                    hws: '80',
                    ac: 2
                },
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

        if (text.target.checked) {

            formData[key][text.target.name] = text.target.checked;

        } else if (key == 'weekday') {

            formData.weekday[text.target.name] = text.target.value;

        } else if (key == 'weekend') {

            formData.weekend[text.target.name] = text.target.value;

        } else {
            formData[key][text.target.name] = text.target.value;

        }
        this.setState({
            formData
        })

    }

    handleChangeSharedEmail(e, key) {
        let { formData: { sharedAccess } } = this.state;
        sharedAccess.sharedEmail[key] = e.target.value;
        this.setState({
            sharedAccess
        })
    }

    handleSubmitData(e){
        console.log('formdata',this.state.formData)
    }

    render() {
        const { editFlag, formData: { username, email, streetAddress, town_city, country, state, addressPostcode,
            deviceData: { type, deviceId, passcode, company, installationDate, agent, nmi, postcode, customer, premium, premiumValidity },
            houseDetail: { adults, child, floors, rooms, solar, hws, ac }, distributor, retailer, weekday, weekend, sharedAccess } } = this.state
        return (
            <div className="p-16 sm:p-24 max-w-2xl w-full">
                <div className='deviceRoot'>
                    <Paper className='deviceCol'>
                        <div className='p-16'>
                            <div className='flex justify-end'>
                                <Tooltip title="Edit" placement="bottom" className='cursor-pointer' >
                                    <Icon onClick={this.editToggle} style={{ color: editFlag ? 'red' : 'black' }} >edit</Icon>
                                </Tooltip>
                            </div>
                            <div className="pb-16 flex items-center">
                                <Typography className="h2 borderBtm" color="default">Device Data</Typography>
                            </div>
                            <Typography className='flex w-full items-start' variant='subtitle1'>
                                <div className='w-1/5 m-16' >
                                    <InputLabel className='pb-8'>Device Type</InputLabel>
                                    {editFlag ?
                                        <Input name='type' className='inputBorder' value={type} onChange={(e) => this.handleInputChange(e, 'deviceData')} inputProps={{ 'aria-label': 'description' }} />
                                        : <span>{type}</span>
                                    }
                                </div>
                                <div className='w-1/5 m-16'>
                                    <InputLabel className='pb-8'>Device ID</InputLabel>
                                    {editFlag ?
                                        <Input name='deviceId' className='inputBorder' value={deviceId} onChange={(e) => this.handleInputChange(e, 'deviceData')} inputProps={{ 'aria-label': 'description' }} />
                                        : <span>{deviceId}</span>
                                    }
                                </div>
                                <div className='w-1/5 m-16'>
                                    <InputLabel className='pb-8'>Passcode</InputLabel>
                                    {editFlag ?
                                        <Input type='number' className='inputBorder' name='passcode' value={passcode} onChange={(e) => this.handleInputChange(e, 'deviceData')} inputProps={{ 'aria-label': 'description' }} />
                                        : <span>{passcode}</span>
                                    }
                                </div>
                                <div className='w-1/5 m-16'>
                                    <InputLabel className='pb-8'>Installation Company</InputLabel>
                                    {editFlag ?
                                        <Input name='company' className='inputBorder' value={company} onChange={(e) => this.handleInputChange(e, 'deviceData')} inputProps={{ 'aria-label': 'description' }} />
                                        : <span>{company}</span>
                                    }
                                </div>
                            </Typography>
                            <Typography className='flex w-full items-start mt-2' variant='subtitle1'>
                                <div className='w-1/5 m-16'>
                                    <InputLabel className='pb-8'>Installation Agent</InputLabel>
                                    {editFlag ?
                                        <Input name='agent' className='inputBorder' value={agent} onChange={(e) => this.handleInputChange(e, 'deviceData')} inputProps={{ 'aria-label': 'description' }} />
                                        : <span>{agent}</span>
                                    }
                                </div>
                                <div className='w-1/5 m-16'>
                                    <InputLabel className='pb-8'>Date Installed</InputLabel>
                                    {editFlag ?
                                        <Input type='date' className='inputBorder' name='installationDate' value={installationDate} onChange={(e) => this.handleInputChange(e, 'deviceData')} inputProps={{ 'aria-label': 'description' }} />
                                        : <span>{installationDate}</span>
                                    }
                                </div>
                                <div className='w-1/5 m-16'>
                                    <InputLabel className='pb-8'>NMI</InputLabel>
                                    {editFlag ?
                                        <Input type='number' className='inputBorder' name='nmi' value={nmi} onChange={(e) => this.handleInputChange(e, 'deviceData')} inputProps={{ 'aria-label': 'description' }} />
                                        : <span>{nmi}</span>
                                    }
                                </div>
                                <div className='w-1/5 m-16'>
                                    <InputLabel className='pb-8'>Postcode</InputLabel>
                                    {editFlag ?
                                        <Input type='number' className='inputBorder' name='postcode' value={postcode} onChange={(e) => this.handleInputChange(e, 'deviceData')} inputProps={{ 'aria-label': 'description' }} />
                                        : <span>{postcode}</span>
                                    }
                                </div>
                            </Typography>
                            <Typography className='flex w-full items-start mt-2' variant='subtitle1'>
                                <div className='w-1/5 m-16'>
                                    <InputLabel className='pb-8'>Customer</InputLabel>
                                    {editFlag ?
                                        <Input name='customer' className='inputBorder' value={customer} onChange={(e) => this.handleInputChange(e, 'deviceData')} inputProps={{ 'aria-label': 'description' }} />
                                        : <span>{customer}</span>
                                    }
                                </div>
                                <div className='w-1/5 m-16'>
                                    <InputLabel className='pb-8'>Premium</InputLabel>
                                    {editFlag ?
                                        <FormGroup aria-label="position" row>
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={premium}
                                                        onChange={(e) => this.handleInputChange(e, 'deviceData')}
                                                        name="premium"
                                                        color="primary"
                                                    />
                                                }
                                            />
                                        </FormGroup>
                                        : <span>{premium == true ? 'Yes' : 'No'}</span>
                                    }
                                </div>
                                {premium &&(
                                <div className='w-1/5 m-16'>
                                    <InputLabel className='pb-8'>Premium Validity</InputLabel>
                                    {editFlag ?
                                        <Input type='date' className='inputBorder' name='premiumValidity' value={premiumValidity} onChange={(e) => this.handleInputChange(e, 'deviceData')} inputProps={{ 'aria-label': 'description' }} />
                                        : <span>{premiumValidity}</span>
                                    }
                                </div>
                                )}
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
                                        <Input className='w-1/5 inputBorder' name='email' value={sharedAccess.email} onChange={(e) => this.handleInputChange(e, 'sharedAccess')} inputProps={{ 'aria-label': 'description' }} />
                                        : <div className='w-1/5'>{sharedAccess.email}</div>
                                    }
                                </div>
                                <div className='w-auto m-16'>
                                    <InputLabel className='pb-8'>Access Shares</InputLabel>
                                    {sharedAccess.sharedEmail.map((item, index) => {
                                        return (<div className='py-4'>
                                            {editFlag ?
                                                <Input className='w-1/5 inputBorder' name='sharedEmail' value={item} onChange={(e) => this.handleChangeSharedEmail(e, index)} inputProps={{ 'aria-label': 'description' }} />
                                                : <div className='w-1/5'>{item}</div>
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
                                        <Input className='w-1/5 inputBorder' name='username' value={username} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div className='w-1/5'>{username}</div>
                                    }

                                </div>
                                <div className='flex items-center  m-16'>
                                    <FormLabel className='w-224'>Email </FormLabel>
                                    {editFlag ?
                                        <Input className='w-1/5 inputBorder' name='email' value={email} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div className='w-1/5'>{email}</div>
                                    }
                                </div>
                                <div className='flex items-center  m-16'>
                                    <FormLabel className='w-224'>Street Address</FormLabel>
                                    {editFlag ?
                                        <Input className='w-1/5 inputBorder' name='streetAddress' value={streetAddress} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div className='w-1/5'>{streetAddress}</div>
                                    }
                                </div>
                                <div className='flex items-center  m-16'>
                                    <FormLabel className='w-224'>Town/City </FormLabel>
                                    {editFlag ?
                                        <Input className='w-1/5 inputBorder' outlined name='town_city' value={town_city} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div className='w-1/5'>{town_city}</div>
                                    }
                                </div>
                                <div className='flex items-center  m-16'>
                                    <FormLabel className='w-224'>Country </FormLabel>
                                    {editFlag ?
                                        <Input className='w-1/5 inputBorder' name='country' value={country} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div className='w-1/5'>{country}</div>
                                    }
                                </div>
                                <div className='flex items-center   m-16'>
                                    <FormLabel className='w-224'>State </FormLabel>
                                    {editFlag ?
                                        <Input className='w-1/5 inputBorder' name='state' value={state} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div className='w-1/5'>{state}</div>
                                    }
                                </div>
                                <div className='flex items-center  m-16'>
                                    <FormLabel className='w-224'>Postcode</FormLabel>
                                    {editFlag ?
                                        <Input className='w-1/5 inputBorder' name='addressPostcode' value={addressPostcode} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div className='w-1/5'>{addressPostcode}</div>
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
                                    <InputLabel className='pb-8'>No. of adults</InputLabel>
                                    {editFlag ?
                                        <Input type='number' className='inputBorder' name='adults' value={adults} onChange={(e) => this.handleInputChange(e, 'houseDetail')} inputProps={{ 'aria-label': 'description' }} />
                                        : <span>{adults}</span>
                                    }
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel className='pb-8'>No. of child</InputLabel>
                                    {editFlag ?
                                        <Input type='number' className='inputBorder' name='child' value={child} onChange={(e) => this.handleInputChange(e, 'houseDetail')} inputProps={{ 'aria-label': 'description' }} />
                                        : <span>{child}</span>
                                    }
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel className='pb-8'>Floors</InputLabel>
                                    {editFlag ?
                                        <Input type='number' className='inputBorder' name='floors' value={floors} onChange={(e) => this.handleInputChange(e, 'houseDetail')} inputProps={{ 'aria-label': 'description' }} />
                                        : <span>{floors}</span>
                                    }
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel className='pb-8'>Rooms</InputLabel>
                                    {editFlag ?
                                        <Input type='number' className='inputBorder' name='rooms' value={rooms} onChange={(e) => this.handleInputChange(e, 'houseDetail')} inputProps={{ 'aria-label': 'description' }} />
                                        : <span>{rooms}</span>
                                    }
                                </div>
                            </Typography>
                            <Typography className='flex w-full items-center mt-2' variant='subtitle1'>
                                <div className='w-128 m-16'>
                                    <InputLabel className='pb-8'>Solar</InputLabel>
                                    {editFlag ?
                                        <Input name='solar' className='inputBorder' value={solar} onChange={(e) => this.handleInputChange(e, 'houseDetail')} inputProps={{ 'aria-label': 'description' }} />
                                        : <span>{solar}</span>
                                    }
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel className='pb-8'>HWS</InputLabel>
                                    {editFlag ?
                                        <Input name='hws' className='inputBorder' value={hws} onChange={(e) => this.handleInputChange(e, 'houseDetail')} inputProps={{ 'aria-label': 'description' }} />
                                        : <span>{hws}</span>
                                    }
                                </div>
                                <div className='w-128 m-16'>
                                    <InputLabel className='pb-8'>AC</InputLabel>
                                    {editFlag ?
                                        <Input type='number' className='inputBorder' name='ac' value={ac} onChange={(e) => this.handleInputChange(e, 'houseDetail')} inputProps={{ 'aria-label': 'description' }} />
                                        : <span>{ac}</span>
                                    }
                                </div>
                            </Typography>
                        </div>
                        <Divider />

                        {/* --------------------------------------------------------Device Tariff Details----------------------------------------- */}

                        <div className='p-16'>
                            <div className="pb-16 flex items-center items-center">
                                <Typography className="h2 borderBtm" >Tariff Details</Typography>
                            </div>
                            <Typography className='flex w-full items-center' variant='subtitle1'>
                                <div className='w-1/5 m-16' >
                                    <InputLabel className='pb-8'>Electricity distributor</InputLabel>
                                    {editFlag ?
                                        <Input name='distributor' className='inputBorder' value={distributor} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div>{distributor}</div>
                                    }
                                </div>
                                <div className='w-1/5 m-16'>
                                    <InputLabel className='pb-8'>Electricity Retailer</InputLabel>
                                    {editFlag ?
                                        <Input name='retailer' className='inputBorder' value={retailer} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                                        : <div>{retailer}</div>
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
                                        <Input className='w-88 inputBorder' name='dailyCharge' value={weekday.dailyCharge} onChange={(e) => this.handleInputChange(e, 'weekday')} inputProps={{ 'aria-label': 'description' }} />
                                        : <FormLabel className='w-64' >{weekday.dailyCharge}</FormLabel>
                                    }
                                </div>
                                <div className='mx-16'>
                                    <div >Discount </div>
                                    {editFlag ?
                                        <Input className='w-88 inputBorder' name='discount' value={weekday.discount} onChange={(e) => this.handleInputChange(e, 'weekday')} inputProps={{ 'aria-label': 'description' }} />
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
                                        <div className='w-auto'>{weekend.peak}</div>
                                    </div>
                                    <div className='flex items-center'>
                                        <FormLabel className='w-88'>Time </FormLabel>
                                        <div className='w-auto'>{weekend.peakTime}</div>
                                    </div>
                                </div>

                                <div className='mx-16'>
                                    <div >Off Peak </div>
                                    <div className=' flex items-center' >
                                        <FormLabel className='w-88' >Rate </FormLabel>
                                        <div className='w-auto'>{weekend.offPeak}</div>
                                    </div>
                                    <div className='flex items-center'>
                                        <FormLabel className='w-88'>Time </FormLabel>
                                        <div className='w-auto'>{weekend.offTime}</div>
                                    </div>
                                </div>

                                <div className='mx-16'>
                                    <div > Shoulder </div>
                                    <div className=' flex items-center' >
                                        <FormLabel className='w-88' >Rate </FormLabel>
                                        <div className='w-auto'>{weekend.shoulder}</div>

                                    </div>
                                    <div className='flex items-center'>
                                        <FormLabel className='w-88'>Time </FormLabel>
                                        <div className='w-auto'>{weekend.shoulderTime}</div>
                                    </div>
                                </div>

                                <div className='mx-16'>
                                    <div  >Daily charge </div>
                                    {editFlag ?
                                        <Input className='w-88 inputBorder' name='dailyCharge' value={weekend.dailyCharge} onChange={(e) => this.handleInputChange(e, 'weekend')} inputProps={{ 'aria-label': 'description' }} />
                                        : <FormLabel className='w-auto' >{weekend.dailyCharge}</FormLabel>
                                    }
                                </div>
                                <div className='mx-16'>
                                    <div >Discount </div>
                                    {editFlag ?
                                        <Input className='w-88 inputBorder' name='discount' value={weekend.discount} onChange={(e) => this.handleInputChange(e, 'weekend')} inputProps={{ 'aria-label': 'description' }} />
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

                                <Button className="w-128 m-16 " variant="contained" color="secondary" onClick={(e)=>this.handleSubmitData(e)} >Save</Button>
                            </div>
                        </Typography>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default DeviceDetailPage; 